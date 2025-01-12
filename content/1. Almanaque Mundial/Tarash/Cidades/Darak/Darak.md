---
title: Darak
date: 2024-04-08T16:44
updated: 2025-01-05T23:55:00
tags:
  - categoria/aldeia
  - localização
  - tarash/darak
Tipo: Aldeia
Tamanho: Médio
População: 1000
Região: Tarash
Líder: Eldor Terraza
Governo: Democracia
Política: Conselho
Defesa: Leve
Tendência: 
RaçasComuns:
  - Humanos
  - Elfos
  - Anões
Religião:
  - Aurora
  - Thalassa
Exportação:
  - Grãos
  - Frutas
  - Legumes
  - Carne
Importação:
  - Produtos de Luxo
Grupos:
  - Guilda dos Fazendeiros
  - Culto
Ícone: Localização
---

> [!infobox]
> # Darak
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


# Darak

## Sobre

Darak é o coração agrícola de [[Tarash]], onde campos dourados de grãos e pomares exuberantes se estendem até o horizonte. A cidade, com sua atmosfera tranquila e vibrante, é sustentada pelo trabalho diligente de seus habitantes, que vivem em harmonia com a terra. Conhecida por sua produção abundante e de alta qualidade, Darak é uma peça vital na economia de [[Tarash]], fornecendo alimentos para toda a região e exportando suas colheitas para cidades vizinhas.

Com sua história rica e uma comunidade unida, Darak representa o espírito de resiliência e cooperação, destacando-se como um exemplo de como o esforço coletivo pode transformar desafios em prosperidade.

## História

### Fundação

Darak foi fundada no ano 130 por [[Eldor Terraza]] e um grupo de colonos em busca de um refúgio pacífico e fértil. Eles chegaram às planícies que cercam a [[Floresta Incansável]] e começaram a trabalhar na terra, cultivando-a com dedicação. Eldor, com sua visão e liderança inspiradora, tornou-se o pilar dessa nova comunidade.

### Desenvolvimento Inicial 

Nos primeiros anos, Darak era apenas uma pequena aldeia agrícola, dependente da generosidade da natureza e do trabalho árduo de seus habitantes. Com o tempo, a cidade cresceu e se tornou um importante centro agrícola, fornecendo alimentos não apenas para sua própria população, mas também para outras cidades e regiões de Tarash.

Nos primeiros anos, a aldeia enfrentou desafios, desde ataques ocasionais de animais selvagens das florestas até condições climáticas imprevisíveis. Mas, com a orientação de [[Eldor Terraza]] e o esforço incansável dos habitantes, Darak começou a prosperar. O desenvolvimento do [[Grande Canal]] foi um divisor de águas, garantindo irrigação mesmo em tempos de seca e elevando a produtividade agrícola da cidade a níveis impressionantes.

### Importância na História de Tarash

Darak desempenhou um papel crucial na história de [[Tarash]], fornecendo alimentos essenciais e recursos agrícolas que sustentavam a economia e a população da ilha. 

### Eventos Importantes

#### Grande Seca (Ano 160-170)

Um período devastador de dez anos em que a região enfrentou uma severa falta de chuvas.

- Redução drástica das colheitas e migração de algumas famílias para outras regiões.
- Fortaleceu o senso de comunidade, com os moradores se unindo para dividir recursos e encontrar soluções criativas.
- Levou à concepção e construção do **Grande Canal**, que se tornou um marco na história da cidade.

#### Construção do Grande Canal (Ano 165-170)

Liderado por [[Eldor Terraza]], após ser guiado por [[Aurora]], buscou ajuda de engenheiros das cidades vizinhas e construiu o [[Grande Canal]], que trouxe água do mar para irrigar as terras da cidade, garantindo a sobrevivência durante períodos de seca. [[Eldor Terraza]] junto de alguns sacerdotes, criaram alguns rituais para [[Thalassa]], que ajudam a purificar a agua e torna-la mais eficiente para a população.

- Aumento significativo na produtividade agrícola.
- Reservas de um recurso primário para a vida.
- Fortalecimento da economia local .
- Elevação do prestígio de Darak em [[Tarash]].

#### Inauguração do Salão do Conselho (Ano 190)

Um marco na evolução política de Darak, simbolizando a transição de uma liderança centralizada para uma governança mais participativa com o [[Salão do Conselho]].

- Uma coalizão entre fazendeiros e guerreiros locais resultou na criação de estratégias de defesa, como armadilhas e patrulhas regulares.
- A vitória consolidou a reputação de Darak como uma comunidade resiliente e engenhosa.

## Cultura e Tradições

### Festival da Semeadura

Uma celebração anual que ocorre no início da temporada de plantio. Os habitantes de Darak se reúnem na [[Praça Central]] para realizar rituais em honra a [[Aurora]] e [[Thalassa]], pedindo bênçãos para uma colheita abundante.

- Plantio simbólico na praça, liderado por [[Eldor Terraza]].
- Banquetes comunitários com pratos feitos a partir das últimas colheitas do ano anterior.
- Danças e músicas tradicionais que celebram a conexão entre a comunidade e a terra.

### Noite das Luzes

Uma tradição que celebra a superação da Grande Seca, simbolizando resiliência e gratidão. Durante uma noite específica, a cidade é iluminada por lanternas feitas à mão, que os moradores colocam ao longo do [[Grande Canal]]. Cada lanterna representa um agradecimento pela água que sustenta Darak e um desejo de prosperidade para o futuro.

- Histórias e lendas são contadas ao redor da [[Praça Central]], especialmente sobre a construção do [[Grande Canal]].
- O evento culmina em um ritual à beira da fonte sagrada, onde ofertas são feitas aos deuses protetores da cidade

### Dia do Fundador

Uma homenagem anual a [[Eldor Terraza]] e aos fundadores de Darak, relembrando sua coragem e visão ao estabelecer a cidade.

- Cerimônias na [[Casa de Eldor Terraza]] e na [[Praça Central]].
- Apresentações teatrais encenando a fundação da cidade e eventos históricos marcantes.
- Um desfile pela cidade, liderado por membros do [[Conselho de Anciãos]].

## Pontos de Interesse

### Casa de Eldor Terraza

A [[Casa de Eldor Terraza|residência modesta de Eldor Terraza]], onde ele vive com sua família e atua como conselheiro e líder espiritual para os habitantes de Darak. Suas portas estão sempre abertas para os habitantes de Darak, que buscam conselhos ou conforto.

### Moinho de Eldor Terraza

Um [[Moinho de Eldor Terraza|moinho de vento gigante]] construído em homenagem a [[Eldor Terraza]], que simboliza a força e a perseverança dos habitantes de Darak. O moinho fornece energia para moer grãos e produzir farinha, desempenhando um papel crucial na economia agrícola da cidade.

### Salão do Conselho 

Um salão localizado no centro de Darak, próximo à [[Praça Central]] e à [[Casa de Eldor Terraza]], onde os líderes comunitários se reúnem para discutir assuntos de política, segurança, economia e bem-estar da cidade.

### Mercado Agrícola

O [[Mercado Agrícola|centro comercial]] de Darak, vibrante com a troca de mercadorias frescas e o burburinho da comunidade. É aqui que agricultores exibem o fruto de seu trabalho, e visitantes de outras cidades vêm para negociar.

### Praça Central

O [[Praça Central|coração social e espiritual]] de Darak, com uma estátua de [[Eldor Terraza]] e uma fonte dedicada aos deuses da colheita. Durante festivais, a praça ganha vida com música, danças e banquetes.
 
### Estalagem do Pomar Verde

Uma [[Estalagem do Pomar Verde|estalagem]] acolhedora e rústica, conhecida por servir as melhores refeições caseiras de toda [[Tarash]], usando ingredientes frescos da região. É um ponto de encontro popular para viajantes e locais, onde histórias são contadas ao redor do fogo.

### Grande Canal

O [[Grande Canal]]  é uma obra de engenharia e magia divina, criada para dessalinizar e distribuir água do mar às plantações da cidade. Construído durante a Grande Seca, combina rituais sagrados em honra a [[Thalassa]] e [[Aurora]], simbolizando resiliência e fé.

## Relações Internas

#### Líderes e Pessoas

- **[[Eldor Terraza]]:** Ele é reverenciado como o fundador e líder espiritual de Darak. Ele mantém uma relação próxima com os habitantes da cidade, ouvindo suas preocupações, oferecendo conselhos sábios e inspirando-os a alcançar seu pleno potencial.
- **Conselho de Anciãos:** O Conselho de Anciãos é composto por líderes respeitados da comunidade, que trabalham em conjunto com Eldor para tomar decisões importantes para o bem-estar da cidade. Embora nem sempre concordem, eles compartilham um compromisso comum com o futuro de Darak.

#### Relações Sociais

- **Comunidade Unida:** Os habitantes de Darak compartilham um senso de comunidade forte e coeso, onde os laços familiares e de vizinhança são valorizados. Eles se ajudam mutuamente em tempos de necessidade e celebram juntos em tempos de prosperidade.
- **Respeito pela Natureza:** Como uma cidade agrícola, Darak tem um profundo respeito pela terra e pela natureza. Os habitantes entendem a importância de viver em harmonia com o ambiente e trabalham para proteger e preservar seus recursos naturais.

## Relações Externas

#### Comércio e Interação

- **Comércio Regional:** Darak mantém relações comerciais saudáveis com outras cidades em [[Tarash]], especialmente aquelas que dependem de seus produtos agrícolas. Eles trocam grãos, carne e outros produtos agrícolas por bens e serviços de outras regiões.

#### Interdependência Regional

- **Ajuda Mútua em Tempos de Crise:** Em tempos de crise, as cidades de Tarash se unem em solidariedade, oferecendo ajuda mútua e suporte emocional. Darak está pronta para ajudar outras comunidades em caso de desastres naturais, conflitos ou outras emergências.
- **Troca de Conhecimentos e Recursos:** Darak valoriza a troca de conhecimentos e recursos com outras cidades, buscando aprender com suas práticas agrícolas, técnicas de construção e tradições culturais. Essa troca enriquece a vida da cidade e fortalece os laços entre as comunidade
