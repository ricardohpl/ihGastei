import React from 'react'
import { Button, useTheme } from 'react-native-paper'


type Props = {
    label: string
    onPress: VoidFunction
    mode?: any
}

const CustomButton = (props: Props) => {

    const { colors, button, buttonOutlined } = useTheme()

    return (
        <Button
            style={props.mode == 'outlined' ? buttonOutlined : button}
            mode={props.mode || 'elevated' } 
            textColor={props.mode == 'outlined' ? 'black' : colors.secondTextColor}
            onPress={props.onPress}
        >
            {props.label}
        </Button>
    )
}

export default CustomButton