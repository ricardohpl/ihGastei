
import React from 'react'
import { Avatar, useTheme } from 'react-native-paper'


const CashContent = (props: any) => {

    const { colors } = useTheme()

    return (
        <Avatar.Icon
            {...props} icon="cash-100"
            backgroundColor={colors.thirdTextColor}
            color={colors.mainColor}
        />
    )

}


const LoginContent = (props: any) => {
    
    const { colors } = useTheme()

    return (
        <Avatar.Icon
            {...props} icon="account" 
            backgroundColor={colors.thirdTextColor} 
            color={colors.mainColor}
        />)
}

const GoogleContent = (props: any) => {

    const { colors } = useTheme()

    return (
        <Avatar.Icon
            {...props} icon="google" 
            backgroundColor={colors.mainColor}
            color={colors.secondColor}
        />)
}


export { LoginContent, GoogleContent, CashContent }


