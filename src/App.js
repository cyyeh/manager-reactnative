import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';
import Router from './Router';

class App extends Component {
	componentWillMount() {
		const config = {
			apiKey: 'AIzaSyC933VC-4qa-ZpKjgqVvHH6zMEq0YcRuNA',
			authDomain: 'manager-5abc5.firebaseapp.com',
			databaseURL: 'https://manager-5abc5.firebaseio.com',
			projectId: 'manager-5abc5',
			storageBucket: 'manager-5abc5.appspot.com',
			messagingSenderId: '689686945451'
		};

		firebase.initializeApp(config);
	}

	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return(
			<Provider store={store}>	
				<Router />
			</Provider>
		);
	}
}

export default App;
