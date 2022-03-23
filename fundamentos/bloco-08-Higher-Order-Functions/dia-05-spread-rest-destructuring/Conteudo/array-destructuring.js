//Fluxo normal para nomear as posições de um array

const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];

const firstCountry = arrayCountries[0];
const secondCountry = arrayCountries[1];
const thirdCountry = arrayCountries[2];
const fourthCountry = arrayCountries[3];

console.log(firstCountry); 
console.log(secondCountry); 
console.log(thirdCountry); 
console.log(fourthCountry); 

//Com Array destructuring podemos fazer de outra forma:
const paises = ['Brazil', 'Japan', 'China', 'Canada'];
const [primeiro, segundo, terceiro, quarto] = paises;

console.log(primeiro);
console.log(segundo); 
console.log(terceiro); 
console.log(quarto);

