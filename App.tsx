import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home';
import Quiz from './src/screens/Quiz';
import Result from './src/screens/Result';
import { SafeAreaView } from 'react-native-safe-area-context';



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Quiz" component={Quiz} />
          <Tab.Screen name="Result" component={Result} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

