import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import Information from './Information';
import Comics from './Comics';

const Stack = createStackNavigator();


export default function Detail() {
  return (
    <Stack.Navigator
      initialRouteName="Information"
      tabBarOptions={{
        activeTintColor: 'darkred'
      }}
    >
      <Stack.Screen 
        name="Information" 
        component={Information} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="information-circle" color={color} size={size} />
          )
        }}
      />
      <Stack.Screen 
        name="Comics" 
        component={Comics} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book" color={color} size={size} />
          )
        }}
      />
    </Stack.Navigator>
  );
}