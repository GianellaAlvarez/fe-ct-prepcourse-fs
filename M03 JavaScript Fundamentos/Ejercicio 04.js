/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   // Retorna el valor de "num" elevado al cuadrado.
   // Tu código:
   // * Por el metodo Math
   return Math.pow(num, 2)
   // * Por la forma aritmetica
   //return num ** 2
}

console.log(elevarAlCuadrado(5))

function elevarAlCubo(num) {
   // Retorna el valor de "num" elevado al cubo.
   // Tu código:
   // * Por el metodo Math
   return Math.pow(num, 3)
   // * Por la forma aritmetica
   //return num ** 3
}

console.log(elevarAlCubo(4))

function elevar(num, exponent) {
   // Retorna el valor de "num" elevado al exponente "exponent".
   // Tu código:
   // * Metodo Math
    return Math.pow(num, exponent)
   // * Metodo aritmetico
   // return num ** exponent
}

console.log(elevar(5, 2))

function redondearNumero(num) {
   // Redondea "num" al entero más próximo y retórnalo.
   // Tu código:
   return Math.round(num)
}

console.log(redondearNumero(3.8))

function redondearHaciaArriba(num) {
   // Redondea "num" hacia arriba y retórnalo.
   // Tu código:
   return Math.ceil(num)
}

console.log(redondearHaciaArriba(2.1))

function numeroRandom() {
   // Genera un número al azar entre 0 y 1 y retórnalo.
   // Tu código:
   return Math.random()
}

console.log(numeroRandom())

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
