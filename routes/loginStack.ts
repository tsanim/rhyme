

import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/Login/Login';

const screens = {
    Login: {
        screen: Login,
        navigationOptions: {
            title: ''
        }
    },
}

const LoginStack = createStackNavigator(screens);

export default LoginStack;