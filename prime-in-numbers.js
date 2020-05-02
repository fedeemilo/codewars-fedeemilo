const { assertEqual } = require('./test');

// const countFactorsObject = factoresPrimos.reduce(
// 	(map, num) => ({
// 		...map,
// 		[num]: (map[num] || 0) + 1,
// 	}),
// 	{}
// );

// PRIME IN NUMBERS - 5 kyu

/* Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

 "(p1**n1)(p2**n2)...(pk**nk)"
with the p(i) in increasing order and n(i) empty if n(i) is 1.

Example: n = 86240 should return "(2**5)(5)(7**2)(11)" */

function primeFactors(N) {
	// String ejemplo result -> '(2**5)(5)(7**2)(11)'
	// Obtener los números primos de N

	// Si el factor primo cambia, agregar numero del fator P(i) ** N(i)
	// Si N(i) === 1, N(i) se encuentra vacío -> sumaFactores

	let sumaFactores = 0;
	let Nprimo = 2;
	let objAFormar = {};

	while (N !== 1) {
		if (N % Nprimo === 0) {
			sumaFactores += 1;

			objAFormar[`${Nprimo}`] = sumaFactores;

			N = N / Nprimo;
		} else {
			sumaFactores = 0;

			Nprimo += 1;
		}
	}

	let stringResult = '';

	for (let num in objAFormar) {
		if (objAFormar[num] === 1) {
			stringResult += `(${num})`;
		} else {
			stringResult += `(${num}**${objAFormar[num]})`;
		}
	}

	return stringResult;
}

let testName = 'prime-in-numbers';

// assertEqual(primeFactors(123456), '(2**6)(3)(643)', testName);

console.log(primeFactors(99999999999));
