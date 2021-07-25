function getR_i(x_i, m) {
	const r_i = [];
	for (let index = 0; index < x_i.length; index++) {
		r_i[index] = x_i[index] / (m - 1);
	}
	return r_i;
}

function getX_i(x0, a, c, m, tam) {
	const x_i = [];
	x_i.push((a * x0 + c) % m);
	for (let index = 0; index < tam - 1; index++) {
		x_i.push((a * x_i[x_i.length - 1] + c) % m);
	}
	return x_i;
}

function getN_i(r_i, min, max) {
	const n_i = [];
	for (let index = 0; index < r_i.length; index++) {
		n_i[index] = min + (max - min) * r_i[index];
	}
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

const generateData = ({ x0, k, c, g, size, min, max }) => {
	const a = 1 + 2 * k;
	const m = 2 ** g;
	const xi = getX_i(parseInt(x0), a, parseInt(c), m, parseInt(size));
	const ri = getR_i(xi, m);
	const n_i = getN_i(ri, parseInt(min), parseInt(max));
	return createMatrix(xi, ri, n_i);
};

export default generateData;
