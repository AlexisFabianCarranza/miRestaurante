import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'; 
import SignUpScreen from './screens/SignUpScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import AuthLoading from './screens/AuthLoading';

const AuthNavigator = createStackNavigator({
    SignUp: SignUpScreen,
    Login: LoginScreen
},{
    initialRouteName: 'SignUp'
});

const AppNavigator = createStackNavigator({
    Home: HomeScreen
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