import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import Footer from '../components/Footer'
import Bar from '../components/Bar'
import Login from './Login/Login'
import Routes from '../routes/Routes'

type Props = {}

const Main = (props: Props) => {
    // const { containerApp, texting } = useTheme()

    return (
        <View >
            <Bar />
            <Login />
        </View>
    )
}

export default Main