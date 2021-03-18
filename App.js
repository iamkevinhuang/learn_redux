import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from './src/screens/HomeScreen';
import SecondScreen from './src/screens/SecondScreen';

import {setNavigator} from './src/navigationRef';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initialState = {
  myValue: 0
}

//Reducer
const rootReducer = (state = initialState, action) => {
  if (action.type === "PLUS_VALUE"){
    return {
      ...state, myValue: state.myValue + action.payload
    }
  }
  else if (action.type === "MINUS_VALUE"){
    return {
      ...state, myValue: state.myValue - action.payload
    }
  }
  return state;
}

//Store
const store = createStore(rootReducer);

const switchNavigator = createSwitchNavigator({
  mainFlow: createBottomTabNavigator({
    Home: HomeScreen,
    Second: SecondScreen
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <Provider store={store}>
      <App ref={(navigator) => {setNavigator(navigator)}} />
    </Provider>
  );
}