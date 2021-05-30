import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import DashboardStack from './dashboardStack';
import OperationsStack from './operationsStack';
import LoginStack from './loginStack';

const RootDrawerNavigator = createDrawerNavigator({
    Login: {
        screen: LoginStack
    },
    Dashboard: {
        screen: DashboardStack
    }, 
    Operations: {
        screen: OperationsStack
    },
});

export default createAppContainer(RootDrawerNavigator);