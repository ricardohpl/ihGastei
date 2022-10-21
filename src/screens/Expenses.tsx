import React, { useState, useEffect } from 'react'
import { Button, Card, Paragraph, Text, TextInput, Title, useTheme } from 'react-native-paper'
import { ScrollView, View, SafeAreaView } from 'react-native'
import { PaperSelect } from 'react-native-paper-select';

import CustomButton from '../components/CustomButton'
import AccountBalance from '../components/AccountBalance';
import CategoryList from '../components/CategoryList';
import Footer from '../components/Footer';


const Expenses = () => {

    const { colors, texting } = useTheme()

    let initalSelected = { id: '', value: '', icon: '' }

    const [amount, setAmount] = useState("")
    const [installments, setInstallments] = useState('1')
    const [showInstallments, setShowInstallments] = useState(true)

    const [atualizar, setAtualizar] = useState(true)

    const [category, setCategory] = useState({
        list: [
            { id: '1', value: 'Mercado', icon: 'cart' },
            { id: '2', value: 'Pets', icon: 'dog' },
            { id: '3', value: 'Lazer', icon: 'cash-100' },
            { id: '4', value: 'Transporte', icon: 'bus' },
            { id: '5', value: 'Farmácia', icon: 'pill' },
            { id: '6', value: 'Alimentação', icon: 'food' },
        ],
        selectedList: initalSelected,
        error: '',
    })

    const [payment, setPayment] = useState({
        value: '',
        list: [
            { _id: '1', value: 'Crédito' },
            { _id: '2', value: 'Débito' },
            { _id: '3', value: 'Dinheiro' },
            { _id: '4', value: 'Pix' },
        ],
        selectedList: [],
        error: '',
    })

    const cancel = (): void => {
        setCategory({
            ...category,
            selectedList: initalSelected,
            error: '',
        })
        setPayment({
            ...payment,
            value: '',
            selectedList: [],
            error: '',
        })
        setAmount('')
    };

    const insertAmount = (): void => {
        console.log(
            '- Valor: ' + amount,
            '- Categoria: ' + category.selectedList.value,
            '- Meio Pag: ' + payment.value,
            '- Parcelas: ' + installments,
            '- Saldo: ' + (0 - (+amount))
        )
        // 0 = (0 - (+amount))
        cancel()
    }

    const chooseCategory = (item: any): void => {
        setCategory({ ...category, selectedList: item })
    }


    useEffect(() => {
        if (payment.value === 'Crédito') {
            setShowInstallments(false)
        }
    }, [payment.value])


    return (
        <ScrollView>
            <Card elevation={3} style={{ margin: 8 }}>
                <Card.Title
                    title="DESPESA" subtitle="Insira a despesa"
                    titleStyle={texting}
                    subtitleStyle={texting}
                />
                <Card.Content>
                    <TextInput
                        mode='outlined'
                        label={showInstallments ? " Valor da despesa" : " Valor da parcela"}
                        placeholder=' 0,00'
                        value={amount}
                        onChangeText={input => setAmount(input)}
                        style={{ height: 40, margin: 5, }}
                        outlineColor={colors.mainColor}
                        activeOutlineColor={colors.secondColor}
                        placeholderTextColor={colors.secondTextColor}
                    />

                    <PaperSelect
                        label=" Meio de pagamento"
                        value={payment.value}
                        onSelection={(value: any) => {
                            setPayment({
                                ...payment,
                                value: value.text,
                                selectedList: value.selectedList,
                                error: '',
                            })
                        }}
                        textInputHeight={40}
                        arrayList={[...payment.list]}
                        selectedArrayList={payment.selectedList}
                        errorText={payment.error}
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
                        label="Parcelas"
                        placeholder='Digite o número de parcelas'
                        value={installments}
                        disabled={showInstallments}
                        onChangeText={input => setInstallments(input)}
                        style={{ height: 40, margin: 5, }}
                        outlineColor={colors.mainColor}
                        activeOutlineColor={colors.secondColor}
                        placeholderTextColor={colors.secondTextColor}
                    />

                    <CategoryList category={category} chooseCategory={chooseCategory} />

                </Card.Content>
                <Card.Actions>
                    <CustomButton
                        label='Cancelar'
                        onPress={cancel}
                    />
                    <CustomButton
                        label='Inserir'
                        onPress={insertAmount}
                    />
                </Card.Actions>
            </Card>

            <AccountBalance
                salary={0}
                atualizarSaldo={() => setAtualizar(!atualizar)}
                atualizar={atualizar}
            />
            
            <Footer />
            
        </ScrollView>
    )
}

export default Expenses