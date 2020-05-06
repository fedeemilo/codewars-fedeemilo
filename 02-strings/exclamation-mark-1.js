/* Cada signo de exclamación pesa 2; El peso de cada signo de interrogación es 3. 
   Coloque dos STRINGS a la izquierda y a la derecha en la balanza. 
   ¿Están balanceadas? Si el lado izquierdo es más pesado, regrese "Izquierda"; 
   Si el lado derecho es más pesado,  regrese "Derecha"; Si están equilibrados, devuelva "Balance".
 */

/* EJEMPLOS */

/* balance("!!","??") === "Right"
   balance("!??","?!!") === "Left"
   balance("!?!!","?!?") === "Left"
   balance("!!???!????","??!!?!!!!!!!") === "Balance" 
*/

function balance(left, right) {
	let arrLeft = left.split('');
	let arrRight = right.split('');

	const calcWeight = (arr) => {
		let tot = 0;
		for (let i = 0; i < arr.length; i++) {
			arr[i] === '!' ? (tot += 2) : (tot += 3);
		}
		return tot;
	};

	if (calcWeight(arrLeft) - calcWeight(arrRight) < 0) {
		return 'Right';
	} else if (calcWeight(arrLeft) - calcWeight(arrRight) > 0) {
		return 'Left';
	} else {
		return 'Balance';
	}
}


console.log(balance('!!!', '??'));