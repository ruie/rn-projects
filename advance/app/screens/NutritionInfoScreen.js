import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';

import * as actions from '../actions';

class NutritionInfoScreen extends Component {

  render() {
    console.log('Test', this.props);
    return (
      <View style={styles.container}>
        <Image
          style={styles.bg}
          source={{ uri: 'https://image.ibb.co/mP4Bak/bg.jpg' }}
        >
          <View style={styles.card}>
            <Text style={styles.cardText}>{this.props.total.ENERC_KCAL.label}:
              {this.props.total.ENERC_KCAL.quantity}%</Text>

            <Text style={styles.cardText}>{this.props.total.FAT.label}:
              {this.props.total.FAT.quantity}%</Text>

            <Text style={styles.cardText}>{this.props.total.FIBTG.label}:
              {this.props.total.FIBTG.quantity}%</Text>

            <Text style={styles.cardText}>{this.props.total.PROCNT.label}:
              {this.props.total.PROCNT.quantity}%</Text>

            <Text style={styles.cardText}>{this.props.total.CHOLE.label}:
              {this.props.total.CHOLE.quantity}%</Text>

            <Text style={styles.cardText}>{this.props.total.CA.label}:
              {this.props.total.CA.quantity}%</Text>

            <Text style={styles.cardText}>{this.props.total.FASAT.label}:
              {this.props.total.FASAT.quantity}%</Text>
          </View>

        </Image>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  },
  card: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#fff',
    width: 350,
    height: 550,
    padding: 30,
  },
  cardText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15
  },
  bg: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 207,
    height: 119,
    resizeMode: 'center',
    marginTop: 130
  },
  top: {
    marginTop: 40
  },
  bottom: {
    marginTop: 35
  }
};

function mapStateToProps({ nutrition }) {
  return { total: nutrition };
}

export default connect(mapStateToProps, actions)(NutritionInfoScreen);
