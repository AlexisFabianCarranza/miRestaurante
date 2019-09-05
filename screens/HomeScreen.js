import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { IconButton } from 'react-native-paper';
import HomeComponent from '../components/HomeComponent';

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
                />
            )
        }
    }

    setNavigationColor = (color) => {
        this.props.navigation.setParams({
            backgroundColor: color
        })
    }
    render(){
        return(
            <View>
                <HomeComponent setNavigationColor={this.setNavigationColor}/>
            </View>
        )
    }
}