import React, { useState, useCallback } from 'react'

import { View, Alert } from 'react-native'
import { Button, Card, TextInput, useTheme } from 'react-native-paper'

import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import CustomButton from '../components/CustomButton'
import Layout from '../components/Layout'

import uuid from 'react-native-uuid'
import { getRealm } from '../database/realm'
import Footer from '../components/Footer'
import { PaperSelect } from 'react-native-paper-select'

type Props = {}

const Income = (props: Props) => {

    const { colors, texting } = useTheme()

    const initalAccontValues = [{
        _id: "",
        balance: 0,
        lastChange: new Date,
        name: "",
        salary: 0,
        salaryDay: 0,
        userId: "",
    }]

    const navigation = useNavigation<NativeStackNavigationProp<Navigation.RootStackParams>>()

    const [userDates, setUserDates] = useState<Users.UserType[]>([])
    const [accountDates, setAccountDates] = useState<Users.AccountType[]>(initalAccontValues)

    const [isLoading, setIsLoading] = useState(false);

    const [salary, setSalary] = useState('')
    const [salaryDay, setSalaryDay] = useState('')
    const [balance, setBalance] = useState(0.00)
    const [accountName, setAccountName] = useState('')

    const [accountList, setAccountList] = useState({
        value: '',
        list: accountDates.map((item, index) => {
            return { _id: (index + 1).toString(), value: item.name }
        }),
        selectedList: [],
        error: '',
    })

    const home = (): void => {
        navigation.navigate('Home')
    }


    const fetchUserDates = async () => {

        const realm = await getRealm()

        try {
            console.log('<<< Getting dates >>>')

            console.log('<< Dates User >>')
            const user = realm.objects<Users.UserType[]>('Profile')
                .filtered("email == 'ricardo.hpl@gmail.com'")
                .toJSON()
            console.log(user)
            setUserDates(user)

            console.log('<< Dates Accounts >>')
            const accounts = realm.objects<Users.AccountType[]>('Accounts')
                .filtered(`userId = '${user.map((item) => item._id)}'`)
                .toJSON()

            console.log(accounts, user.map((item) => item._id))

            setAccountDates(accounts)

        } catch (error) {
            console.log('<<< Problem to get dates >>>')
            console.log('Erro ao pesquisar dados:', error)
            console.log('Dados:', accountDates)

        } finally {
            realm.close()
        }

    }

    useFocusEffect(useCallback(() => {
        fetchUserDates();
    }, []))

    useFocusEffect(useCallback(() => {
        if (accountDates[0]._id !== '') {
            setAccountList({
                ...accountList,
                list: accountDates.map((item, index) => {
                    return { _id: (index + 1).toString(), value: item.name }
                }),
                value: accountDates[0].name
            })
            setSalaryDay(accountDates[0].salaryDay.toString())
            setSalary((accountDates[0].salary.toString()))
        }
    }, [accountDates]))


    const accountUpdate = async () => {
        let created: {}

        const realm = await getRealm()

        try {
            setIsLoading(true)
            realm.write(() => {
                created = realm.create('Accounts', {
                    _id: uuid.v4(),
                    userId: userDates[0]._id,
                    salary: +salary,
                    salaryDay: +salaryDay,
                    balance: balance,
                    name: accountName,
                    lastChange: new Date(),
                })
            })

            Alert.alert('Conta', 'Conta cadastrada com sucesso!')
            console.log(created)

            navigation.navigate('Home')


        } catch (error) {
            Alert.alert('Conta', 'Não foi possível criar a renda!')
            console.log('Erro ao pesquisar dados:', error)
            console.log('Dados:', accountDates)

        } finally {
            realm.close()
            setIsLoading(false)
        }

    }

    const changeAccount = async (): Promise<void> => {
        console.log(+salary)
        await accountUpdate()
    }

    const cancelar = (): void => {
        setSalary('')
        setSalaryDay('')
        setBalance(0.00)
        setAccountName('')

    }


    return (
        <View>
            <Card elevation={3} style={{ margin: 15 }}>
                <Card.Title
                    title="RENDA" subtitle="Insira sua renda mensal"
                    titleStyle={texting}
                    subtitleStyle={texting}
                />

                <Card.Content>
                    <PaperSelect
                        label="Nome da Conta"
                        value={accountList.value}
                        onSelection={(value: any) => {
                            setAccountList({
                                ...accountList,
                                value: value.text,
                                selectedList: value.selectedList,
                                error: '',
                            })
                        }}
                        textInputHeight={40}
                        arrayList={[...accountList.list]}
                        selectedArrayList={accountList.selectedList}
                        errorText={accountList.error}
                        multiEnable={false}
                        textInputStyle={{ height: 40, margin: 5 }}
                        outlineColor={colors.mainColor}
                        activeOutlineColor={colors.secondColor}
                        hideSearchBox={true}
                        dialogButtonLabelStyle={{ color: 'black' }}
                        modalDoneButtonText='Aceitar'
                        modalCloseButtonText='Voltar'
                    />
                    <TextInput
                        mode='outlined'
                        label=" Renda"
                        placeholder='R$ 0,00'
                        value={salary}
                        onChangeText={input => { setSalary(input); setBalance(+input) }}
                        style={{ height: 40, margin: 5, }}
                        outlineColor={colors.mainColor}
                        activeOutlineColor={colors.secondColor}
                        placeholderTextColor={colors.secondTextColor}
                    />
                    <TextInput
                        mode='outlined'
                        label="Dia do Pagamento"
                        placeholder='Digite o dia do pagamento'
                        value={salaryDay}
                        onChangeText={input => setSalaryDay(input)}
                        style={{ height: 40, margin: 5, }}
                        outlineColor={colors.mainColor}
                        activeOutlineColor={colors.secondColor}
                        placeholderTextColor={colors.secondTextColor}
                    />

                </Card.Content>

                <Card.Actions>
                    <CustomButton
                        label='Cancelar'
                        onPress={cancelar}
                    />
                    <CustomButton
                        label='Alterar'
                        onPress={changeAccount}
                    />
                </Card.Actions>
            </Card>

            <Footer />

        </View>
    )
}

export default Income