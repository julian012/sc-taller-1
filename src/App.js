import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import * as Routes from './constants/routes';
import Dashboard from './pages/dashboard';
import MeanSquares from './pages/meanSquares';
import LinearCongruence from './pages/linearCongruence';
import MultiplicativeCongruence from './pages/multiplicativeCongruence';
import UniformDistribution from './pages/uniformDistribution';
import NormalDistribution from './pages/normalDistribution';
import Header from './components/header';

function App() {
	return (
		<div className="App">
			<div className="header">
				<Header />
			</div>
			<div className="body">
				<Router>
					<Switch>
						<Route exact path={Routes.HOME_ROUTE}>
							<Dashboard />
						</Route>
						<Router path={Routes.MEAN_SQUARES}>
							<MeanSquares />
						</Router>
						<Router path={Routes.LINEAR_CONGRUENCE}>
							<LinearCongruence />
						</Router>
						<Router path={Routes.MULTIPLICATIVE_CONGRUENCE}>
							<MultiplicativeCongruence />
						</Router>
						<Router path={Routes.UNIFORM_DISTRIBUTION}>
							<UniformDistribution />
						</Router>
						<Router path={Routes.NORMAL_DISTRIBUTION}>
							<NormalDistribution />
						</Router>
					</Switch>
				</Router>
			</div>
		</div>
	);
}

export default App;
