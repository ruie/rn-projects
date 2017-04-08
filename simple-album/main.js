'use strict'

import Exponent from 'exponent';
import React from 'react';
import { Text, View } from 'react-native';

import Header from './components/Header';
import AlbumList from './components/AlbumList';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Header logoTitle={'Album List'}
      />
      <AlbumList />
    </View>
  );
};

Exponent.registerRootComponent(App);
// AppRegister.registerComponent('simple-album', () => App);
