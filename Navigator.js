import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'; 
import SignUpScreen from './screens/SignUpScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import AuthLoading from './screens/AuthLoading';
import AddEventScreen from './screens/events/AddEventScreen';
import EventScreen from './screens/events/EventScreen';
import ContactsScreen from './screens/contacts/ContactsScreen';

const AuthNavigator = createStackNavigator({
    SignUp: SignUpScreen,
    Login: LoginScreen
},{
    initialRouteName: 'Login'
});

const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    AddEvent: AddEventScreen,
    Event: EventScreen,
    Contacts: ContactsScreen
},{
    defaultNavigationOptions: ({navigation}) => {
        return {
            title: 'Intercambios'
        }
    },
    initialRouteName: 'Home'
});

export default createAppContainer(
    createSwitchNavigator({
        Auth: AuthNavigator,
        App: AppNavigator,
        AuthLoading: AuthLoading
    },{
        initialRouteName: 'AuthLoading'
    })
);