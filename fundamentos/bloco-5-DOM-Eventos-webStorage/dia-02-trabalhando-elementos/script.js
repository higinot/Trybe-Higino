
/* Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ; */
const elementH1 = document.createElement('h1'); /* Criei um novo elemento chamado h1 */
elementH1.innerText = "Olá"
document.body.appendChild(elementH1) /* coloquei o elementro dentro de body */

/* Adicione a tag main com a classe main-content como filho da tag body ;*/
const elementMain = document.createElement('main'); /* Criei um novo elemento chamado main */
elementMain.className = 'main-content';
document.body.appendChild(elementMain); /* Coloquei o elemento dentro do body */

/* Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;*/
const elementOneSection = document.createElement('section');
elementOneSection.className = 'center-content';
elementMain.appendChild(elementOneSection); /* Coloquei o elemento dentro do main */

/* Adicione a tag p como filho do section criado no passo 3 e coloque algum texto; */
const elementP = document.createElement('p');
elementP.innerText = "Olá Mundo!";
elementOneSection.appendChild(elementP);

/* Adicione a tag section com a classe left-content como filho da tag main criada no passo 2; */

const elementTwoSection = document.createElement('section');
elementTwoSection.className = 'left-content';
elementMain.appendChild(elementTwoSection);

/* Adicione a tag section com a classe right-content como filho da tag main criada no passo 2; */

const elementTreeSection = document.createElement('section');
elementTreeSection.className = 'right-content';
elementMain.appendChild(elementTreeSection);

/* Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image  */

const elementImage = document.createElement('img');
elementImage.className = 'small-image';
elementImage.scr = 'https://picsum.photos/200';
elementTwoSection.appendChild(elementImage);

/* Adicione uma lista não ordenada com os valores de 1 a 10  */

const elementUl = document.createElement('ul');
elementTreeSection.appendChild(elementUl);

const arrayLi = ['um','dois','três']
for (let index in arrayLi){
    const elementLi = document.createElement('li');
    elementLi.innerText = arrayLi[index];
    elementUl.appendChild(elementLi);
}

/* Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2. */

for (let index = 0; index <= 3; index += 1){
    const elementByH3 = document.createElement('h3');
    elementByH3.innerHTML = 'Show' + index;
    elementMain.appendChild(elementByH3)
}

/* Adicionando uma class ao elementH1 */

const title = document.querySelector('h1');
title.className = 'title'

/*Adicione a classe description nas 3 tags h3 criadas;  */

const descriptionByH3 = document.querySelectorAll('h3');
for (let index = 0; index <= 3; index += 1){
    descriptionByH3[index].className = 'description';
}

/*Remova a `section` criado no passo 5  */

const elementDelet = document.createElement('section');
elementMain.appendChild(elementDelet);
elementMain.removeChild(elementDelet);

/*  */





















