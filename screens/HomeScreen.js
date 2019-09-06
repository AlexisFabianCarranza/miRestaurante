import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { IconButton } from 'react-native-paper';
import HomeComponent from '../components/HomeComponent';
import firebase from 'react-native-firebase';

export default class  HomeScreen extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerStyle: {
                backgroundColor: navigation.getParam('backgroundColor') || '#222'
            },
            headerTitleStyle: {
                color: 'white'
            },
            headerRight: (
                <IconButton 
                    icon='power-settings-new'
                    color='white'
                    onPress={
                        () => {
                            firebase.auth().signOut(); 
                            navigation.navigate('Auth');
                        }
                    }
                />
            )
        }
    }

    setNavigationColor = (color) => {
        this.props.navigation.setParams({
            backgroundColor: color
        })
    }
    goToAddEvent = () => {
        this.props.navigation.navigate('AddEvent');
    }
    render(){
        return(
            <HomeComponent 
                setNavigationColor={this.setNavigationColor}
                goToAddEvent={this.goToAddEvent}
            />
        )
    }
}