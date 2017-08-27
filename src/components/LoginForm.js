import React, { Component } from 'react';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	onButtonPress() {
		const { email, password } = this.props;

		this.props.loginUser({ email, password });
	}

	renderButton() {
		if (this.props.loading) {
			return <Spinner size={'large'} />;
		}

		return (
			<Button onPress={this.onButtonPress.bind(this)}>
				Log in or Sign up
			</Button>
		);
	}

	render() {
		return (
			<Card>
				<CardSection>
					<Input
						onChangeText={this.onEmailChange.bind(this)}
						label="Email"
						placeholder="user@gmail.com"
						value={this.props.email}
					/>
				</CardSection>

				<CardSection>
					<Input 
						secureTextEntry
						onChangeText={this.onPasswordChange.bind(this)}
						label="Password"
						placeholder="password"
						value={this.props.password}
					/>
				</CardSection>

				<Text style={styles.errorTextStyle}>
					{this.props.error}
				</Text>

				<CardSection>
					{this.renderButton()}
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
};

const mapStateToProps = ({ auth }) => {
	const { email, password, error, loading } = auth;

	return {
		email, password, error, loading
	};
};

export default connect(mapStateToProps, { 
	emailChanged, passwordChanged, loginUser
})(LoginForm);
