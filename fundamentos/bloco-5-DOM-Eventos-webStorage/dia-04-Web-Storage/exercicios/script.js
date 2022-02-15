window.onload = function(){

    let select = document.querySelector('select')
   select.addEventListener('change', function(){
        let selected = select.selectedOptions[0];  //Neste caso precisa criar uma variavel para selecionar as propriedades com selectedOptions[0]
        document.body.style.backgroundColor = selected.value 
        
        localStorage.setItem('change-color', selected.value);
    })

    let optionNumber = document.querySelector('input[name ="font-size"]');
    optionNumber.addEventListener('change', function(){
       // Neste caso não precisa criar uma variavel por que a propriedade que será alterada e o paragrafo
        document.querySelector('p').style.fontSize = optionNumber.value + 'px';

        localStorage.setItem('font-size', optionNumber.value + 'px' )
    })

    let colorText = document.querySelector('select[name = "color-text"]');
    colorText.addEventListener('change',function(){
        let changeTextColor = colorText.selectedOptions[0];  //Neste caso precisa criar uma variavel para selecionar as propriedades com selectedOptions[0]
        document.body.style.color = changeTextColor.value;

        localStorage.setItem('color-text', changeTextColor.value);
    })

    let espaceText = document.querySelector('input[name="espace-height"]');
    espaceText.addEventListener('change', function(){
        document.querySelector('p').style.lineHeight = espaceText.value + 'px';

        localStorage.setItem('change-espace-height', espaceText.value +'px');
    })

    let fontFamily = document.querySelector('select[name = "font-family"]');
    fontFamily.addEventListener('change', function() {
        document.querySelector('p').style.fontFamily = fontFamily.value;

        localStorage.setItem('font-family', fontFamily.value);
    })
    

    let savedBackgroundColor = localStorage.getItem('change-color');
    document.querySelector('body').style.backgroundColor = savedBackgroundColor;

    let savedFontSize = localStorage.getItem('font-size');
    document.querySelector('p').style.fontSize = savedFontSize;

    let savedColorText = localStorage.getItem('color-text');
    document.querySelector('body').style.color = savedColorText;

    let savedEspaceHeight = localStorage.getItem('change-espace-height');
    document.querySelector('body').style.lineHeight = savedEspaceHeight;

    let savedFontFamly = localStorage.getItem('font-family');
    document.querySelector('p').style.fontFamily = savedFontFamly;



}