


//const arreglo = new Array(100);

const arreglo = [1, 2, 3, 4];
//arreglo.push(1); //push afecta al arreglo original


let arreglo2 = [...arreglo, 5];

const arreglo3 = arreglo2.map(function (numero) {
    return numero * 2;
});


console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)