import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"

import readingTime from "reading-time"

import { JSX } from "preact"

import { formatDate } from "./Date"

import { classNames } from "../util/lang"
import { i18n } from "../i18n"

import style from "./styles/contentMeta.scss"

import type { QuartzComponentConstructor, QuartzComponentProps } from "./types"

const TimeMeta = ({ value }: { value: Date }) => {
  return (
    <time dateTime={formatDate(value, "pt-BR")}>
      {formatDistanceToNow(value, { addSuffix: true, locale: ptBR })} atrás
    </time>
  )
}

interface ContentMetaOptions {
  /**
   * Whether to display reading time
   */
  showReadingTime: boolean
  showComma: boolean
}

const defaultOptions: ContentMetaOptions = {
  showReadingTime: true,
  showComma: true,
}

export default ((opts?: Partial<ContentMetaOptions>) => {
  // Merge options with defaults
  const options: ContentMetaOptions = { ...defaultOptions, ...opts }

  function ContentMetadata({ cfg, fileData, displayClass }: QuartzComponentProps) {
    const text = fileData.text

    if (text) {
      const segments: (string | JSX.Element)[] = []

      if (fileData.dates) {
        if (fileData.dates.created) {
          segments.push(
            <span>
              🗒️ Escreveu <TimeMeta value={fileData.dates.created} />
            </span>,
          )
        }

        if (fileData.dates.modified) {
          segments.push(
            <span>
              ✏️ Modificou <TimeMeta value={fileData.dates.modified} />
            </span>,
          )
        }
      }

      // Display reading time if enabled
      if (options.showReadingTime) {
        const { minutes, words: _words } = readingTime(text)
        const displayedTime = i18n(cfg.locale).components.contentMeta.readingTime({
          minutes: Math.ceil(minutes),
        })
        segments.push(<span>⏳ {displayedTime}</span>)
      }

      segments.push(
        <a
          href={`https://github.com/Guiroos/obsidian-pathfinder-2e/commits/v4/${fileData.filePath}`}
          target="_blank"
        >
          🗓️ Histórico
        </a>,
      )

      const segmentsElements = segments.map((segment) => <span>{segment}</span>)

      return (
        <p show-comma={options.showComma} class={classNames(displayClass, "content-meta")}>
          {segments}
        </p>
      )
    } else {
      return null
    }
  }

  ContentMetadata.css = style

  return ContentMetadata
}) satisfies QuartzComponentConstructor
