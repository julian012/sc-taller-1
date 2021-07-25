import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import generateData from '../../helpers/normalDistribution';
import Input from '../../components/input';
import Button from '../../components/button';
import { YELLOW_PRIMARY, YELLOW_SECONDARY } from '../../constants/colors';

const NormalDistribution = () => {
	const [dataTable, setDataTable] = useState([]);
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		setDataTable(generateData(data));
	};

	return (
		<div className="uniform-distribution-container">
			<div className="header">Distribución Normal</div>
			<div className="description" />
			<div className="form-wrapper">
				<form className="form" onSubmit={handleSubmit(onSubmit)}>
					<Input register={register} formValue="mu" placeholder="Media" />
					<Input register={register} formValue="sigma" type="text" placeholder="Desviación Estandar" />
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

export default NormalDistribution;
