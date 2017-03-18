import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, CardSection, Input, Button } from './common';
import { emailChanged, passwordChanged } from '../actions';

class LoginScreen extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  render() {
    console.log(this.props);
    return (
      <Card>
        <CardSection>
          <Input
            label={'Email'}
            placeholder={'email@email.com'}
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label={'Password'}
            placeholder={'password'}
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        <CardSection>
          <Button>Login</Button>
        </CardSection>

      </Card>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password } = auth;
  return {
    email,
    password
  };
};


export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginScreen);
