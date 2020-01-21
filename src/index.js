import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './components/Home';
import Customers from './components/Customers';
import Contact, {navigationOptions} from './components/Contact';
import Company, {navigationOptionsCompany} from './components/Company';
import Services, {navigationOptionsServices} from './components/Services';

const Navigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  Customers: {
    screen: Customers,
  },
  Contact: {
    screen: Contact,
    navigationOptions: navigationOptions,
  },
  Company: {
    screen: Company,
    navigationOptions: navigationOptionsCompany,
  },
  Services: {
    screen: Services,
    navigationOptions: navigationOptionsServices,
  },
});

const Routes = createAppContainer(Navigator);

export default Routes;
