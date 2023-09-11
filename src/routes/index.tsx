import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {useStores} from '../../use-store';
import ScreenNames from '../constants/Screens';
import {observer} from 'mobx-react';
import {useNavigation} from '@react-navigation/native';
import {HomeController, HomeViewModel} from '../app/modules/Home';

const Stack = createNativeStackNavigator();

const Router = observer(() => {
  const navigation = useNavigation();
  //   const {baseStore} = useStores();
  const HomeScreen = () => (
    <HomeController viewModel={new HomeViewModel(navigation)} />
  );
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ScreenNames.Home.toString()} component={HomeScreen} />
    </Stack.Navigator>
  );
});

export default Router;
