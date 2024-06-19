import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './pages/auth/login';
import SignUp from './pages/auth/sign-up';
import Main from './pages/tabs/main';
import Auth from './pages/auth/auth';
import OTPVerification from './pages/auth/otp';
import SigUpInfo from './pages/auth/info-signup';
import PasswordSignUp from './pages/auth/password-signup';
import PasswordLogin from './pages/auth/password-login';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Auth"
        screenOptions={{
          headerShown: true,
        }}
      >
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="OTP" component={OTPVerification} />
        <Stack.Screen name="SignUpInfo" component={SigUpInfo} />
        <Stack.Screen name="PasswordSignUp" component={PasswordSignUp} />
        <Stack.Screen name="PasswordLogin" component={PasswordLogin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
