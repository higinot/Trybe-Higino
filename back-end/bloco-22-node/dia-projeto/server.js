const express = require('express') ;
const axios = require('axios').default ;


const app = express() ;

app.get('/btc/price', (req, res) => {
    const { authorization } = req.query;
    const regex = /^[A-Za-z0-9]*\d+[A-Za-z0-9]*$/;

    const test = regex.test(authorization) ;

    console.log(test) ;
    console.log(authorization) ;

    if( !test && authorization.length ==! 12 ) {

        res.status(401).json({
            "message": "invalid token"
        }) ;
    }

    const requisicao = axios.get("https://api.coindesk.com/v1/bpi/currentprice/BTC.json").then((value) => res.status(200).json(value) ) ;

 }) ;

 app.listen(3001, () => {
    console.log('Aplicação ouvindo na porta 3001');
    }); 



