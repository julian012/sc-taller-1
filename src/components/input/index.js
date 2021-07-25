import React from 'react';
import PropTypes from 'prop-types';

import './Input.scss';

const Input = ({ placeholder, icon, formValue, register, type }) => {
	return (
		<div className="custom-input__container">
			<p className="control has-icons-right">
				<input {...register(formValue)} className="input is-rounded" type={type} placeholder={placeholder} />
				<span className="icon is-small is-right">
					<i className={icon} />
				</span>
			</p>
		</div>
	);
};

Input.propTypes = {
	placeholder: PropTypes.string,
	icon: PropTypes.string,
	formValue: PropTypes.string,
	register: PropTypes.any,
	type: PropTypes.string,
};

Input.defaultProps = {
	type: 'number',
	icon: 'fas fa-sort-numeric-up-alt',
};

export default Input;
