import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/Login/Login';
import Register from '../screens/Register/Register';
import Header from '../components/Header/Header';

const screens = {
    Login: {
        screen: Login,
        navigationOptions: ({ navigation }: any) => {
            return {
                headerTitle: () => <Header title="ВЛИЗАНЕ" navigation={navigation} />,
            }
        }
    },
    Register: {
        screen: Register,
        navigationOptions: ({ navigation }: any) => {
            return {
                headerTitle: () => <Header title="РЕГИСТРАЦИЯ" navigation={navigation} />,
            }
        }
    }
}

const LoginStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: "#eee",
            height: 80
        }
    }
});

export default LoginStack;