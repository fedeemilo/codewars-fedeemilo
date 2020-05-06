/* 
    Invierta cualquier otra palabra en una cadena dada, 
    luego devuelva la cadena. Deseche los espacios en 
    blanco iniciales o finales, mientras se asegura de 
    que haya exactamente un espacio entre cada palabra.
    Los signos de puntuación deben tratarse como si fueran 
    parte de la palabra en este kata.

*/

function reverse(str) {

    let arrString = str.split(' ');

    for (let i = 0; i < arrString.length; i++) {

        if (i % 2 !== 0) {
            arrString[i] = arrString[i].split('').reverse().join('');
        }
    }

    return arrString.join(' ').trim();

}


console.log(reverse("Reverse this string, please!"));