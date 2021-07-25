function getX_i(x0, a, m, tam) {
	const x_i = [];
	for (let index = 0; index < tam; index++) {
		x0 = (a * x0) % m;
		x_i.push(x0);
	}
	return x_i;
}

function getR_i(x_i, m) {
	const r_i = [];
	x_i.forEach((element) => {
		r_i.push(element / (m - 1));
	});
	return r_i;
}

function getN_i(r_i, a, b) {
	const n_i = [];
	r_i.forEach((element) => {
		n_i.push(a + (b - a) * element);
	});
	return n_i;
}

function createMatrix(x_i, r_i, n_i) {
	const result = [];
	for (let i = 0; i < r_i.length; i++) {
		const data = [];
		data.push(i + 1, x_i[i], r_i[i], n_i[i]);
		result.push(data);
	}
	return result;
}

const generateData = ({ x0, t, g, min, max, size }) => {
	const a = 8 * parseInt(t) + 3;
	const m = 2 ** g;
	const x_i = getX_i(parseInt(x0), a, m, parseInt(size));
	const r_i = getR_i(x_i, m);
	const n_i = getN_i(r_i, parseInt(min), parseInt(max));

	return createMatrix(x_i, r_i, n_i);
};

export default generateData;
