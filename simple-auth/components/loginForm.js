import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Card, CardSection, Button, Input, Spinner } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    status: '',
    loading: false
  };

  onLoginPress() {
    const { email, password } = this.state;

    this.setState({ status: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFailed.bind(this));
      });
  }

  onLoginFailed() {
    this.setState({
      status: 'Login Failed',
      loading: false
    });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      status: 'Success',
      loading: false
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner />;
    }

    return <Button label={'Log In'} onPress={this.onLoginPress.bind(this)} />;
  }

  render() {
    return (
        <Card>
          <CardSection>
            <Input
              label={'Email'}
              placeholder={'email@email.com'}
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
          </CardSection>

          <CardSection>
            <Input
              secureTextEntry
              label={'Password'}
              placeholder={'Password'}
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />
          </CardSection>

          <CardSection>
            {this.renderButton()}
          </CardSection>

          <Text>{this.state.status}</Text>

        </Card>
    );
  }
}

export default LoginForm;
