
import React, { useCallback, useEffect, useState } from 'react';
import { Provider as PaperProvider, useTheme } from 'react-native-paper';
import { View, Text } from "react-native";
import { fonts } from "./styles/fonts";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from "expo-font";
import theme from './styles/theme';
import { StatusBar } from 'expo-status-bar';
import Main from './screens/Main';
import Routes from './routes/Routes';
import Bar from './components/Bar';
import Footer from './components/Footer';
import UserProvider from './contexts/user';


const App: React.FC = () => {

    // const [appIsReady, setAppIsReady] = useState(false);
    // const [fontsLoaded] = useFonts(fonts)


    // useEffect(() => {
    //     async function prepare() {
    //         try {
    //             // Pre-load and API calls
    //             fontsLoaded
    //             await new Promise(resolve => setTimeout(resolve, 2000));
    //         } catch (e) {
    //             console.warn(e);
    //         } finally {
    //             // Render app
    //             setAppIsReady(true);
    //         }
    //     }

    //     prepare();
    // }, []);

    // const onLayoutRootView = useCallback(async () => {
    //     if (appIsReady) { //change appIsReady to render API
    //         await SplashScreen.hideAsync();
    //     }
    // }, [appIsReady]);

    // if (!appIsReady) {
    //     return null;
    // }

    return (
        <PaperProvider theme={theme}>
                <Bar />
                <Routes />
                {/* <View onLayout={onLayoutRootView} >
                <Main />
            </View> */}
                {/* <Footer /> */}
                <StatusBar style="dark" backgroundColor='transparent' />
        </PaperProvider>
    );

}

export default App;