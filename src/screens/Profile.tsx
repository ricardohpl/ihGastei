import React, { useState, useCallback } from 'react'
import { Avatar, Button, Card, Paragraph, TextInput, useTheme } from 'react-native-paper'
import { View, Text } from 'react-native'


import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParams } from '../routes/stack.routes'


import { getRealm } from '../database/realm'
import TopCard from '../components/TopCard'
import Footer from '../components/Footer'
import CustomButton from '../components/CustomButton'


type Props = {}

type UserType = {
    _id: string;
    email: string;
    name: string;
    lastChange: Date;
}

const Profile = (props: Props) => {

    const [user, setUser] = useState<UserType[]>([])
    
    const fetchUserDates = async () => {

        const realm = await getRealm()

        try {
            console.log('<<< Getting dates profile >>>')

            console.log('<< Dates User Profile >>')
            let userDates = realm.objects<UserType[]>('Profile')
                .filtered("email == 'ricardo.hpl@gmail.com'")
                .toJSON()
            console.log(user, userDates)

            setUser( userDates )

        } catch {
            console.log('<<< Problem to get dates >>>')

        } finally {
            realm.close()

        }

    }


    useFocusEffect(useCallback(() => {
        fetchUserDates();
    }, []));


    const { colors } = useTheme()

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>()


    const edit = (): void => {
        navigation.navigate('Registration')
    }
    
    const ProfileContent = (props: any) => {
        return (
            <Avatar.Icon
                {...props} icon="account"
                backgroundColor={colors.thirdTextColor}
                color={colors.mainColor}
            />
        )
    }


    return (
        <View>
            
            <TopCard
                title="PERFIL" subtitle="Dados do usuário"
                description='Visualize ou altere seus dados.'
                icon={ProfileContent}
            />

            <Card elevation={3} style={{ margin: 5 }}>
                <Card.Content>
                    <Paragraph>
                        Nome: {user.map((item) => item.name)}
                    </Paragraph>
                    <Paragraph>
                        Email: {user.map((item) => item.email)}
                    </Paragraph>
                </Card.Content>
                <Card.Actions>
                    <CustomButton 
                        label='Editar'
                        onPress={() => edit()}
                        mode='elevated'
                    />
            </Card.Actions>
        </Card>
        <Footer />
    </View >
  )
}

export default Profile