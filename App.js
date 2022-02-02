import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from './Main';
import Profile from './Profile';
import History from './History';
import { createStore, compose } from 'redux';
import RootReducers from './src/Reducers'
import { Provider, useSelector, useDispatch} from 'react-redux';

let composeEnh = compose;
if(__DEV__){
  composeEnh = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;

}
const store = createStore(RootReducers, composeEnh());
const Drawer = createDrawerNavigator();
function App(){
  
  return (
    <Provider store={store}> 
    <NavigationContainer>
      <Drawer.Navigator>
      <Drawer.Screen name="Main" component={Main} options={{ headerShown: false,swipeEnabled: false}} />
      <Drawer.Screen name="History" component={History} options={{ headerShown: false}} />
      </Drawer.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
