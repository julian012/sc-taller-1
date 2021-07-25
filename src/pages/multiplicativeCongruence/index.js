import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import generateData from '../../helpers/multiplicativeCongruence';

import Input from '../../components/input';
import Button from '../../components/button';

import { YELLOW_PRIMARY, YELLOW_SECONDARY } from '../../constants/colors';

import './MultiplicativeCongruence.scss';

const MultiplicativeCongruence = () => {
	const [dataTable, setDataTable] = useState([]);
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => setDataTable(generateData(data));

	return (
		<div className="multiplicative-congruence-container">
			<div className="header">Congruencia Multiplicativa</div>
			<div className="description" />
			<div className="form-wrapper">
				<form className="form" onSubmit={handleSubmit(onSubmit)}>
					<Input register={register} formValue="x0" placeholder="x0" />
					<Input register={register} formValue="t" placeholder="t" />
					<Input register={register} formValue="g" placeholder="g" />
					<Input register={register} formValue="min" placeholder="min" />
					<Input register={register} formValue="max" placeholder="max" />
					<Input register={register} formValue="size" placeholder="size" />
					<br />
					<Button background={YELLOW_PRIMARY} onHoverColor={YELLOW_SECONDARY} text="Generar" type="submit" />
				</form>
			</div>
			<div className="table-result">
				<table className="table table is-fullwidth">
					<thead>
						<tr>
							<th>I</th>
							<th>Xi</th>
							<th>Ri</th>
							<th>Ni</th>
						</tr>
					</thead>
					{dataTable.length !== 0 && (
						<>
							<tfoot>
								<tr>
									<th>I</th>
									<th>Xi</th>
									<th>Ri</th>
									<th>Ni</th>
								</tr>
							</tfoot>
							<tbody>
								{dataTable.map((rowData, i) => {
									return (
										<tr key={i}>
											{rowData.map((data, j) => {
												return <td key={j}>{data}</td>;
											})}
										</tr>
									);
								})}
							</tbody>
						</>
					)}
				</table>
			</div>
		</div>
	);
};

export default MultiplicativeCongruence;
