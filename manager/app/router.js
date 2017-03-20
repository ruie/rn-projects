import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import LoginScreen from './components/loginScreen';
import EmployeeListScreen from './components/employeeListScreen';
import EmployeeCreate from './components/employeeCreate';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key={'auth'} >
        <Scene key={'login'} component={LoginScreen} title={'Auth'} />
      </Scene>

      <Scene key={'main'}>
        <Scene
          onRight={() => Actions.employeeCreate()}
          key={'employeeList'}
          component={EmployeeListScreen}
          title={'List'}
          rightTitle={'Add'}
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
