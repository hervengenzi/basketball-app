import React, {Component} from 'react';
import Home from './src/components/Home';
import {StyleSheet, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
class App extends Component{
  render(){
    return(
      <NavigationContainer>
      <Tab.Navigator style={styles.tab}>
        <Tab.Screen name="Teams" component={Home} />
        <Tab.Screen name="Players" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  tab: {
    fontSize: 24
  }
});

export default App;