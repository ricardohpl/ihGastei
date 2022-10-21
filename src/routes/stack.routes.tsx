import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Login from '../screens/Login/Login'
import Income from '../screens/Income'
import Registration from '../screens/Registration'
import Profile from '../screens/Profile'
import Expenses from '../screens/Expenses'
import Spendings from '../screens/Spendings'



const { Screen, Navigator } = createNativeStackNavigator<Navigation.RootStackParams>()

const StackRoutes = () => {

    const [isLogged, setIsLogged] = useState(true) // apenas teste inicial - necessário validar usuário logado com redux ou context api

    return (
        <Navigator
            initialRouteName={isLogged ? 'Home' : 'Profile'}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen
                name='Home' component={Home}
            />
            <Screen
                name='Login' component={Login}
            />
            <Screen
                name='Registration' component={Registration}
            />
            <Screen
                name='Profile' component={Profile}
            />
            <Screen
                name='FirstAccess' component={Income}
            />
            <Screen
                name='Income' component={Income}
            />
            <Screen
                name='Expenses' component={Expenses}
            />
            <Screen
                name='Spendings' component={Spendings}
            />
        </Navigator>
    )
}


export default StackRoutes