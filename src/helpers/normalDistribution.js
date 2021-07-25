import { randomNormal } from 'd3-random';

const generateData = ({ mu, sigma, size }) => {
	const res = [];
	for (let i = 0; i < size; i++) {
		res.push([i, randomNormal(mu, sigma)()]);
	}
	return res;
};

export default generateData;
