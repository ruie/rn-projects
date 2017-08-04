import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Icon, List, ListItem, } from 'react-native-elements';
import { connect } from 'react-redux';
import Modal from 'react-native-modalbox';
import { NavigationActions } from 'react-navigation';

import * as actions from '../actions';
import Backend from '../Backend';

class TutorScreen extends Component {

   static navigationOptions = ({ navigation }) => {
      const { params = {} } = navigation.state;
      return {
      headerTitle: 'Stubu',
      headerLeft: <Icon name='book' type='font-awesome' color='#ffffff' onPress={() => {
         params.switchStatus('student')
         params.redirectScreen('StudentScreen')
      }} />,
      headerRight: (
         <View style={{ flexDirection: 'row' }}>
            <Icon name='align-left' type='font-awesome' color='#ffffff' style={{ marginRight: 10 }} onPress={() => navigation.navigate('Filter')} />
            <Icon name='pencil-square-o' type='font-awesome' color='#ffffff' onPress={() => navigation.navigate('Post')} />
         </View>
      ),
      tabBarIcon: ({ tintColor }) => (
         <Icon name='list-ul' type='font-awesome' color={tintColor} />
      ),
   }};

   state = {
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3
   };

   componentWillMount() {
      console.log('Initial', this.props);
   }

   componentDidMount() {
      this.props.navigation.setParams({
         redirectScreen: this.redirectScreen,
         switchStatus: this.props.switchStatus
      });
   }


   redirectScreen = route => this.props.navigation.dispatch(
      NavigationActions.reset({ index: 0, actions: [NavigationActions.navigate({ routeName: route })] })
   );

   render() {
      return <View>
         <Text>TutorScreen</Text>
         <Modal
            style={[styles.modal]}
            ref={"modal1"}
            swipeToClose={this.state.swipeToClose}
            onClosed={this.onClose}
            onOpened={this.onOpen}
            onClosingState={this.onClosingState}>
            <Text style={styles.text}>Basic modal</Text>
         </Modal>
      </View>;
   }
}

const styles = {
   wrapper: {
      paddingTop: 50,
      flex: 1
   },
   modal: {
      justifyContent: 'center',
      alignItems: 'center'
   },
   btn: {
      margin: 10,
      backgroundColor: "#3B5998",
      color: "white",
      padding: 10
   },
};

const mapStateToProps = ({ status }) => {
   return {
      status: status.status
   }
}

export default connect(mapStateToProps, actions)(TutorScreen);