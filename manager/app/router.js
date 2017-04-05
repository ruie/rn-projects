import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import firebase from 'firebase';

import LoginScreen from './components/loginScreen';
import EmployeeListScreen from './components/employeeListScreen';
import EmployeeCreate from './components/employeeCreate';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key={'auth'} >
        <Scene key={'login'} component={LoginScreen} title={'Auth'} hideNavBar/>
      </Scene>

      <Scene key={'main'}>
        <Scene
          onRight={() => Actions.employeeCreate()}
          key={'employeeList'}
          component={EmployeeListScreen}
          title={'List'}
          rightTitle={'Add'}
          leftTitle={'Signout'}
          onLeft={() => firebase.auth().signOut()}
          initial
        />
        <Scene
          component={EmployeeCreate}
          title={'Create Employee'}
          key={'employeeCreate'}
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
