---
title: Nova Localização
date: 2024-04-08T14:25
updated: 2024-04-16T00:18
tags:
  - categoria/vila
  - localização
Tipo: Vila
Tamanho: Médio
População: 1000
Região: Tarash
Líder: Armand Berti
Governo: Aristocracia
Política: Conselho
Defesa: Leve
Tendência: Neutro
RaçasComuns:
  - Humanos
  - Anões
Religião:
  - Thalassa
  - Zephyrus
Exportação:
  - Peixes
  - Artesanato
Importação:
  - Materiais de Construção
  - Tecidos
  - Especiarias
  - Arte
Grupos:
Ícone: Localização
---

> [!infobox]
> # `=this.file.name`
> ![[z_Assets/Misc/MapPlaceholder.png|cover hm-sm]]
> [[z_Assets/Misc/MapPlaceholder.png|Mostrar]]
> ###### Geografia
> Tipo |  Valor |
> ---|---|
> Tipo | `=this.Tipo` |
> Tamanho | `=this.Tamanho` |
> População | `=this.População` |
> Região | `=link(this.Região)` |
> ###### Política 
> Tipo |  Valor |
> ---|---|
> Líder | `=link(this.Líder)` |
> Governo | `=this.Governo` |
> Política | `=this.Política` |
> Defesa | `=this.Defesa` |
> ###### Sociedade
> Tipo |  Valor |
> ---|---|
> Raças Comuns | `=this.RaçasComuns` |
> Religião | `=this.Religião`  |
> ###### Comércio
> Tipo |  Valor |
> ---|---|
> Exportação | `=this.Exportação` |
> Importação | `=this.Importação` |
> ###### Organizações
> Tipo |  Valor |
> ---|---|
> ```dataview
> table WITHOUT ID link(file.name) AS "Grupo", link(Líder) AS "Líder"
> where contains( Lar, this.file.name)
> ```
> ###### PNJs
> Tipo |  Valor |
> ---|---|
> ```dataview
> table WITHOUT ID link(file.name) AS "PNJ", Gênero, Raça
> where contains( Localização, this.file.name)
> ```


# `=this.file.name`
## Visão Geral

Shepu é uma próspera cidade portuária localizada em uma posição estratégica na costa de Tarash. Com o maior porto da região, é o ponto de entrada e saída para todos os navios que chegam à ilha, sejam eles de viajantes em busca de aventuras ou de comerciantes em busca de negócios. A economia de Shepu gira inteiramente em torno da indústria naval, com atividades que incluem construção, manutenção e reparo de navios, além do comércio marítimo de mercadorias.

No entanto, o rápido crescimento da cidade tem levado a desafios significativos de governança. O governo local enfrenta dificuldades em acompanhar o ritmo do desenvolvimento, resultando em uma administração caótica e problemas que vão desde o controle do crime até a gestão de infraestrutura e recursos públicos. Apesar desses desafios, Shepu continua a atrair novos residentes em busca de oportunidades e aventuras oferecidas pelo movimentado porto e pela vida à beira-mar.

## História

### Fundação

Shepu teve sua origem como um pequeno assentamento de pescadores há várias décadas, que aproveitaram a localização estratégica da baía para pescar e comercializar seus produtos. Com o tempo, o assentamento cresceu à medida que mais pescadores e comerciantes se estabeleceram na área, atraídos pelas oportunidades oferecidas pelo movimentado porto e pela proximidade com o mar aberto.

### Desenvolvimento Inicial 

À medida que o comércio marítimo se tornou mais lucrativo, Shepu cresceu rapidamente em uma cidade portuária próspera. O porto foi expandido e modernizado para acomodar o crescente volume de navios que chegavam e partiam, enquanto as docas e estaleiros se multiplicavam para atender à demanda por serviços de construção naval e reparo de navios.

### Eventos Importantes

Um dos eventos mais significativos na história de Shepu foi a construção do Farol do Olhar Brilhante, uma imponente estrutura de pedra erguida no ponto mais alto da cidade para orientar os navios durante as noites escuras e tempestuosas. Sua construção marcou um marco importante no desenvolvimento da cidade e contribuiu para a segurança e prosperidade contínuas do porto.

### Importância na História de Tarash

Shepu desempenha um papel crucial na história de Tarash como o principal ponto de entrada e saída para o comércio marítimo da ilha. Sua localização estratégica e sua infraestrutura portuária robusta tornam-na um centro vital de atividade econômica e uma peça-chave na rede de comércio que conecta Tarash ao resto do mundo. Ao longo dos anos, Shepu se estabeleceu como um dos pilares da economia insular e como uma força motriz por trás do desenvolvimento e crescimento de Tarash.

## NPCs Notáveis
insira seu texto aqui

## Pontos de Interesse

### Porto do Mar Eterno

O coração pulsante da cidade, o [[Porto do Mar Eterno]] é onde todas as atividades comerciais acontecem. Aqui, os viajantes podem testemunhar o constante movimento de navios chegando e partindo, enquanto os moradores locais se dedicam às suas ocupações marítimas.

### Bazar da Marés

Localizado próximo ao porto, o [[Bazar das Marés]] é um local muito agitado onde os moradores e os visitantes podem encontrar uma variedade de produtos trazidos pelos navios que atracam em Shepu. De peixes frescos a especiarias exóticas, o mercado oferece uma ampla gama de produtos para satisfazer os paladares mais exigentes.

### Rua dos Estaleiros 

A [[Rua dos Estaleiros]] é o lar dos estaleiros e oficinas de construção naval de Shepu. Aqui, os artesãos habilidosos trabalham incansavelmente na construção, reparo e manutenção dos navios que enchem o porto. Os visitantes podem observar o processo de construção naval e até mesmo encomendar suas próprias embarcações personalizadas.

### Taverna das Ondas Sussurrantes

Um ponto de encontro popular para marinheiros e viajantes, a [[Taverna das Ondas Sussurrantes]] é um lugar onde histórias de aventuras marítimas são trocadas ao som de canções de mar. Os viajantes podem desfrutar de uma refeição farta e de uma bebida refrescante enquanto compartilham experiências com os habitantes locais.

### Farol do Olhar Brilhante

Este farol imponente é uma das estruturas mais reconhecíveis de Shepu. Localizado no ponto mais alto da cidade, o [[Farol do Olhar Brilhante]] guia os navios com segurança durante as noites escuras e tempestuosas, garantindo uma navegação segura para aqueles que entram e saem do porto.

### Templo de Thalassa

Lugar onde os habitantes de vão para pedir proteção para a deusa do mar, o [[Templo de Thalassa]] está situado em um dos extremos da cidade perto do mar.

### Templo de Zephyrus

Lugar onde os habitantes de vão para pedir orientação para o deus dos ventos, o [[Templo de Zephyrus]] está situado em um lugar alto da cidade perto do [[Farol do Olhar Brilhante]] .

## Relações Internas
### Líderes e Pessoas:
- [[Armand Berti]]  enfrenta desafios para manter a ordem na cidade em rápida expansão. Ele pode ser visto como figuras carismáticas, mas também enfrenta críticas devido à crescente agitação e à dificuldade em lidar com os problemas emergentes. Além disso, há um conflito entre seus filhos sobre qual a melhor estratégia para lidar com esse caos onde ambos querem subir ao poder.
- A população de Shepu está dividida entre os que apoiam fervorosamente o desenvolvimento econômico do porto e aqueles que estão preocupados com os impactos negativos do crescimento descontrolado, como o aumento da criminalidade e a degradação ambiental.

### Relações Sociais:
- Os habitantes de Shepu têm um forte senso de comunidade, unidos pelo trabalho árduo e pela dependência mútua do comércio marítimo. Eles valorizam a camaradagem e a solidariedade em face dos desafios que enfrentam.
- A cultura de Shepu é enraizada na tradição marítima, com muitos moradores tendo laços familiares com a pesca ou o comércio naval. Eles celebram festivais e eventos que homenageiam o mar e sua influência na vida da cidade.

## Relações Externas
### Comércio e Interação:
- Shepu é um centro vital de comércio marítimo, atraindo navios de todas as partes para negociar e trocar mercadorias. A cidade mantém relações comerciais estreitas com outras comunidades costeiras, fornecendo e recebendo uma variedade de bens.
- A interação constante com viajantes e comerciantes de outras regiões enriquece a vida cultural de Shepu. A cidade recebe influências culturais variadas, desde culinária e arte até tradições religiosas e práticas sociais. Em troca, Shepu compartilha sua própria cultura única, contribuindo para uma tapeçaria diversificada de identidades regionais.

### Interdependência Regional:
- Shepu depende da região circundante para o fornecimento de recursos essenciais, como alimentos, água doce e materiais de construção. Os moradores da cidade contam com as áreas vizinhas para suprir suas necessidades básicas, enquanto contribuem com o comércio marítimo para exportar os produtos locais.

## Detalhes Adicionais

### Dinâmica Política

- Armand está enfrentando crescente pressão da população de Shepu devido aos problemas causados pelo crescimento descontrolado da cidade. Ele vê seus filhos como potenciais sucessores, mas está dividido entre os diferentes ideais e abordagens deles.
- Bruno e Lucas estão competindo abertamente pelo apoio político e popular na cidade. Bruno promete um futuro próspero e desenvolvimento econômico, enquanto Lucas apela para a preocupação comunitária e a preservação do meio ambiente.
- A disputa entre os irmãos está dividindo a cidade, com diferentes grupos apoiando cada um deles. A situação está ficando cada vez mais tensa, e a ameaça de instabilidade política paira sobre Shepu.