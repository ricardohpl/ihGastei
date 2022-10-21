import React from 'react'
import { FAB, useTheme, Text } from 'react-native-paper'
import { View } from 'react-native'


type Props = {
    label: string
    onPress: VoidFunction
    icon: string
    size?: "small" | "medium" | "large" | undefined
    mode?: any
}

const CustomButton = (props: Props) => {

    const { colors, button, buttonOutlined, fabText, fabTextOutlined } = useTheme()

    return (
        <View>
            <FAB
                icon={props.icon}
                mode={props.mode || 'elevated' } 
                onPress={props.onPress}
                size={props.size || 'medium'}
                style={props.mode === 'flat' ? buttonOutlined : button}
                color={colors.secondTextColor}
            />
            <Text 
                // style={props.mode === 'flat' ? fabTextOutlined :  fabText}
                style={fabText}
            > 
                {props.label} 
            </Text>
        </View>
    )
}

export default CustomButton