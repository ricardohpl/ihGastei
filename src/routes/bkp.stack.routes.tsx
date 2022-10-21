import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Login from '../screens/Login/Login'
import { FirstAccess } from '../screens/FirstAccess'
import { Registration } from '../screens/Registration'
import { Profile } from '../screens/Profile'
import { Expenses } from '../screens/Expenses'
import Spendings from '../screens/Spendings'

export type RootStackParams = {
    Login: any;
    Home: any;
    Registration: any;
    FirstAccess: any;
    Profile: any;
    Expenses: any;
    Spendings: any;
    LoginNavigation: any;
    MainNavigation: any;
}


const { Screen, Navigator } = createNativeStackNavigator<RootStackParams>()


const StackRoutes = () => {

    const [isLogged, setIsLogged] = useState(true) // apenas teste inicial - necessário validar usuário logado com redux ou context api

    return (
        <Navigator
            initialRouteName={isLogged ? 'MainNavigation' : 'LoginNavigation'}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen
                name='LoginNavigation' component={LoginNavigation}
            />
            <Screen
                name='MainNavigation' component={MainNavigation}
            />
        </Navigator>
    )
}

const LoginNavigation = () => {

    const [isLogged, setIsLogged] = useState(false) // apenas teste inicial - necessário validar usuário logado com redux ou context api

    return (
        <Navigator
            initialRouteName={isLogged ? 'MainNavigation' : 'Login'}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen
                name='Login' component={Login}
            />
            <Screen
                name='Registration' component={Registration}
            />
            <Screen
                name='MainNavigation' component={MainNavigation}
            />
        </Navigator>
    )
}


const MainNavigation = () => {

    const [isLogged, setIsLogged] = useState(true) // apenas teste inicial - necessário validar usuário logado com redux ou context api

    return (
        <Navigator
            initialRouteName={isLogged ? 'Home' : 'LoginNavigation'}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen
                name='LoginNavigation' component={LoginNavigation}
            />
            <Screen
                name='Home' component={Home}
            />
            <Screen
                name='FirstAccess' component={FirstAccess}
            />
            <Screen
                name='Profile' component={Profile}
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