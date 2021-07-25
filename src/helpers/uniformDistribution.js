import { randomUniform } from 'd3-random';

const generateData = ({ min, max, size }) => {
	const res = [];
	for (let i = 0; i < size; i++) {
		res.push([i, randomUniform(min, max)()]);
	}
	return res;
};

export default generateData;
