import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import Button from '../../components/button';
import Input from '../../components/input';

import { YELLOW_PRIMARY, YELLOW_SECONDARY } from '../../constants/colors';
import './MeanSquares.scss';
import generateData from '../../helpers/meanSquares';

const MeanSquares = () => {
	const [dataTable, setDataTable] = useState([]);
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => setDataTable(generateData(data));

	return (
		<div className="mean-squares-container">
			<div className="header">Cuadrados Medios</div>
			<div className="description">
				El método consiste en tomar un número al azar, X° de 2n cifras que al ser elevado al cuadrado resulta un número de
				hasta 4n cifras, de no ser así se deben agregar ceros a la izquierda de dicho resultado para que éste tenga
				exactamente 4n cifras.
				<br />
				Se denomina X1 al número resultante de seleccionar las 2n cifras centrales del resultado anterior.
				<br />
				Se genera el número pseudoaleatorio U1 ubicando un punto decimal delante de las 2n cifras de X1 y así sucesivamente
				para los demás números pseudoaleatorios
			</div>
			<div className="form-wrapper">
				<form className="form" onSubmit={handleSubmit(onSubmit)}>
					<Input register={register} formValue="seed" placeholder="Semilla" />
					<Input register={register} formValue="count" placeholder="Número de datos" />
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
							<th>Xi^2</th>
							<th>Extensión</th>
							<th>Extracción</th>
							<th>Ri</th>
						</tr>
					</thead>
					{dataTable.length !== 0 && (
						<>
							<tfoot>
								<tr>
									<th>I</th>
									<th>Xi</th>
									<th>Xi^2</th>
									<th>Extensión</th>
									<th>Extracción</th>
									<th>Ri</th>
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

export default MeanSquares;
