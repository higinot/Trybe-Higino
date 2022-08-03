# MySQL

_SQL (Structured Query Language) é a linguagem mais usada para criar, pesquisar, extrair e também manipular dados dentro de um banco de dados relacional. Para que isso seja possível, existem comandos como o SELECT, UPDATE, DELETE, INSERT e WHERE, entre outros, que você aprenderá ao longo do curso._

## Constraints (Restrições):

_Como as constraints são aplicadas às colunas das tabelas, é possível assegurar que os dados inseridos nelas serão consistentes conforme as regras definidas. Veja alguns tipos de constraints:()_

- NOT NULL - Como as constraints são aplicadas às colunas das tabelas, é possível assegurar que os dados inseridos nelas serão consistentes conforme as regras definidas. Veja alguns tipos de constraints.

- UNIQUE - Garante que o valor inserido na coluna da tabela é único, isto é, não pode haver outro valor igual para esta coluna registrado nesta tabela.

- PRIMARY KEY - Garante
  que o valor seja a chave primária da tabela, ou seja, que a coluna que possui essa constraint aplicada seja o identificador único da tabela. Ela também é, por definição, não nula (mesmo efeito da constraint NOT NULL) e única (mesmo efeito da constraint UNIQUE).
- FOREIGN KEY - Garante que o valor seja uma chave estrangeira da tabela, ou seja, faça referência à chave primária (valor em uma coluna com a constraint PRIMARY KEY) de outra tabela, permitindo um relacionamento entre tabelas.

- DEFAULT - Garante que, caso nenhum valor seja inserido na coluna (ou caso a pessoa usuária insira um valor nulo), a constraint colocará o valor padrão passado para ela.

## Entidade

_Quando se fala de entidades de um banco de dados, estamos normalmente falando de uma tabela que representa algum conceito do mundo real que você quer descrever (pessoa, eventos, acontecimentos) e suas propriedades (altura, horário do evento, nome do acontecimento)._

- Entidade: Pessoas
- Propriedades: Altura, peso, idade.

## Conexão de dados

_Para não precisarmos duplicar dados em tabelas diferentes, podemos estabelecer relacionamentos entre as tabelas. Em um banco de dados existem quatro tipos de relacionamento._

    -Um para Um: Uma linha da Tabela A só deve possuir uma linha correspondente na tabela B ou vice-versa. (1:1)

    -Um para Muitos ou Muitos para um: Uma linha na tabela A pode ter várias linhas correspondentes na tabela B, mas uma linha da tabela B só pode possuir uma linha correspondente na tabela A. (N:1) ou (1:N)

    - Muitos para Muitos: Uma linha na tabela A pode possuir muitas linhas correspondentes na tabela B e vice-versa. (N:N)

## Query (Queries)

_Inquirir, ou query, em inglês, é o nome dado aos comandos que você digita dentro de uma janela ou linha de comando com a intenção de interagir de alguma maneira com uma base de dados._

- DDL: _Data Definition Language_ - Todos os comandos que lidam com o esquema, a descrição e o modo como os dados devem existir em um banco de dados:

  - **CREATE**: Para criar bandcos de dados, tabelas, indices, views, procedures, functions e triggers.
  - **ALTER**: Para alterar a estrtutura de qualquer objeto.
  - **DROP**: Permite deletar objetos.
  - **TRUCATE**: Apenas esvazia os dados dentro de uma tabela, mas a mantém no banco de dados.

- **DML**: _Data Manipulation Language_ - Comandos que são usados para manipular dados. São utilizados para armazenar, modificar, buscar e excluir dados em um banco de dados. Os comandos e ussos mais comuns nesta categoria são:

  - **SELECT**: Usado para buscar dados em um banco de dados.
  - **INSERT**: Insere dados em uma tabela.
  - **UPDATE**: Altera dados dentro de uma tabela.
  - **DELETE**: Exclui dados de uma tabela.

- **DCL**: _Data Control Language_ - Mais focado nos comandos que concedem direitos, permissões e outros tipos de controle ao sistema de banco de dados.

  - **GRANT**: Concede acesso a um usuário.
  - **REVOKE**: Remove acessos concedidos através do comando GRANT.

- **TCL**: _Transactional Control Language_ - Lida com as transações dentro de suas pesquisas.

  - **COMMIT**: Muda suas alterações de temporários para permanentes no seu banco de dados.
  - **ROLLBACK**: Desfaz tudo o impacto realizado por um comando.
  - **SAVEPOINT**: Define pontos para os quais uma transação pode voltar. É uma maneira de voltar para pontos especificos de sua query.
  - **TRANSACTION**: Comandos que definem onde, como e em que escopo suas transações são executadas.

## Comandos MySQL

### SELECT

_Esses conceitos são usar o SELECT para gerar valores e usar o AS para dar nomes às suas colunas, como nos exemplos a seguir._

> Seleciona todas(\*) colunas da tabela city.actor.

```javascript
SELECT * FROM sakila.city
```

> Seleciona _city_ e _country_id_ da tabela _sakila_city_

```javascript
SELECT city, country_id FROM sakila.city
```

> Cria uma tabela onde 'Rafale' esta na coluna _name_ e 'Martins' na coluna _sobrenome_

```javascript
SELECT 'Rafael' AS nome, 'Martins' AS 'sobrenome'
```

### CONCAT

_é possível concatenar mais de uma coluna em apenas uma. Para isso, usamos a função CONCAT, que cria novos dados e informações a partir dos dados já existentes em uma tabela._

> Concatena valores de _first_name_ e _last_name_ da tabela sakila.actor.

```javascript
SELECT CONCAT(first_name,' ', last_name) FROM sakila.actor ;
```

> Concatena valores de _first_name_ e _last_name_ da tabela sakila.actor e criar uma nova coluna com o nome _nome_completo_.

```javascript
SELECT CONCAT(first_name,' ', last_name) FROM sakila.actor ;
```

### DISTINCT

_Serve para eliminar valores repetidos_

> Selecionando valores únicos de _district_ na tabela _sakila.address_

```javascript
SELECT DISTINCT district FROM sakila.address ;
```

> Conta valores únicos de _district_ na tabela _sakila.address_

```javascript
SELECT COUNT(DISTINCT district) FROM sakila.address ;
```

### LIMIT

_Serve para limitar a pesquisa_

> Limita a pesquisa de 10 em 10 valores.

```javascript
SELECT * FROM sakila.rental LIMIT 10 ;
```

### OFFSET

_Serve para pular uma certa quantidade de linhas do seu resultado_

```javascript
SELECT * FROM sakila.rental LIMIT 10 OFFSET 3 ;
```

### ORDER BY

_Serve para ordenar os valores de forma ASC e DESC_

> Ordernar a tabela _sakila.address_ de forma ASC na coluna _district_ e DESC na coluna _address_.

```javascript
SELECT * FROM sakila.address
ORDER BY district ASC, address DESC
```

### WHERE

> Filtando somente os dados com o _last_name_ 'Davis' ;

```javascript
SELECT * FROM sakila.actor
WHERE last_name = 'Davis' ;
```

> Filtrando somente os dados com o _last_name_ 'Davis' e o _actor_id_ = 1.

```javascript
SELECT * FROM sakila.actor
WHERE last_name = 'Davis' AND actor_id = 1 ;
```

> Filtrando somente os dados com o length > 50 e ordenando de forma ASC

```javascript
SELECT * FROM sakila.film
WHERE length > 50
ORDER BY length ;
```

> Filtrando somente os dados com _title_ <> 'ALIEN CENTER' e _replacement_cost_ > 20

```javascript
SELECT * FROM sakila.film
WHERE title <> 'ALIEN CENTER'
AND replacement_cost > 20 ;
```

> Filtrando somente os dados com _rating_ = 'R' ou 'PG' ou 'PG-13'

```javascript
SELECT * FROM sakila.film
WHERE rating = 'G' OR rating = 'PG' OR 'PG-13' ;
```

> Filtrando somente os dados com _return_date_ nulo

```javascript
SELECT * FROM sakila.rental
WHERE return_date IS NULL ;
```

### LIKE

_Ajuda a filtrar dados com alguma referencia de valor_

- % - _O sinal de percentual, que pode representar zero, um ou multiplos caracteres._
- _ - \_O undersocre que representa um unico caractere._

> Filtrando somente dados que começam com ACADEMY

```javascript
SELECT * FROM sakila.film
WHERE title LIKE 'ACADEMY%'
```

> Filtrando somente dados que terminam com ACADEMY

```javascript
SELECT * FROM sakila.film
WHERE title LIKE '%ACADEMY'
```

> Resultado da pesquisa. Encontra qualquer resultado que inicia com 'p' e finaliza com 'r'

```javascript
SELECT * FROM sakila.film
WHERE title LIKE 'p%r' ;
```

> Resultado da pesquisa. Encontra qualquer resultado em que o segundo caractere da frase é 'C'

```javascript
SELECT * FROM sakila.film
WHERE title LIKE '_C%';
```

> Resultado da pesquisa. Encontra qualquer resultado em que o título possui exatamente 8 caracteres

```javascript
SELECT * FROM sakila.film
WHERE title LIKE '________' ;
```

### IN

_Serve para unir as condições de OR_

> O IN serve para substituir a suposição OR

```javascript
SELECT * FROM sakila.actor
WHERE first_name IN ('PENELOPE', 'NICK', 'ED', 'JENNIFER') ;
```

### BETWEEN

_Serve para fazer pesquisar dentro de um faixa inicial e final_

> Seleciona os dados, onde film_id esta entre 5 e 10

```javascript
SELECT * FROM sakila.film
WHERE film_id BETWEEN 5 AND 10
```

> Seleciona os dados, onde rental_date esteja entre 2005-05-27 e 2005-09-20.

```javascript
SELECT * FROM sakila.rental
WHERE rental_date BETWEEN '2005-05-27' AND '2005-09-20'
```

### DATE

_Seleciona datas com o padrão YYYY-MM-DD_

> Seleciona dados onde o payment_date é igual a 2005-07-31

```javascript
SELECT * FROM sakila.payment
WHERE DATE(payment_date0) = '2005-07-31' ;
```

> Seleciona dados onde o payment_date entre 2005-05-26 00:00:00 a 2005-05-27 23:59:59.

```javascript
SELECT * FROM sakila.payment
WHERE payment_date BETWEEN '2005-05-26 00:00:00' AND '2005-05-27 23:59:59';
```


### Criando uma TABELA:

> Criando uma tabela

```javascript
CREATE TABLE filme(
    filme_id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
        create_time DATETIME COMMENT 'Create Time',
        update_time DATETIME COMMENT 'Update Time',
        content VARCHAR(255) COMMENT 'content'
        ) DEFAULT CHARSET UTF8 COMMENT 'newTable';
```
