import React, { useState, useEffect } from 'react'
import { Card, Paragraph, Text, useTheme } from 'react-native-paper'

type Props = {
    salary: number
    atualizar: boolean
    atualizarSaldo: VoidFunction
}

const AccountBalance = (props: Props) => {

    const [atualizar, setAtualizar] = useState(true)
    const { texting } = useTheme()

    useEffect(() => {
        setAtualizar(props.atualizar)
    }, [props.atualizar])

    return (
        <Card elevation={3} style={{ margin: 8 }} >
            <Card.Title
                title="SALDO"
                titleStyle={texting}
            />
            <Card.Content>
                <Paragraph style={texting}>
                    Seu saldo no mês atual é de <Text style={{ color: 'green' }}>
                        R$ {props.salary.toFixed(2).toString().replace('.', ',')}
                    </Text>
                </Paragraph>
            </Card.Content>
        </Card>
    )
}

export default AccountBalance