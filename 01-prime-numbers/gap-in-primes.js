/* La función debe devolver el primer par de números primos espaciados
                   con un espacio de g entre m y n */

// g -> gap que buscamos
// m -> comienzo de la búsqueda
// n -> fin de la búsqueda
// Ejemplo -> gap(2, 3, 50)
// [3-5, 5-7, 1-13, 17-19, 29-31, 41-43]
// Respuesta -> [3,5] que es el primer gap = 2 que encontramos

function gap(g, m, n) {
	// m comienza desde 3
	// n en 3 o mayor
	let inicio = m;
	let final = n;
	let gap = g;
	let arrayPrimos = [];

	// Función para saber si un número es primo o no
	const esPrimo = (num) => {
		// Casos especiales
		if (num === 4) return false;
		for (let x = 2; x < num / 2; x++) {
			if (num % x === 0) return false;
		}
		return true;
	};

	let auxIdx;

	// Obtengo los numeros primos que hay desde m a n y los guardo en un arreglo
	for (let i = inicio; i < final; i++) {
		if (esPrimo(i)) {
			arrayPrimos.push(i);
			auxIdx = arrayPrimos.indexOf(i);
		}
		// si el arreglo tiene un length de 2 o mas

		if (arrayPrimos[auxIdx] - arrayPrimos[auxIdx - 1] === gap) {
			return [arrayPrimos[auxIdx - 1], arrayPrimos[auxIdx]];
		}
	}

	return null;
}

console.log(gap(10, 15, 47040));
