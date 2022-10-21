import React, { createContext, useState } from 'react'
import { getRealm } from '../database/realm'
import { Alert } from 'react-native'
import uuid from 'react-native-uuid'

export const UserContext = createContext({})

const UserProvider = ({ children }) => {

    const initialUserDatesValues = [{
        _id: '',
        email: '',
        name: '',
        lastChange: new Date,
    }]

    const initalAccontValues = [{
        _id: "",
        balance: 0,
        lastChange: new Date,
        name: "",
        salary: 0,
        salaryDay: 0,
        userId: "",
    }]

    const [userDates, setUserDates] = useState<Users.UserType[]>(initialUserDatesValues)
    const [accountDates, setAccountDates] = useState<Users.AccountType[]>(initalAccontValues)

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
                // .filtered(`userId = ''`)
                .filtered(`userId = '${user.map((item) => item._id)}'`)
                .toJSON()

            console.log(accounts, user.map((item) => item._id))

            if (accounts.length > 0) {
                setAccountDates(accounts)
            }


        } catch {
            console.log('<<< Problem to get dates uai? >>>')

        } finally {
            realm.close()
        }

    }


    const insertAccounts = async (
        salary: string, salaryDay: number, balance: number, accountName: string
    ) => {
        let created: {}

        const realm = await getRealm()

        try {
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

        } catch (error) {

            Alert.alert('Conta', 'Não foi possível criar a renda!')
            console.log('Erro ao pesquisar dados:', error)
            console.log('Dados:', accountDates)

        } finally {
            realm.close()
        }

    }

    const value = {
        userDates, accountDates, fetchUserDates, insertAccounts,
        nome: 'Ricardo'
    }

    return (
        <UserContext.Provider
            value={value}>
             { children }
        </UserContext.Provider>
    )
}

export default UserProvider
