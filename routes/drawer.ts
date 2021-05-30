import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import DashboardStack from './dashboardStack';
import OperationsStack from './operationsStack';

const RootDrawerNavigator = createDrawerNavigator({
    Dashboard: {
        screen: DashboardStack
    }, 
    Operations: {
        screen: OperationsStack
    },
});

export default createAppContainer(RootDrawerNavigator);