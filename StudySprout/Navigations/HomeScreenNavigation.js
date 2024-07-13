import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '/Users/harshvardhanupadhyay/STUDYSPROUT/StudySprout/StudySprout/app/Pages/Home.js';
import CourseDetail from '/Users/harshvardhanupadhyay/STUDYSPROUT/StudySprout/StudySprout/app/Pages/CourseDetail.js';

const Stack = createStackNavigator();

export default function HomeScreenNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CourseDetail" component={CourseDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}