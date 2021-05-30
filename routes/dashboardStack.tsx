import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Dashborad from '../screens/Dashborad';
import Header from '../components/Header/Header';

const screens = {
    Dashboard: {
        screen: Dashborad,
        navigationOptions: ({ navigation }: any) => {
            return {
                headerTitle: () => <Header title="ВСИЧКИ РИМИЧКИ" navigation={navigation} />,
            }
        }
    }
}

const DashboardStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: "#eee", 
            height: 80
        }
    }
});

export default DashboardStack;