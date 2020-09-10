import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile100263Navigator from '../features/UserProfile100263/navigator';
import Tutorial100262Navigator from '../features/Tutorial100262/navigator';
import NotificationList100234Navigator from '../features/NotificationList100234/navigator';
import Settings100233Navigator from '../features/Settings100233/navigator';
import Settings100225Navigator from '../features/Settings100225/navigator';
import UserProfile100223Navigator from '../features/UserProfile100223/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile100263: { screen: UserProfile100263Navigator },
Tutorial100262: { screen: Tutorial100262Navigator },
NotificationList100234: { screen: NotificationList100234Navigator },
Settings100233: { screen: Settings100233Navigator },
Settings100225: { screen: Settings100225Navigator },
UserProfile100223: { screen: UserProfile100223Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
