import React from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

class ProfileScreen extends React.Component {
  constructor(props){
    super(props)
  }

  state = {
  }

  componentWillMount() {
    this.setState( this.props.toProps );
  }

  render() {
    console.log('Profile',this.state);
    return (
      <View style={{ flex: 1}}>
        <Text>Name: {this.state.user.name}</Text>
        <Text>ID: {this.state.user.id}</Text>
      </View>
    );
  }

}

const styles = {
  loginButton: {
    width: 250
  },
  logo: {
    flexDirection: 'column',
    fontSize: 30,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  picSize: {
    width: 100,
    height: 100,
    textAlign: 'center'
  }
};

export default ProfileScreen;
