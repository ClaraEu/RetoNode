const express = require('express')
const app = express()

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/binary/sort', function (req, res) {
    let numString = req.body.num
    //Creo un array con los números
    var arrayNumeros = new Array();
    arrayNumeros = numString.split(',')
    arrayNumeros.sort(function (a, b) {
        //Paso los números a binario
        let numA = parseInt(a).toString(2)
        let numB = parseInt(b).toString(2)
        //Saco la longitud de 1s y 0s
        let numA1s = numA.replace(/[^1]/g, "").length //número de 1s
        let numA0s = numA.replace(/[^0]/g, "").length //número de 0s
        let numB1s = numB.replace(/[^1]/g, "").length
        let numB0s = numB.replace(/[^0]/g, "").length
        //Condiciones para el orden binario
        if (numA1s < numB1s) {
            return 1
        } else if (numA1s > numB1s) {
            return -1
        } else {
            if (numA0s < numB0s) {
                return -1
            } else {
                return 1
            }
        }
    })   
    res.send(arrayNumeros)
})

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
})