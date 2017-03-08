'use strict'

import Exponent from 'exponent';
import React from 'react';
import {
  Text
} from 'react-native';

import Header from './components/header'

const App = () => {
  return (
    <Header logoTitle={'Albums'} />
  );
}

Exponent.registerRootComponent(App);
// AppRegister.registerComponent('simple-album', () => App);
