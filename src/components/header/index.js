import React from 'react';
import * as Routes from '../../constants/routes';

import LOGO_UPTC from '../../assets/Logo_de_la_UPTC.png';
import './Header.scss';

const Header = () => {
	return (
		<nav className="navbar" role="navigation" aria-label="main navigation">
			<div className="navbar-brand">
				<a className="navbar-item" href={Routes.HOME_ROUTE}>
					<img src={LOGO_UPTC} className="home-logo" alt="logo" />
				</a>

				<a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
					<span aria-hidden="true" />
					<span aria-hidden="true" />
					<span aria-hidden="true" />
				</a>
			</div>

			<div id="navbarBasicExample" className="navbar-menu">
				<div className="navbar-start">
					<a className="navbar-item" href={Routes.HOME_ROUTE}>
						Inicio
					</a>

					<div className="navbar-item has-dropdown is-hoverable">
						<a className="navbar-link">Generación de Números</a>

						<div className="navbar-dropdown">
							<a className="navbar-item" href={Routes.MEAN_SQUARES}>
								Cuadrados Medios
							</a>
							<a className="navbar-item" href={Routes.LINEAR_CONGRUENCE}>
								Congruencia Lineal
							</a>
							<a className="navbar-item" href={Routes.MULTIPLICATIVE_CONGRUENCE}>
								Congruencia Multiplicativa
							</a>
							<a className="navbar-item" href={Routes.UNIFORM_DISTRIBUTION}>
								Distribución Uniforme
							</a>
							<a className="navbar-item" href={Routes.NORMAL_DISTRIBUTION}>
								Distribución Normal
							</a>
						</div>
					</div>

					<a className="navbar-item">Pruebas</a>
				</div>

				<div className="navbar-end">
					<div className="navbar-item">Simulación de Computadores 2021-1</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
