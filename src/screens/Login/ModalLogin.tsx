import React, { useState } from 'react'
import { Button, Modal, Portal, Text, TextInput, Title, useTheme } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'


type Props = {
    visible: boolean,
    hideModal(): void,
}

const ModalLogin = (props: Props) => {

    const { modal, colors } = useTheme()

    const navigation = useNavigation<NativeStackNavigationProp<Navigation.RootStackParams>>()
    const [email, setText] = useState("");
    const [password, setPassword] = useState("");

    const cancel = (): void => {
        setText('')
        setPassword('')
    };

    const login = (): void => {
        navigation.navigate('Home')
        props.hideModal()
    }

    return (
        <Portal>
            <Modal visible={props.visible} onDismiss={props.hideModal} contentContainerStyle={modal} >
                <Title>Login</Title>
                <Text>Digite seus dados: </Text>

                <TextInput
                    mode='outlined'
                    label="Email"
                    placeholder='Digite seu email'
                    value={email}
                    onChangeText={input => setText(input)}
                    style={{ margin: 5 }}
                    outlineColor={colors.mainColor}
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
                    outlineColor={colors.mainColor}
                    activeOutlineColor={colors.secondColor}
                    placeholderTextColor={colors.secondTextColor}
                />

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
                    onPress={login}
                >
                    Entrar
                </Button>
            </Modal>
        </Portal>
    )
}

export default ModalLogin