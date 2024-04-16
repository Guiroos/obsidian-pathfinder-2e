---
title: Rosares
date: 2024-04-08T14:08
updated: 2024-04-16T00:16
tags:
  - categoria/habitação
  - localização
Tipo: Habitação
Tamanho: Pequeno
População: 90
Região: Tarash
Líder: Nelson Maré Alta
Governo: Democracia
Política: Conselho
Defesa: Nenhuma
Tendência: 
RaçasComuns:
  - Humanos
  - Anões
Religião:
  - Thalassa
  - Zephyrus
Exportação:
  - Peixes
  - Frutos do Mar
Importação:
  - Ferramentas de Pesca
  - Materiais de Construção
Grupos:
  - Guilda dos Pescadores
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
  
Rosares é uma pequena habitação costeira emergente, situada entre o majestoso mar e as densas florestas que se estendem até o horizonte. Com uma população de aproximadamente 90 pessoas, é uma comunidade unida que subsiste principalmente da pesca abundante que o oceano oferece. As casas simples dos pescadores se alinham ao longo da costa, enquanto a vegetação exuberante da floresta fornece uma barreira natural contra os elementos.

No entanto, Rosares enfrenta um mistério sombrio que assombra suas noites tranquilas. Ataques silenciosos ocorrem periodicamente, com criaturas desconhecidas saqueando os estoques de peixe e ameaçando a segurança dos habitantes. Poucos sabem da verdadeira origem desses ataques, mas rumores sobre uma presença sinistra na floresta começam a se espalhar entre os moradores.

Apesar dos desafios, os pescadores de Rosares continuam a lutar pela sobrevivência, confiando na solidariedade e na determinação para enfrentar os perigos que espreitam nas sombras da noite.

## História

### Fundação

Rosares foi fundada por um grupo de pescadores corajosos que buscavam uma vida melhor nas margens do oceano. Atraídos pela abundância de peixes e pela promessa de uma vida simples, eles estabeleceram as bases da cidade há algumas décadas, construindo suas casas modestas e redesenhando suas vidas em torno da pesca.

### Desenvolvimento Inicial 

Nos primeiros anos, Rosares enfrentou desafios significativos à medida que seus habitantes lutavam para se estabelecer em uma terra nova e desconhecida. No entanto, com trabalho árduo e determinação, a comunidade começou a prosperar, desenvolvendo técnicas de pesca eficazes e construindo uma reputação como fornecedores confiáveis de peixe fresco para as regiões vizinhas.

### Eventos Importantes

Embora a história de Rosares seja relativamente curta, alguns eventos marcantes moldaram o destino da comunidade. Um dos eventos mais significativos foi o primeiro ataque das misteriosas criaturas da floresta, que chocou os habitantes e deixou-os temerosos do desconhecido que espreitava além das árvores. Desde então, esses ataques se tornaram uma ameaça constante, desafiando a segurança e a estabilidade da cidade.

### Importância na História de Tarash

Apesar de sua juventude, Rosares está começando desempenha um papel vital na história de Tarash como uma das poucas comunidades costeiras que fornece uma fonte crucial de alimento para as cidades e vilarejos ao redor. Sua luta contra as adversidades e sua determinação em enfrentar os perigos desconhecidos da floresta a tornam um símbolo de resistência e coragem para os habitantes de Tarash.

## PNJs Notáveis

- [[Nelson Maré Alta]] 

## Pontos de Interesse

### Porto dos Pescadores

O [[Porto dos Pescadores]] é o coração pulsante de Rosares, onde as embarcações dos pescadores retornam diariamente carregadas de peixes frescos. Os visitantes podem testemunhar o frenesi da atividade enquanto os pescadores descarregam sua captura e interagem com os comerciantes locais. É um local vibrante e movimentado, repleto de cores, cheiros e sons que capturam a essência da vida costeira.

### Farol Abandonado

No topo das falésias que se erguem sobre o mar agitado, fica a estrutura do [[Farol Abandonado]]. Iniciada com grande esperança e determinação pelos habitantes da cidade, a construção do farol visava guiar os pescadores e navegantes com segurança através das águas traiçoeiras da costa. No entanto, a falta de recursos e mão de obra limitou o progresso da construção, e a estrutura permanece incompleta e abandonada há anos.

### Taverna do Maré Alta

A [[Taverna do Maré Alta]] é o principal ponto de encontro dos habitantes de Rosares, onde podem relaxar após um longo dia de trabalho no mar. O local é conhecido por suas bebidas refrescantes e pratos deliciosos feitos com os peixes mais frescos da região. Os viajantes são bem-vindos para se juntar aos locais em conversas animadas e compartilhar histórias de suas próprias aventuras.

## Relações Internas

### Líderes e Pessoas
- **[[Nelson Maré Alta]]:** Reconhecido como o líder informal de Rosares, Maré Alta é uma figura respeitada e admirada pelos habitantes da cidade. Seu apelido deriva de sua coragem e habilidade como pescador, sendo visto como um exemplo de determinação e liderança. Embora não possua um título formal, Maré Alta exerce influência sobre as decisões importantes da comunidade, utilizando sua experiência e sabedoria para orientar seus conterrâneos.
- **Conselho Comunitário:** Composto por líderes locais e membros influentes da comunidade, o Conselho Comunitário de Rosares atua como uma instância consultiva e deliberativa. Este grupo desempenha um papel essencial na promoção do diálogo e na resolução de questões que afetam a cidade, garantindo que os interesses e necessidades dos cidadãos sejam adequadamente representados e atendidos.

### Relações Sociais
- **Herança Marítima:** O mar desempenha um papel central na identidade e na cultura de Rosares, sendo celebrado e honrado em festivais e eventos comunitários. A herança marítima da cidade é valorizada e transmitida de geração em geração, com histórias de bravura, resiliência e camaradagem dos pescadores locais sendo passadas adiante como um legado precioso.
- **Respeito pelo Mar:** Rosares é permeada por um profundo respeito pelo mar e todos os seus habitantes. Os pescadores locais reconhecem a generosidade do oceano e trabalham em estreita colaboração com ele para garantir uma pesca sustentável e responsável. Eles adotam práticas de pesca éticas e cuidadosas, minimizando seu impacto no ecossistema marinho e garantindo a preservação das espécies aquáticas.

## Relações Externas

### Comércio e Interação
- **Comércio Marítimo:** Como uma cidade pesqueira, Rosares desempenha um papel crucial no comércio marítimo da região, fornecendo peixes frescos e frutos do mar para comunidades vizinhas e além. Os pescadores de Rosares frequentemente embarcam em expedições comerciais para vender seus produtos em mercados distantes, contribuindo para o desenvolvimento econômico e a prosperidade da cidade.

### Interdependência Regional
- **Preservação Ambiental:** Rosares aprendeu que a preservação e conservação do meio ambiente marinho na região é de extrema importância para a sobrevivência de ambos. Como uma comunidade consciente dos desafios enfrentados pelos ecossistemas marinhos, os habitantes de Rosares tomam medidas proativas para proteger e restaurar a saúde dos oceanos.

## Detalhes Adicionais

- 
