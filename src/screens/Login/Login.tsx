import React, { useState } from 'react'
import { SafeAreaView, ScrollView } from 'react-native';
import {
    Avatar, Button, Card, Paragraph, useTheme
} from 'react-native-paper';
import ModalLogin from './ModalLogin';


import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import CustomButton from '../../components/CustomButton';
import TopCard from '../../components/TopCard';

import { LoginContent, GoogleContent } from '../../components/Icons'


type Props = {}

const Login = (props: Props) => {
    
    const navigation = useNavigation<NativeStackNavigationProp<Navigation.RootStackParams>>() 
    const { texting } = useTheme()

    const [visible, setVisible] = useState(false);

    const showModal = (): void => setVisible(true);
    const hideModal = (): void => setVisible(false);


    const cadastro = (): void => {
        navigation.navigate('Registration')
    }

    return (
        <ScrollView>
            <SafeAreaView>
                <TopCard
                    title='CONTROLE DE GASTOS'
                    subtitle='LOGIN'
                    description='Seja bem vindo ao App "Ih Gastei!", aplicativo para controlar seus gastos
                    mensais.'
                    icon={LoginContent}
                />
        
                <Card elevation={3} style={{ margin: 10 }}>
                    <Card.Title 
                        title="Conta" subtitle="Google" left={GoogleContent}
                        subtitleStyle={texting}
                    />      
                    {/* <Card.Cover source={{ uri: '' }} /> */}              
                    <Card.Cover source={require('../../assets/pexels-karolina-grabowska-4968499.jpg')} />
                    <Card.Actions>
                        <CustomButton
                            mode={'outlined'}
                            label='Cadastre-se!'
                            onPress={cadastro}
                        />
                        <CustomButton
                            label='LogIn'
                            onPress={showModal}
                        />
                    </Card.Actions>
                    
                    <Card.Content>
                        <Paragraph>
                            Se não tiver um cadastro clique em cadastrar-se para
                            realizar seu cadastro!
                        </Paragraph>
                    </Card.Content>
                </Card>
                <ModalLogin visible={visible} hideModal={hideModal} />
            </SafeAreaView>
        </ScrollView>

    )
}

export default Login