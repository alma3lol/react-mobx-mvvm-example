import { observer } from 'mobx-react';
import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.scss';
import ExampleView from './views/ExampleView';
import ExampleViewModel from './viewmodels/ExampleViewModel';

const vm = new ExampleViewModel();

@observer
class App extends Component<{}> {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<ExampleView vm={vm} />
				</header>
			</div>
		);
	}
}
	
	export default App;
	