# Introdução

## Iniciando um projeto com NPM

O primeiro passo é criarmos nosso arquivo HTML, que será a porta de entrada (entry point) da nossa aplicação. Podemos criar um boilerplate simples para nosso index.html

## Configurando Pastas

Agora que temos o projeto configurado com o package.json talvez seja interessante começarmos a mexer na estrutura de pastas

Geralmente em projetos JavaScript estruturamos duas pastas principais:

- src: Utilizada para o código fonte
- dist ou build: Utilizada para o código compilado que irá para produção. Geralmente essa pasta é criada automaticamente por nosso ambiente.

# Implementando a aplicação

Existem algumas vantagens em optarmos por usar uma biblioteca externa. Além de economizarmos tempo e linha código, bibliotecas populares recebem constantes atualizações e bugfixes, deixando, via de regra, nosso código mais seguro e performático.

## Instalando Bibliotecas Externas
Como foi dito anteriormente, não vamos usar um CDN. Dessa forma, o primeiro passo agora é instalarmos localmente a biblioteca nanoid:


``npm install nanoid``

Após a instalação repare que duas coisas aconteceram:

 - No arquivo package.json foi adicionada uma dependência com a biblioteca.
Foi criada a pasta node_modules , que é onde fica o código das bibliotecas que iremos usar.
 - Não é boa prática incluirmos a pasta node_modules no nosso repositório git. Para ignorarmos essa pasta, vamos criar um arquivo .gitignore e adicionar a pasta node_modules dentro dele.

 > Repare que estamos usando a sintaxe import/export no nosso arquivo. Para que a gente consiga utilizar essa sintaxe (ES Modules) no nosso código, precisamos adicionar a chave "type": "module" no arquivo package.json :

 ## Utilizando o Vite

 Para o navegador conseguir acessar as bibliotecas que estão na node_modules podemos usar um bundler dev-server. Exitem diversas ferramentas que nos auxiliam nessa tarefa, como o Parcel, o Webpack e o Vite. Aqui iremos utilizar o Vite. Você poderá ler a documentação dos três na seção Recursos Adicionais.

 O Vite fornece ferramentas de desenvolvimento para nossa aplicação, como, por exemplo, um servidor de desenvolvimento (também comumente chamado de dev-server) e um bundler para compilação final da aplicação.

Para utilizar o dev-server, basta executar o comando no terminal:

`` npx vite --open``

## NPX e NPM Scripts

Nós rodamos o comando npx na lição anterior. Vamos entender o que esse comando significa?

O NPX é um programa que é instalado quando instalamos o NPM (a partir da versão 5.2). Quando falamos de NPX, precisamos entender o que é NPM.

### NPM
O NPM é um gerenciador de pacotes que é instalado automaticamente quando instalamos o node na nossa máquina. Ele também é o hub onde ficam armazenadas a maioria das bibliotecas javascript. Se quiser explorar, acesse a página do npm.

Existem outros gerenciadores de pacotes além do NPM, sendo o Yarn o mais famoso. O NPM e o Yarn cumprem as mesmas funções - ambos são utilizados para instalar e gerenciar as versões dos pacotes que utilizamos nos nossos projetos.

Na Trybe iremos utilizar o NPM para cumprir a função de gerenciar os pacotes das nossas aplicações, mas fique à vontade para explorar outras alternativas nos seus projetos pessoais.

Para instalar um pacote na aplicação utilizando o NPM, basta executar o seguinte comando:

``` npm install nomeDoPacote ```

Ao executar o comando acima, você estará adicionando o pacote instalado às dependências do projeto. Você pode verificar todas as dependências do projeto na chave dependencies do arquivo package.json.

Caso você acesse algum projeto que já possui alguma dependência, como, por exemplo, os projetos da Trybe, basta executar o comando abaixo para instalar todos os pacotes que estão definidos no arquivo package.json.

### NPX
Algumas bibliotecas javascript também possuem executáveis, isto é, scripts que podem rodar com a linha de comando (CLIs ou command line interfaces). O vite, é um deles, por exemplo.

O NPX é um programa que executa (daí o “X” do NPX) esses scripts de forma mais simplificada. Ele funciona da seguinte forma:

Se a biblioteca está instalada no projeto (consta como uma dependência no arquivo package.json), o NPX executa o script dessa biblioteca;
Se a biblioteca não está instalada no projeto, ele instala de forma temporária a biblioteca e, após a instalação, executa o script.

### NPM scripts

Além de ser um gerenciador de pacotes e além de executar scripts pelo NPX, o NPM também possui a funcionalidade de executar scripts customizados.

Para isso, basta criarmos e nomearmos nossos scripts na chave scripts do arquivo package.json. Posteriormente, para rodar nossos scripts customizados, basta executar o comando npm run nome-do-script.

Voltando ao nosso projeto de gerador de senhas, vamos instalar o vite no nosso projeto para executarmos um script customizado para subir nosso dev server:

## Configurando um Linter

Já temos nossa aplicação plenamente funcional e com um ambiente de desenvolvimento rodando. Mas podemos deixá-la melhor. Vamos agora adicionar configurações para termos um linter e testes para maior qualidade do nosso código.

## ESLint

Um linter é uma ferramenta que nos ajuda a deixar nosso código limpo: ela aponta erros de estilo e formatação do código. Além disso, é essencial para a legibilidade do código - especialmente quando se trabalha em equipe (todas as pessoas são obrigadas a seguir as regras predefinidas). O linter mais popular atualmente para javascript é o ESLint.

### Configurando suas próprias regras do ESLint

Para configurar o ESLint em um projeto, basta executar o comando de inicialização e seguir o passo a passo que irá aparecer no terminal:

``npm init @eslint/config``

Após rodar o comando acima, você deverá escolher as definições que fizerem mais sentido para o seu projeto. Abaixo deixaremos a nossa sugestão para a configuração inicial, mas é importante que você responda de acordo com as necessidades do seu projeto.

1. How would you like to use ESLint? - Use as setas de navegação do seu teclado até selecionar a opção To check syntax, find problems, and enforce code style e aperte a tecla ENTER para confirmar.

2. What type of modules does your project use? - Selecione a opção JavaScript modules (import/export) para confirmar, para informar que utilizaremos ES Modules no projeto.

3. Which framework does your project use? - Como ainda não estamos usando nenhum framework na nossa aplicação, selecione a opção None of these.

4. Does your project use TypeScript? - Como utilizamos JavaScript em vez de TypeScript, selecione a opção No.

5. Where does your code run? - Selecione opção Browser.

6. How would you like to define a style for your project? - Como estamos configurando nosso próprio estilo, selecione a opção Answer questions about your style.

7. What format do you want your config file to be in? - Selecione a opção JSON. Essa opção, ao término da execução, irá criar o arquivo de configuração .eslintrc.json, que mostraremos mais abaixo.

8. What style of indentation do you use? - Selecione a opção Spaces.

9. What quotes do you use for strings? - Selecione a opção Single, para indicar que utilizaremos aspas simples.

10. What line endings do you use? - Selecione a opção Unix.

11. Do you require semicolons? - Selecione a opção Yes, para indicar que utilizaremos ponto e vírgula ;.

12. Would you like to install them now? Selecione a opção Yes, para instalar todas as dependências necessárias.

13. Which package manager do you want to use? Selecione a opção npm.

Após a instalação das dependências, o arquivo .eslintrc.json deve ser criado automaticamente. Esse é o arquivo que possui as configurações do ESLint. Ele virá pré-configurado com todas as regras que selecionamos no passo a passo acima.

Para executar o eslint para checar seu código, basta executar o comando:

``npx eslint ./src``

## Implementando o CSS

Antes de iniciarmos a estilização de uma nova aplicação, vale a pena definirmos qual estratégia que iremos usar para implementação do nosso CSS. Existem várias opções, tais como:

- CSS Puro
- CSS Modules
- SCSS (pré processador)
- Frameworks (como Bootstrap ou TailwindCSS)

Usando o Vite, é relativamente simples adotar quaisquer dessas estratégias acima, uma vez que ele já traz suporte para essas tecnologias.

## Publicando sua aplicação

Agora que temos a aplicação pronta, que tal fazermos o deploy dela?

Existem diversas ferramentas gratuitas que nos auxiliam na publicação dos nossos projetos. Podemos acessar a própria documentação do Vite, que nos apresenta algumas formas de se fazer isso.

Abaixo, uma lista contendo algumas dessas ferramentas:

- Netlify;
- Firebase;
- Vercel;
- Surge;
- GitHub Pages.

Acesse as documentações linkadas acima e experimente publicar o projeto que você desenvolveu hoje.

## Publicando uma aplicação com Surge

Para exemplificar, abaixo realizaremos o deploy utilizando o Surge, mas fique a vontade para experimentar outras ferramentas, uma vez que o processo é muito similar em todas elas.

Primeiramente, vamos adicionar um novo script ao arquivo package.json:

````
// package.json
// ...
  "scripts": {
    "dev": "vite --open",
    "lint": "eslint ./src",
    "build": "vite build"
  },
// ...
````

Com isso, execute o comando npm run build no seu terminal. Esse script irá criar um novo diretório na sua aplicação, com o nome dist. Esse diretório contém a sua aplicação pronta para o deploy!

Agora, instale o surge, utilizando o comando abaixo:

`` npm install -g surge``

Esse comando com a flag -g (global) irá instalar o Surge de forma global na sua máquina, ou seja, permitirá utilizar essa ferramenta diretamente do seu computador, sem a necessidade de instalá-la como dependência no seu projeto.

Feito isso, podemos executar o comando abaixo para realizar o deploy do diretório dist:

``surge dist``

Se for a sua primeira vez utilizando a ferramenta, uma mensagem no terminal aparecerá, solicitando a criação de uma conta. Basta adicionar o seu e-mail e criar uma senha. Depois, forneça as informações solicitadas no terminal:

- project path: Esse campo virá pré-preenchido com o caminho do seu projeto. Confira se está certo e pressione enter;
- domain: Esse campo irá definir qual será o domínio da publicação, ou seja, onde o projeto será publicado e onde você poderá acessá-lo. Esse campo virá preenchido com um nome aleatório, mas você pode alterar conforme seu gosto (exemplo: my-application.surge.sh).

Para retirar uma aplicação hospedada no Surge, você pode seguir os seguintes passos:

1. Abra o terminal ou prompt de comando no seu computador.

2. Navegue até o diretório da sua aplicação, onde estão localizados os arquivos que foram implantados no Surge.

3. Execute o seguinte comando para remover a aplicação do Surge:

``surge teardown nome-do-seu-dominio.surge.sh``

>Substitua "nome-do-seu-dominio" pelo domínio personalizado ou pelo domínio padrão fornecido pelo Surge para a sua aplicação

4. O comando surge teardown irá desativar e remover a aplicação do Surge, excluindo todos os arquivos e configurandoções associados a ela.

Terminado o processo, aguarde o deploy da sua aplicação, isso poderá levar alguns minutos. Por fim, acesse o domínio mencionado anteriormente!