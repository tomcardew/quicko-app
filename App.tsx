import {NavigationContainer} from '@react-navigation/native';
import {observer} from 'mobx-react';
import React from 'react';
import Router from './src/routes';

const App = observer(() => {
  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </>
  );
});

export default App;
