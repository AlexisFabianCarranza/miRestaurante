import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'; 
import SignUpScreen from './screens/SignUpScreen';
import LoginScreen from './screens/LoginScreen';

const AuthNavigator = createStackNavigator({
    SignUp: SignUpScreen,
    Login: LoginScreen
},{
    initialRouteName: "SignUp"
});

export default createAppContainer(
    AuthNavigator
);