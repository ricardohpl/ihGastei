
import { StyleSheet } from 'react-native';
import { colors } from './colors';

const globalStyles = StyleSheet.create({
    containerApp: {
        display: 'flex',
        padding: 5,
        width: '95%',
    },
    box: {
        alignItems: 'center',
        margin: 8,
    },
    texting: {
        color: colors.secondTextColor,
    },
    topCard: {
        margin: 18, 
        backgroundColor: colors.mainColor,
    },
    topTitle: {
        color: colors.thirdTextColor
    },
    topDescription: {
        color: colors.mainTextColor,
        fontWeight: 'bold'
    },
    modal: {
        backgroundColor: 'white', 
        margin: 10,
        padding: 20,
        position: 'relative',
    },
    logoTitle: {
        color: colors.secondColor,
        fontSize: 20
    },
    button: {
        justifyContent: 'center',
        color: colors.secondTextColor,
        backgroundColor: colors.secondColor,
        margin: 5,
        borderRadius: 8,
        fontWeight: 'bold',
        maxWidth: 650,
    },
    buttonOutlined: {
        backgroundColor: '#F0F0F0',
        margin: 5,
        borderRadius: 8,
        fontWeight: 'bold',
        maxWidth: 650,
    },
    fabText: {
        color: colors.secondTextColor,
        textAlign: 'center'
    },
    fabTextOutlined: {
        color: colors.thirdTextColor,
        textAlign: 'center'
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 100,
        width: '100%',
        backgroundColor: colors.mainColor,
    }
});

export default globalStyles