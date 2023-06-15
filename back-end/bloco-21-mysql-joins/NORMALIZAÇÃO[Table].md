## Database Design - Modelagem

1. Identificar as entidades, atributos e relacionamentos com base na descrição do problema:

    1.1 Por exemplo, a entidade álbum possui os atributos título e preço e se relaciona com a entidade artista.

2. Construir um diagrama entidade-relacionamento para representar as entidades encontradas no passo 1:

    2.1 O diagrama serve como um guia para que você possa visualizar as entidades (tabelas) que irão se relacionar.

3. Criar um banco de dados para conter suas tabelas:

    3.1 Após analisar e criar um diagrama de como o seu banco de dados vai ser estruturado, você pode dar início a criação dele.

4. Criar e relacionar tabelas tendo o diagrama do passo 2 como base:

    4.1 Após criar seu banco de dados, você pode começar a criar e relacionar as tabelas de acordo com o diagrama.

### Entidades
> São uma representação de algo do mundo real dentro do banco de dados e que normalmente englobam toda uma ideia. São armazenadas em formato de tabelas em um banco de dados.

- ↓ Ver entidades
    - Entidade 1: Álbum;
    - Entidade 2: Artista;
    - Entidade 3: Estilo Musical;
    - Entidade 4: Canção.

### Atributos
> Um atributo é tudo aquilo que pode ser usado para descrever algo. Por exemplo, uma entidade pessoa pode ter nome, altura, peso e idade como atributos.

- ↓ Ver atributos
    - Álbum: album_id, titulo, preco, estilo_id e artista_id;
    - Artista: artista_id e nome;
    - Estilo Musical: estilo_id e nome;
    - Canção: cancao_id, nome e album_id.

### Relacionamento
>Os relacionamentos servem para representar como uma entidade deve estar ligada com outra(s) no banco de dados. Há três tipos de relacionamentos possíveis em um banco de dados, são eles:

- Relacionamento Um para Um (1..1);
- Relacionamento Um para Muitos ou Muitos para Um (1..N);
- Relacionamento Muitos para Muitos (N..N).

- ↓ Ver Relacionamentos
    - Um artista pode possuir um ou mais álbuns;
    - Um estilo musical pode estar contido em um ou mais álbuns;
    - Um álbum pode possuir uma ou mais canções.

## Contruindo uma diagrama entidade-relacionamento
No segundo passo, será construído um diagrama entidade-relacionamento para representar as entidades encontradas no passo 1.

Existem diversas ferramentas para modelar os relacionamentos em um banco de dados. Hoje será usada a draw.io

Agora é preciso montar um diagrama de relacionamento básico que demonstra como uma entidade é relacionada com a outra, usando o modelo EntidadeA + verbo + EntidadeB.

Considerando as entidades Álbum, Artista, Estilo Musical e Canção, foi construído o seguinte diagrama:

## Montando um diagrama mais detalhado
Para diagramas ER (entidade-relacionamento) mais detalhados, deve-se incluir o nome das tabelas, suas chaves primárias e estrangeiras, suas colunas e seus relacionamentos.

> De olho na dica 👀: Por questão de convenções e boas práticas na criação de tabelas, não são usados acentos ou espaços entre os nomes das tabelas. Lembre-se 🧠: Existem várias maneiras de se modelar um banco de dados. Então, caso pense diferente do modelo abaixo, entenda que existem diversas formas de se resolver um mesmo problema.

## 3) Criando um banco de dados para conter suas tabelas
Agora que você já tem um diagrama que representa as tabelas que precisam ser criadas, já pode botar a mão no código. 💻

Ao lidar com a criação e gerenciamento de um banco de dados, você precisará conhecer os seguintes comandos:

````
-- Cria um banco de dados com o nome especificado.
CREATE DATABASE nome_do_banco_de_dados;

-- `CREATE DATABASE` ou `CREATE SCHEMA` fazem a mesma coisa.
CREATE SCHEMA nome_do_banco_de_dados;

-- Verifica se o banco de dados ainda não existe.
-- Essa verificação é comumente utilizada junto ao CREATE DATABASE para evitar
-- a tentativa de criar um banco de dados duplicado, o que ocasionaria um erro.
IF NOT EXISTS nome_do_banco_de_dados;

-- Lista todos os bancos de dados existentes.
SHOW DATABASES;

-- Define o banco de dados ativo para uso no momento.
USE nome_do_banco_de_dados;
````
## 4) Criando e modelando tabelas de acordo com um diagrama ER

> Chave primária composta
No vídeo vimos que a chave primária é uma restrição, ou constraint que serve para identificar uma linha e garantir que não haverá dados redundantes em uma tabela. Uma chave primária pode ser formada por uma ou mais colunas de uma tabela. Ou seja, por mais que só possamos ter uma única chave primária por tabela, essa chave pode ser simples (apenas uma coluna) ou composta (conjunto de colunas).

Veremos um exemplo para ilustrar a utilização de uma chave primária composta, considere a seguinte tabela:

````
DROP SCHEMA IF EXISTS brasil;
CREATE SCHEMA brasil;
USE brasil;

CREATE TABLE cidades(
  cidade VARCHAR(100) NOT NULL,
  estado VARCHAR(10) NOT NULL,
  populacao INTEGER,
  CONSTRAINT PRIMARY KEY(cidade)
);
````

## Normalização 
Os conceitos de normalização permitem que você aprofunde seus conhecimentos nas estruturas relacionais fundamentais, o que colabora para a tomada de decisões mais assertivas e seguras.

Essa confiança será importantíssima no momento de fazer modificações em estruturas de bancos de dados existentes ou criar novas estruturas do zero.

### 1º Forma Normal
> Para iniciar a organização de um banco de dados, devemos nos atentar para a Primeira Forma Normal - base de todas as outras. Seus preceitos são:

- Colunas devem possuir apenas um valor;
- Valores em uma coluna devem ser do mesmo tipo de dados;
- Cada coluna deve possuir um nome único;
- A ordem dos dados registrados em uma tabela não deve afetar a integridade dos dados.

### 2º Forma Normal
Para a Segunda Forma Normal, devemos atentar para o seguinte:

- A tabela deve estar na 1ª Forma Normal;
- A tabela não deve possuir dependências parciais.

Uma dependência parcial pode ser considerada como qualquer coluna que não depende exclusivamente da chave primária da tabela para existir. Por exemplo, considere uma tabela Pessoa Estudantes que possui as seguintes colunas:

## 3ª Forma Normal
Por fim, a Terceira Forma Normal estabelece que:

- A tabela deve estar na 1ª e 2ª Formas Normais;
- A tabela não deve conter atributos (colunas) que não sejam dependentes exclusivamente da PK (chave primária).