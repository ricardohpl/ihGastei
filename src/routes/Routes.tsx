import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import React from 'react'
import UserProvider from '../contexts/user';
import StackRoutes from './stack.routes';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#78857B'
  },
};


const Routes = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <UserProvider>
        <StackRoutes />
      </UserProvider>
    </NavigationContainer>
  )
}

export default Routes