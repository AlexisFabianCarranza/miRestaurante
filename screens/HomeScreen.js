import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { IconButton } from 'react-native-paper';
import HomeComponent from '../components/HomeComponent';
import firebase from 'react-native-firebase';
import {connect} from 'react-redux';
import { showMessage } from 'react-native-messages';
import { addEvent } from '../actions/events';


class  HomeScreen extends Component {
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

    componentDidMount() {
        this.db = firebase.firestore();
        this.readMyEvents();  
    }

    readMyEvents = async() => {
        let ref = await this.db.collection('users').doc(this.props.user.uid)
                        .collection('events').get();
        let events = ref.docs.forEach(docRef =>{
            this.props.addEvent(docRef.data());
        });
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
                events={this.props.events}
                goToAddEvent={this.goToAddEvent}
            />
        )
    }
}

export default connect((state) => {
    return { user: state.user, events: state.events}
}, {
    addEvent
})(HomeScreen);