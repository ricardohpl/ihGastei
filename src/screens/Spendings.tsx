import React from 'react'

import { ScrollView, SafeAreaView } from 'react-native'
import { Avatar, Button, Card, Paragraph, useTheme } from 'react-native-paper'
import Layout from '../components/Layout'
// import { useNavigation } from '@react-navigation/native'
// import { NativeStackNavigationProp } from '@react-navigation/native-stack'
// import { RootStackParams } from 'src/routes/stack.routes'

type Props = {}

const Spendings = (props: Props) => {

    const { colors } = useTheme()

    return (

        <Layout>
            <Card elevation={3} style={{ margin: 5, backgroundColor: colors.secondColor }}>
                <Card.Title
                    title="CONTROLE DE GASTOS" subtitle="HOME"
                // left={MenuContent} 
                />
                <Card.Content>
                    <Paragraph>
                        Veja seus gastos de maneira detalhada!"
                    </Paragraph>
                </Card.Content>
            </Card>
            <Card elevation={3} style={{ margin: 5 }}>
                <Card.Title
                    title="GASTOS" subtitle="Gastos totais"
                // left={LoginContent} 
                />
                <Card.Content>
                    <Paragraph>
                        O total de gastos no mês atual é de R$2500,00
                    </Paragraph>
                </Card.Content>
            </Card>
            <Card elevation={3} style={{ margin: 5 }}>
                <Card.Title
                    title="FATURA" subtitle="Gastos nos cartões"
                // left={LoginContent} 
                />
                <Card.Content>
                    <Paragraph>
                        O total a pagar das próximas faturas dos cartões é de R$1000,00
                    </Paragraph>
                </Card.Content>
            </Card>
        </Layout>
    )
}

export default Spendings