"use strict"
/**
 * 
 * @file Este archivo contiene ejemplos de funciones con "for"
 * @author Andrés Garrido <andyyeha@gmail.com>
 * @version 1.0.0
 */

/**
 * @description SumaArray Suma los valores de un array
 * @param {Array} numeros Array de números
 * @return {number}
 */
function SumaArray(numeros) {
    let suma = 0;
    for (let a of numeros) {
        suma = suma + a;
    }
    return suma;
}

let sumaValor = SumaArray([2, 3, 4, 5]);
console.log(sumaValor);

function SumaArray2(numeros) {
    let suma = 0;
    for (let pos in numeros) {
        suma = suma + numeros[pos] //Recorre las posiciones que ocupa cada elemento del Array
    }
    return suma;
}
let sumaValor2 = SumaArray2([2, 3, 4, 5]);
console.log(sumaValor2);

function SumaArray3(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i];
    }
    return suma;
}

let sumaValor3 = SumaArray([2, 3, 4, 5]);
console.log(sumaValor3);