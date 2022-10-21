import React, { useState } from 'react'
import { Button, Card, Paragraph, TextInput, useTheme } from 'react-native-paper'
import { View, Alert } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import uuid from 'react-native-uuid'
import { getRealm } from '../database/realm'

type Props = {}

const Registration = (props: Props) => {

    const { colors } = useTheme()

    const [isLoading, setIsLoading] = useState(false);
    const [email, setText] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation<NativeStackNavigationProp<Navigation.RootStackParams>>()

    const cancel = (): void => {
        setText('')
        setPassword('')
    };

    const newRegistration = async () => {
        let created:{}
        const realm = await getRealm()
        try {
            setIsLoading(true)
            realm.write(() => {
                created = realm.create('Profile', {
                    _id: uuid.v4(),
                    name: name,
                    email: email,
                    lastChange: new Date(),
                })
            })

            Alert.alert('Cadastro', 'Cadastro realizado com sucesso!')
            console.log(created)


        } catch {

            Alert.alert('Cadastro', 'Não foi possível fazer o cadastro!')

        } finally {
            realm.close()
            setIsLoading(false)
            navigation.navigate('Login')
        }

    }

    return (
        <View>
            <Card
                elevation={3}
                style={{ margin: 10, backgroundColor: colors.secondColor }}
            >
                <Card.Title
                    title="CADASTRO" subtitle="Faça seu cadastro"
                // left={LoginContent} 
                />
            </Card>
            <Card elevation={3} style={{ margin: 5 }}>
                <Card.Title
                    title="DADOS" subtitle="Insira os dados"
                // left={LoginContent} 
                />
                <Card.Content>
                    <Paragraph>
                        Digite seus dados para realizar seu cadastro.
                    </Paragraph>
                    <TextInput
                        mode='outlined'
                        label="Nome"
                        placeholder='Digite seu nome'
                        value={name}
                        onChangeText={input => setName(input)}
                        style={{ margin: 5 }}
                        outlineColor={colors.secondColor}
                        activeOutlineColor={colors.secondColor}
                        placeholderTextColor={colors.secondTextColor}
                    />
                    <TextInput
                        mode='outlined'
                        label="Email"
                        placeholder='Digite seu email'
                        value={email}
                        onChangeText={input => setText(input)}
                        style={{ margin: 5 }}
                        outlineColor={colors.secondColor}
                        activeOutlineColor={colors.secondColor}
                        placeholderTextColor={colors.secondTextColor}
                    />
                    <TextInput
                        mode='outlined'
                        label="Senha"
                        placeholder='Digite sua senha'
                        secureTextEntry={true}
                        value={password}
                        onChangeText={input => setPassword(input)}
                        style={{ margin: 5 }}
                        outlineColor={colors.secondColor}
                        activeOutlineColor={colors.secondColor}
                        placeholderTextColor={colors.secondTextColor}
                    />
                </Card.Content>
                <Card.Actions>
                    <Button
                        mode="outlined" buttonColor='transparent' textColor='black'
                        style={{ margin: 5 }}
                        onPress={cancel}
                    >
                        Cancelar
                    </Button>
                    <Button
                        mode="elevated" buttonColor={colors.secondColor} textColor={colors.secondTextColor}
                        style={{ margin: 5 }}
                        onPress={newRegistration}
                    >
                        Cadastro
                    </Button>
                </Card.Actions>
            </Card>
        </View>
    )
}

export default Registration