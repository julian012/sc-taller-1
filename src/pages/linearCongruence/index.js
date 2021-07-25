import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import generateData from '../../helpers/linearCongruence';

import Input from '../../components/input';
import Button from '../../components/button';

import { YELLOW_PRIMARY, YELLOW_SECONDARY } from '../../constants/colors';
import './LinearCongruence.scss';

const LinearCongruence = () => {
	const [dataTable, setDataTable] = useState([]);
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		console.log(data);
		setDataTable(generateData(data));
	};

	return (
		<div className="mean-squares-container">
			<div className="header">Congruencia Lineal</div>
			<div className="description">
				Un generador lineal congruencial (GLC) es un algoritmo que permite obtener una secuencia de números pseudoaleatorios
				calculados con una función lineal definida a trozos discontinua. Es uno de los métodos más antiguos y conocidos para
				la generación de números pseudoaleatorios. La teoría que sustenta el proceso es relativamente fácil de entender, el
				algoritmo en si es de fácil implementación y su ejecución es rápida, especialmente cuando el hardware del ordenador
				puede soportar aritmética modular al truncar el bit de almacenamiento correspondiente
			</div>
			<div className="form-wrapper">
				<form className="form" onSubmit={handleSubmit(onSubmit)}>
					<Input register={register} formValue="x0" placeholder="x0" />
					<Input register={register} formValue="k" placeholder="k" />
					<Input register={register} formValue="c" placeholder="c" />
					<Input register={register} formValue="g" placeholder="g" />
					<Input register={register} formValue="min" placeholder="min" />
					<Input register={register} formValue="max" placeholder="max" />
					<Input register={register} formValue="size" placeholder="Número de datos" />
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

export default LinearCongruence;
