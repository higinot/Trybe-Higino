# MySQL

_SQL (Structured Query Language) é a linguagem mais usada para criar, pesquisar, extrair e também manipular dados dentro de um banco de dados relacional. Para que isso seja possível, existem comandos como o SELECT, UPDATE, DELETE, INSERT e WHERE, entre outros, que você aprenderá ao longo do curso._

``docker container run --name container-mysql -e MYSQL_ROOT_PASSWORD=senha-mysql -d -p 3306:3306 mysql:8.0.31``

Rodar terminal do Docker ``docker exec -it container-mysql bash``

Terminal do MYSQL no Docker
``mysql -u root -p``

## Manipulação de strings:

>O MySQL possui algumas funções de manipulação de texto que facilitam essas tarefas.

```javascript
-- Converte o texto da string para CAIXA ALTA
SELECT UCASE('Oi, eu sou uma string');

-- Converte o texto da string para caixa baixa
SELECT LCASE('Oi, eu sou uma string');

-- Substitui as ocorrências de uma substring em uma string
SELECT REPLACE('Oi, eu sou uma string', 'string', 'cadeia de caracteres');

-- Retorna a parte da esquerda de uma string de acordo com o
-- número de caracteres especificado
SELECT LEFT('Oi, eu sou uma string', 3);

-- Retorna a parte da direita de uma string de acordo com o
-- número de caracteres especificado
SELECT RIGHT('Oi, eu sou uma string', 6);

-- Exibe o tamanho, em caracteres, da string, a função LENGTH retorna o tamanho em bytes
SELECT CHAR_LENGTH('Oi, eu sou uma string');

-- Extrai parte de uma string de acordo com o índice de um caractere inicial
-- e a quantidade de caracteres a extrair
SELECT SUBSTRING('Oi, eu sou uma string', 5, 2);

-- Se a quantidade de caracteres a extrair não for definida,
-- então a string será extraída do índice inicial definido, até o seu final
SELECT SUBSTRING('Oi, eu sou uma string', 5);
````

## Condicionais
> Principais comandos de controle de fluxo, como o IF e o CASE.

```javascript
-- Sintaxe:
SELECT IF(condicao, valor_se_verdadeiro, valor_se_falso);

SELECT IF(idade >= 18, 'Maior de idade', 'Menor de Idade')
FROM pessoas;

SELECT IF(aberto, 'Entrada permitida', 'Entrada não permitida')
FROM estabelecimentos;

-- Exemplo utilizando o banco sakila:
SELECT first_name, IF(active, 'Cliente Ativo', 'Cliente Inativo') AS status
FROM sakila.customer
LIMIT 20;
````
>Em situações em que é preciso comparar mais de uma condição, é preferível utilizar o CASE.

```javascript
-- Sintaxe:
SELECT CASE
  WHEN condicao THEN valor
  ELSE valor padrao
END;

SELECT
    nome,
    nivel_acesso,
    CASE
        WHEN nivel_acesso = 1 THEN 'Nível de acesso 1'
        WHEN nivel_acesso = 2 THEN 'Nível de acesso 2'
        WHEN nivel_acesso = 3 THEN 'Nível de acesso 3'
        ELSE 'Usuário sem acesso'
    END AS nivel_acesso
FROM permissoes_usuario;

-- Exemplo utilizando a tabela sakila.film:
SELECT
    first_name,
    email,
    CASE
        WHEN email = 'MARY.SMITH@sakilacustomer.org' THEN 'Cliente de baixo valor'
        WHEN email = 'PATRICIA.JOHNSON@sakilacustomer.org' THEN 'Cliente de médio valor'
        WHEN email = 'LINDA.WILLIAMS@sakilacustomer.org' THEN 'Cliente de alto valor'
        ELSE 'não classificado'
    END AS valor
FROM sakila.customer
LIMIT 10;
````
## Condicionais
> Calcular e gerar novos dados com as principais funções matemáticas disponíveis no MySQL.

### Principais
> Adição, subtração, multiplicação e divisão

```javascript
SELECT rental_duration + rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration - rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration / rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration * rental_rate FROM sakila.film LIMIT 10;
````
### DIV
> O DIV retorna o resultado inteiro de uma divisão, ignorando as casas decimais de um número. Veja os exemplos abaixo:

```javascript
SELECT 10 DIV 3; -- 3
SELECT 10 DIV 2; -- 5
SELECT 14 DIV 3; -- 4
SELECT 13 DIV 2; -- 6
````

### MOD
> Já o operador MOD retorna o resto de uma divisão como resultado. Por exemplo:

```javascript
SELECT 10 MOD 3; -- 1
SELECT 10 MOD 2; -- 0
SELECT 14 MOD 3; -- 2
SELECT 13 MOD 2; -- 1
SELECT 10.5 MOD 2; -- 0.5, ou seja, 2 + 2 + 2 + 2 + 2 = 10, restando 0.5
````
### ROUND
>  ROUND arredonda os números de acordo com sua parte decimal.

```javascript
-- Podemos omitir ou especificar quantas casas decimais queremos
SELECT ROUND(10.4925); -- 10
SELECT ROUND(10.5136); -- 11
SELECT ROUND(-10.5136); -- -11
SELECT ROUND(10.4925, 2); -- 10.49
SELECT ROUND(10.4925, 3); -- 10.493
````
### CEIL
>  O arredondamento sempre para cima pode ser feito com o CEIL:

```javascript
SELECT CEIL(10.51); -- 11
SELECT CEIL(10.49); -- 11
SELECT CEIL(10.2); -- 11
````
### FLOOR
>  O arredondamento sempre para baixo pode ser feito com o FLOOR:

```javascript
SELECT FLOOR(10.51); -- 10
SELECT FLOOR(10.49); -- 10
SELECT FLOOR(10.2); -- 10
````
### FLOOR
>  O arredondamento sempre para baixo pode ser feito com o FLOOR:

```javascript
SELECT FLOOR(10.51); -- 10
SELECT FLOOR(10.49); -- 10
SELECT FLOOR(10.2); -- 10
````

### Exponenciação
>  Para cálculos de exponenciação, podemos utilizar a função POW.

```javascript
SELECT POW(2, 2); -- 4
SELECT POW(2, 4); -- 16
````
### Raiz quadrada
>  Para cálculos de exponenciação, podemos utilizar a função SQRT.

```javascript
SELECT SQRT(9); -- 3
SELECT SQRT(16); -- 4
````

### Randon
>  Para situações em que se faz necessário gerar valores aleatórios, podemos usar a função RAND, em conjunto com as funções anteriores.

```javascript
-- Para gerar um valor aleatório entre 0 e 1:
SELECT RAND();

-- Para gerar um valor entre 7 e 13:
SELECT ROUND(7 + (RAND() * 6));

-- O cálculo que é feito é o seguinte: (7 + (0.0 a 1.0 * 6))
````

## Trabalhando com datas
> Conseguimos fazer algumas coisas legais, como, por exemplo, consultar data e hora atuais usando as seguintes funções:

```javascript
SELECT CURRENT_DATE(); -- YYYY-MM-DD
SELECT NOW(); -- YYYY-MM-DD HH:MM:SS
````

### Calcular a diferença entre datas
> Também podemos calcular a diferença em dias entre duas datas usando o DATEDIFF e a diferença de tempo entre dois horários usando o TIMEDIFF. Em ambos os casos, o segundo valor é subtraído do primeiro para calcular o resultado.

```javascript
-- 30, ou seja, a primeira data é 30 dias depois da segunda
SELECT DATEDIFF('2020-01-31', '2020-01-01');

-- -30, ou seja, a primeira data é 30 dias antes da segunda
SELECT DATEDIFF('2020-01-01', '2020-01-31');

-- -01:00:00, ou seja, há 1 hora de diferença entre os horários
SELECT TIMEDIFF('08:30:10', '09:30:10');

-- -239:00:00, ou seja, há uma diferença de 239 horas entre as datas
SELECT TIMEDIFF('2021-08-11 08:30:10', '2021-08-01 09:30:10');
````

## Funções de agregação
>Utilizando as funções de agregação AVG, MIN, MAX, SUM e COUNT

```javascript
-- Usando a coluna replacement_cost (valor de substituição), vamos encontrar:
SELECT AVG(replacement_cost) FROM sakila.film; -- 19.984000 (Média entre todos registros)
SELECT MIN(replacement_cost) FROM sakila.film; -- 9.99 (Menor valor encontrado)
SELECT MAX(replacement_cost) FROM sakila.film; -- 29.99 (Maior valor encontrado)
SELECT SUM(replacement_cost) FROM sakila.film; -- 19984.00 (Soma de todos registros)
SELECT COUNT(replacement_cost) FROM sakila.film; -- 1000 registros encontrados (Quantidade)
````

## Exibindo e filtrando dados de forma agrupada
> Os resultados de uma query podem ser agrupados por uma ou mais colunas usando o GROUP BY, o que faz com que todos os registros que têm o mesmo valor para tais colunas sejam exibidos juntos. O GROUP BY também pode ser usado em conjunto com as funções de agregação que vimos anteriormente.

### GROUP BY
> O GROUP BY pode ser construído da seguinte forma:
```javascript
SELECT coluna(s) FROM tabela
GROUP BY coluna(s);
````

### HAVING
> Podemos usar o HAVING para filtrar resultados agrupados, assim como usamos o SELECT...WHERE para filtrar resultados individuais.

```javascript
SELECT first_name, COUNT(*)
FROM sakila.actor
GROUP BY first_name
HAVING COUNT(*) > 2;

-- Ou, melhor ainda, usando o AS para dar nomes às colunas de agregação,
-- melhorando a leitura do resultado
SELECT first_name, COUNT(*) AS nomes_cadastrados
FROM sakila.actor
GROUP BY first_name
HAVING nomes_cadastrados > 2;

-- Observação: o alias não funciona com strings para o HAVING,
-- então use o underline ("_") para separar palavras
-- Ou seja, o exemplo abaixo não vai funcionar
SELECT first_name, COUNT(*) AS 'nomes cadastrados'
FROM sakila.actor
GROUP BY first_name
HAVING 'nomes cadastrados' > 2;
`````

## INNER JOIN
> Como foi visto no vídeo, o INNER JOIN permite retornar todos os resultados em que a condição da cláusula ON for satisfeita. A sintaxe de um INNER JOIN é a seguinte:

```javascript
SELECT t1.coluna, t2.coluna
FROM tabela1 AS t1
INNER JOIN tabela2 AS t2
ON t1.coluna_em_comum = t2.coluna_em_comum;
````
> Podemos tornar a query mais legível com um alias, além de evitar o erro de ambiguidade de coluna:

```javascript
SELECT a.first_name, a.actor_id, f.actor_id
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS f
ON a.actor_id = f.actor_id;
````

### Como utilizar o LEFT JOIN e o RIGHT JOIN
> Vamos visualizar a diferença entre os três joins já vistos até o momento. Rode e analise cada uma das três queries a seguir. Busque notar a diferença entre as colunas da direita e da esquerda e a quantidade de dados retornados em cada query, como foi mostrado no vídeo. Gaste de dois a cinco minutos aqui e depois continue.

### LEFT JOIN
> LEFT JOIN: quando utilizamos o LEFT JOIN, focamos a tabela da esquerda. São retornados todos os registros da tabela da esquerda e valores correspondentes da tabela da direita, caso existam. Valores que não possuem correspondentes são exibidos como nulos.

```javascript
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer AS c
LEFT JOIN sakila.actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;
````

### RIGHT JOIN
> RIGHT JOIN: quando utilizamos o RIGHT JOIN, focamos a tabela da direita. São retornados todos os registros da tabela da direita e valores correspondentes da tabela da esquerda, caso existam. Valores que não possuem correspondentes são exibidos como nulos.

```javascript
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer AS c
RIGHT JOIN sakila.actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;
````

### INNER JOIN
> INNER JOIN: finalmente, temos o INNER JOIN, que foca em trazer somente os registros que possuem valores correspondentes em ambas as tabelas.

```javascript
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer AS c
INNER JOIN sakila.actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;
````

###  UNION & UNION ALL
> O UNION remove os dados duplicados, enquanto o UNION ALL os mantém. Observe que, para usar o comando corretamente, a mesma quantidade de colunas deve ser utilizada.

```javascript
(SELECT first_name, "actor" as 'actor'
FROM actor LIMIT 5)
UNION ALL
(SELECT first_name, "customer" as 'customer'
FROM customer LIMIT 10)
````

### SUBQUERYS
> Uma SUBQUERY é uma query aninhada que é avaliada dentro de um par de parênteses. Ela pode conter expressões simples, como adições e subtrações, mas não se limita a isso, uma vez que podemos utilizar praticamente todos os comandos já vistos até o momento dentro de uma SUBQUERY.

1. Preenchendo uma coluna de um SELECT por meio de uma SUBQUERY.
```javascript
SELECT
    address,
    district,
    (
        SELECT city
        FROM sakila.city
        WHERE city.city_id = sakila.address.city_id
    ) AS city
FROM sakila.address;
````

2. Filtrando resultados com WHERE usando como base os dados retornados de uma SUBQUERY.

```javascript
SELECT address, district
FROM sakila.address
WHERE city_id IN (
    SELECT city_id
    FROM sakila.city
    WHERE city IN ('Sasebo', 'San Bernardino', 'Athenai', 'Myingyan')
);
````

4. Usando uma tabela externa, de fora da SUBQUERY, dentro dela.

```javascript
SELECT
    first_name,
    (
        SELECT address
        FROM sakila.address
        WHERE address.address_id = tabela_externa.address_id
    ) AS address
FROM sakila.customer AS tabela_externa;
````

## STORED PRODCEDURE e STORE FUNCTION

>Podemos armazenar blocos de códigos (queries) para serem usados posteriormente no MySQL de duas maneiras, são elas:

 - Stored procedure;
 - Stored function.

A palavra stored significa armazenado. Como o próprio nome já indica, o código fica armazenado no servidor do banco de dados para que possa ser utilizado sem a necessidade de reescrever uma funcionalidade.

#### Estrutura padrão de uma *store procedure*:
```javascript
USE banco_de_dados; -- obrigatório para criar a procedure no banco correto
DELIMITER $$ -- definindo delimitador

CREATE PROCEDURE nome_da_procedure(@parametro1, @parametro2, ..., @parametroN) -- parâmetros
BEGIN -- delimitando o início do código SQL

END $$ -- delimitando o final do código SQL

DELIMITER ; -- muda o delimitador de volta para ; - o espaço entre DELIMITER e o ';' é necessário
````

Exemplo:
```javascript
Copiar
USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowAllActors()
BEGIN
	SELECT * FROM sakila.actor;
END $$

DELIMITER ;

-- Como usar:

CALL ShowAllActors();
````

### Elementos das _Stored Procedures_

> Verifique os elementos de uma stored procedures no passo a passo a seguir:

1. Delimiter: A palavra-chave DELIMITER é usada para definir qual símbolo representa o final da procedure declarada. Aqui estamos usando $$,
2. Variáveis: O MySQL possui a funcionalidade de criar e usar variáveis, assim como em outras linguagens de programação. Essas variáveis também podem ser usadas em procedures.
3. Tipos de dados: Existem vários tipos de dados no MySQL que vão além de apenas numéricos e strings. É relevante que você tenha uma noção básica, sabendo que esses tipos no MySQL são determinados por meio de algumas características:.
    - VARCHAR: Uma string não binária de comprimento variavel.
    - CHAR: Uma string não binaria (caractere) de comprimento fixo.
    - TEXT: Uma pequena string não binária.
    - TINYINT: Um número interio muito pequeno.
    - INT: Um inteiro padrão.
    - BIGINT: Um grande número inteiro.
    - DECIMAL: Um número de ponto fixo.

### Procedure com parâmetros de entrada (IN):
>Para criar procedures com funcionalidades mais elaboradas, podemos passar parâmetros de entrada. Ao definir um parâmetro do tipo IN, podemos usá-lo e modificá-lo dentro da nossa procedure.

```javascript
USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowActorsWithSyllable(IN syllable VARCHAR(100))
BEGIN
    SELECT *
    FROM sakila.actor
    WHERE first_name LIKE CONCAT('%', syllable, '%');
END $$

DELIMITER ;

-- Como usar:

CALL ShowActorsWithSyllable('lope');
````

### Procedure com parâmetros de saída (OUT):
> O parâmetro OUT é útil quando você precisa que algo seja avaliado ou encontrado dentro de uma query e te retorne esse valor para que algo adicional possa ser feito com ele.

```javascript
USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowAverageRentalDurationOfMovie(
    IN film_name VARCHAR(300),
    OUT media_aluguel_em_dias DOUBLE
)
BEGIN
    SELECT AVG(rental_duration) INTO media_aluguel_em_dias
    FROM sakila.film
    WHERE title = film_name;
END $$

DELIMITER ;

-- Como usar:

CALL ShowAverageRentalDurationOfMovie('ACADEMY DINOSAUR', @media_de_dias);
SELECT @media_de_dias;
````

### Procedure com parâmetros de entrada-saída (IN-OUT):
>O IN-OUT deve ser usado quando é necessário que um parâmetro possa ser modificado tanto antes como durante a execução de uma procedure.

```javascript
USE sakila;
DELIMITER $$

CREATE PROCEDURE NameGenerator(INOUT film_name VARCHAR(300))
BEGIN
    SELECT CONCAT('ULTRA ', film_name, ' THE BEST MOVIE OF THE CENTURY')
    INTO film_name;
END $$

DELIMITER ;

-- Como usar:

SELECT 'ACE GOLDFINGER' INTO @movie_title;
CALL NameGenerator(@movie_title);
SELECT @movie_title;
````

## Stored Functions

> Stored functions podem ser executadas com o comando SELECT. Ao criá-las, temos que definir o tipo de retorno que sua função possui.

```javascript
USE banco_de_dados; -- obrigatório para criar a função no banco correto
DELIMITER $$

CREATE FUNCTION nome_da_function(parametro1, parametro2, ..., parametroN)
RETURNS tipo_de_dado tipo_de_retorno
BEGIN
    query_sql
    RETURN resultado_a_ser_retornado;
END $$

DELIMITER ;
````

>Exemplo: Uma stored function que exibe a quantidade de filmes em que um determinado ator ou atriz atuou:

```javascript
USE sakila;
DELIMITER $$

CREATE FUNCTION MoviesWithActor(actor_id int)
RETURNS INT READS SQL DATA
BEGIN
    DECLARE movie_total INT;
    SELECT COUNT(*)
    FROM sakila.film_actor
    WHERE sakila.film_actor.actor_id = actor_id INTO movie_total;
    RETURN movie_total;
END $$

DELIMITER ;

-- Como usar:

SELECT MoviesWithActor(1);
````
> Exemplo: Uma stored function que exibe o nome completo de um ator ou de uma atriz, dado seu id como parâmetro:

```javascript
USE sakila;
DELIMITER $$

CREATE FUNCTION GetFullName(id INT)
RETURNS VARCHAR(200) READS SQL DATA
BEGIN
    DECLARE full_name VARCHAR(200);
    SELECT concat(first_name, ' ', last_name)
    FROM sakila.actor
    WHERE actor_id = id
    LIMIT 1
    INTO full_name ;
    RETURN full_name;
END $$

DELIMITER ;

SELECT GetFullName(51);
````













