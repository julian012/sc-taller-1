const MIN = 8;
const MAX = 10;
const K = 2;
const DIVISOR = (count) => {
	let divisor = 1;
	for (let i = 0; i < count; i++) {
		divisor *= 10;
	}
	return divisor;
};

function addZero(number, count) {
	let newNumber = '';
	for (let i = 0; i < count; i++) {
		newNumber += '0';
	}
	newNumber += number;
	return newNumber;
}

function extractNumber(numberString) {
	const size = numberString.length / 2;
	return numberString.substr(size - K, K * 2);
}

function verifyNumber(number) {
	if (number.toString().length >= MIN && number.toString().length <= MAX) {
		if (number.toString().length % 2 === 0) {
			return extractNumber(number.toString());
		}
		return extractNumber(addZero(number, 1));
	}
	const count = MIN - number.toString().length;
	return extractNumber(addZero(number, count));
}

function createMatrix({ seed, count }) {
	const result = [];
	let xi = seed;
	for (let i = 0; i < count; i++) {
		const xi2 = xi ** 2;
		const extension = xi2.toString().length;
		const extraction = parseInt(verifyNumber(xi2));
		const ri = extraction / DIVISOR(seed.toString().length);
		const data = [];
		data.push(i, xi, xi2, extension, extraction, ri);
		result.push(data);
		xi = extraction;
	}
	return result;
}

const generateData = ({ seed, count }) => createMatrix({ seed, count });

export default generateData;
