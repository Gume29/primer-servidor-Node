const express = require('express')
const { SourceMap } = require('module')

const app = express()

app.get('/', function(req, res) {

    res.send('hola mundo!!')

})

app.listen(3000)

function suma(a,b){

    return a + b

}

let resultado = suma(3,5)