import React from 'react'
import { Card, Text, useTheme } from 'react-native-paper'
import { View, KeyboardAvoidingView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParams } from '../routes/stack.routes'
import CustomFab from './CustomFab'

const Footer = () => {

    const { footer, texting, box } = useTheme()

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>()

    const inicio = (): void => {
        navigation.navigate('Home')
    }

    const logOut = (): void => {
        navigation.navigate('Login')
    }

    return (
        <Card
            elevation={5}
            style={{marginTop: 15}}
        >
            {/* <Card.Title
                title={props.title} subtitle={props.subtitle} left={props.icon}
                titleStyle={topTitle}
                subtitleStyle={topTitle}
            /> */}
            <Card.Content
                style={footer}
            >
                <CustomFab
                    icon="home"
                    label='Ínicio'
                    onPress={inicio}
                    mode='flat'
                />
                <CustomFab
                    icon="door-open"
                    label='Sair'
                    onPress={logOut}
                    mode='flat'
                />
            </Card.Content>
        </Card>

    )
}

export default Footer