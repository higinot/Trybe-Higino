
//Exemplo 1 - HOFs

const wakeUp = () => 'Acordando!!';

const breakfast = () => 'Bora tomar café!!';

const sleep = () => 'Partiu dormir!!';

//Uma função callback é uma função passada a outra função como argumento, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.
const doingThings = (callback) => {
    const result = callback ();
    console.log(result);
};

doingThings(wakeUp);



