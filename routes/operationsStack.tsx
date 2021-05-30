import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Operations from '../screens/Operations';
import Edit from '../screens/Edit';
import Header from '../components/Header/Header';
import Add from '../screens/Add';

const screens = {
    Operations: {
        screen: Operations,
        navigationOptions: ({ navigation }: any) => {
            return {
                headerTitle: () => <Header title="Операции" navigation={navigation} />,
            }
        }
    },
    Edit: {
        screen: Edit,
    },
    Add: {
        screen: Add,
    }
}

const OperationsStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: "#eee",
            height: 80
        }
    }
});

export default OperationsStack;