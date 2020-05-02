function assertEqual(actual, expected, testName) {
	if (actual === expected) {
		console.log(`El test dio un resultado positivo con valor ${actual}`);
	} else {
		console.log(
			'FAILED [' + testName + '] Expected' + expected + ', but got ' + actual
		);
	}
}

module.exports = {
	assertEqual,
};
