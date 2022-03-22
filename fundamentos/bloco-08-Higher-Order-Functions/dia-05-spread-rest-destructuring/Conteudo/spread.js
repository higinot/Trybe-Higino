/* Função SPREAD */
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Laranja', 'Acabate', 'Melão'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Granola', 'Mel', 'Whey'];

const fruitSalad = (fruit, additional) => {
   const fruitWithAdditional = [...fruit,...additional];
   return fruitWithAdditional
};

console.log(fruitSalad(specialFruit, additionalItens));