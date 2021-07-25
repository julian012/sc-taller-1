import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import generateData from '../../helpers/uniformDistribution';
import Input from '../../components/input';
import Button from '../../components/button';
import { YELLOW_PRIMARY, YELLOW_SECONDARY } from '../../constants/colors';

import './UniformDistribution.scss';

const UniformDistribution = () => {
	const [dataTable, setDataTable] = useState([]);
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		setDataTable(generateData(data));
	};

	return (
		<div className="uniform-distribution-container">
			<div className="header">Distribución Uniforme</div>
			<div className="description">
				La distribución uniforme es una distribución de probabilidad continua donde todos los valores de un intervalo
				específico tienen la misma probabilidad. Una distribución de entero es una versión discreta de la distribución
				uniforme (vea a continuación). La distribución uniforme se utiliza al modelar las concentraciones de un gas en un
				modelo de simulación o del tiempo entre accidentes en una intersección.
				<br />
				Con frecuencia, la distribución uniforme se utiliza para modelar eventos aleatorios cuando cada instancia o
				resultado potencial tiene la misma probabilidad de ocurrencia.
			</div>
			<div className="form-wrapper">
				<form className="form" onSubmit={handleSubmit(onSubmit)}>
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
							<th>Ni</th>
						</tr>
					</thead>
					{dataTable.length !== 0 && (
						<>
							<tfoot>
								<tr>
									<th>I</th>
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

export default UniformDistribution;
