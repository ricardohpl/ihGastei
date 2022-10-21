
import React, { useState, useCallback, useContext } from 'react'
import { ScrollView } from 'react-native'
import { Card, useTheme, Avatar, Text, Button, Paragraph, FAB } from 'react-native-paper'

import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import CustomButton from '../components/CustomButton'
import CustomFAB from '../components/CustomFab'
import TopCard from '../components/TopCard'
import AccountBalance from '../components/AccountBalance'

import { CashContent } from '../components/Icons'

import { getRealm } from '../database/realm'
import UserProvider, { UserContext } from '../contexts/user'


const Home = () => {

    const navigation = useNavigation<NativeStackNavigationProp<Navigation.RootStackParams>>()
    const { colors, texting, box } = useTheme()

    const { userDates, accountDates, fetchUserDates, insertAccounts, nome } = useContext(UserContext)
   

    useFocusEffect(useCallback(() => {
        fetchUserDates();
    }, []));


    const [atualizar, setAtualizar] = useState(true)


    const expenses = (): void => {
        navigation.navigate('Expenses')
    }

    const spendings = (): void => {
        navigation.navigate('Spendings')
    }

    const renda = (): void => {
        navigation.navigate('Income')
    }

    const profile = (): void => {
        navigation.navigate('Profile')
    }

    const logOut = (): void => {
        navigation.navigate('Login')
    }

    // useFocusEffect(useCallback(() => {
    //     console.log('<< Initial Dates >>')
    //     accountDates[0].userId !== '' && accountDates[0].userId === userDates[0]._id ?
    //     // accountDates[0].userId === '' ?
    //         <></> : 
    //         navigation.navigate('Income')
    // }, [accountDates]));


    return (
        <ScrollView>

            <TopCard
                title="CONTROLE DE GASTOS" subtitle="HOME"
                description={
                    `Olá ${userDates.map((item) => item.name)}, seja bem vindo ao app de controle de gastos "Ih Gastei!".`
                }
                icon={CashContent}
            />

            <AccountBalance
                salary={+accountDates[0].balance}
                atualizarSaldo={() => setAtualizar(!atualizar)}
                atualizar={atualizar}
            />

            <Card elevation={5} style={{ margin: 8 }}>
                <Card.Title
                    title="Inserir nova despesa:"
                    titleStyle={texting}
                />
                <Card.Content>
                    <CustomButton
                        label='Despesa'
                        onPress={expenses}
                    />
                </Card.Content>
            </Card>

            <Card elevation={3} style={box}>
                <Card.Actions>
                    <CustomFAB
                        icon="account"
                        label='Perfil'
                        onPress={profile}
                    />
                    <CustomFAB
                        icon="cash-multiple"
                        label='Renda'
                        onPress={renda}
                    />

                    <CustomFAB
                        icon="cash-100"
                        label='Gastos'
                        onPress={spendings}
                    />
                    <CustomFAB
                        icon="view-list"
                        label='Relatorios'
                        onPress={spendings}
                    />
                    <CustomFAB
                        icon="door-open"
                        label='Sair'
                        onPress={logOut}
                        mode='flat'
                    />
                </Card.Actions>
            </Card>
        </ScrollView>
    )
}

export default Home