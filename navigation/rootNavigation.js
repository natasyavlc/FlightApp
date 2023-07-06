import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// SCREEN
import Splashscreen from '../screen/Splashscreen';
import HomeScreen from '../screen/HomeScreen';
import SearchResultScreen from '../screen/SearchResultScreen';
import PersonalInfoScreen from '../screen/PersonalInfoScreen';
import FlightDetailsScreen from '../screen/FlightDetailsScreen';
import PaymentScreen from '../screen/PaymentScreen';
import PaymentMethodScreen from '../screen/PaymentMethodScreen';
import Test from '../screen/Test';

const RootNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SearchResultScreen}>
        <Stack.Screen
          options={{headerShown: false}}
          name="Test"
          component={Test}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="PaymentMethodScreen"
          component={PaymentMethodScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="PaymentScreen"
          component={PaymentScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="FlightDetailsScreen"
          component={FlightDetailsScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="PersonalInfoScreen"
          component={PersonalInfoScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SearchResultScreen"
          component={SearchResultScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SplashScreen"
          component={Splashscreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
