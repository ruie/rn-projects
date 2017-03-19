import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';

import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginScreen extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onLoginPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderLoading() {
    if (this.props.loading) {
      return <Spinner />;
    }
    return <Button onPress={this.onLoginPress.bind(this)}>Log In</Button>;
  }

  render() {
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

        <Text>
          {this.props.status}
        </Text>

        <CardSection>
          {this.renderLoading()}
        </CardSection>

      </Card>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, status, loading, user } = auth;
  return {
    email,
    password,
    status,
    loading,
    user
  };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginScreen);
