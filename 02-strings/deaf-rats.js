/*
Historia
El flautista ha sido alistado para tocar su melodía mágica y convencer a todas las ratas de la ciudad.
¡Pero algunas de las ratas son sordas y van por el camino equivocado!

Kata Task
¿Cuántas ratas sordas hay?
Leyenda
P = El flautista
O ~ = Rata yendo a la izquierda
~ O = Rata yendo a la derecha
Ejemplo
ex1 ~ O ~ O ~ O ~ O P tiene 0 ratas sordas
ex2 P O ~ O ~ ~ O O ~ tiene 1 rata sorda
ex3 ~ O ~ O ~ O ~ OP ~ O ~ OO ~ tiene 2 ratas sordas

*/

var countDeafRats = function (town) {
	var count = 0;
	var arrTown = town.split(/\s+/).join('');
	var lastIdx = arrTown.length - 1;

	if (arrTown[0] === 'P') {
        // starts with P
		for (let i = 0; i < arrTown.length; i++) {
			if (i % 2 !== 0) {
				if (arrTown[i] === '~') {
					count += 1;
				}
			}
		}
	} else if (arrTown[lastIdx] === 'P') {
       // ends with P
		for (let i = 0; i < arrTown.length; i++) {
			if (i % 2 === 0) {
				if (arrTown[i] === 'O') {
					count += 1;
				}
			}
		}
	} else {
        for (let i = 0; i < arrTown.length; i++) {
            if (arrTown[i] !== 'P') {
                if (i % 2 === 0) {
                    if (arrTown[i] === 'O') {
                        count += 1;
                    }
                }
            } else {
                if (i % 2 !== 0) {
                    if (arrTown[i] === '~') {
                        count += 1;
                    }
                }
            }
           
        }
    }

	return count;
};

console.log(countDeafRats('~O~O~O~OP~O~OO~'));
