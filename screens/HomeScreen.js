import React, {Component} from 'react';
import { IconButton, Button } from 'react-native-paper';
import HomeComponent from '../components/HomeComponent';
import firebase from 'react-native-firebase';
import {connect} from 'react-redux';
import { showMessage } from 'react-native-messages';
import { addEvent , removeEvent , clearEvents} from '../actions/events';
import { logout } from '../actions/user';

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
                        .collection('events');
        ref.onSnapshot((querySnapshot)=>{
            querySnapshot.docChanges.forEach((change)=>{
                if(change.type == 'added'){
                    this.props.addEvent({
                        ...change.doc.data(),
                        id: change.doc.id
                        });
                }    
                if(change.type == 'removed')
                    this.props.removeEvent(change.doc);
            });
        }) 
    }
    setNavigationColor = (color) => {
        this.props.navigation.setParams({
            backgroundColor: color
        })
    }
    goToAddEvent = () => {
        this.props.navigation.navigate('AddEvent');
    }
    removeEvent = (event) => {
        this.props.removeEvent(event);
        let deleteUserEvent = this.db.collection('users').doc(this.props.user.uid)
                            .collection('events').doc(event).delete();
        let deleteEvent = this.db.collection('events').doc(event).delete();
        showMessage('Se ha eliminado el evento ',{
            duration:3000,
            slideAnimationOffset: 10,
            showAnimationDuration: 600,
            hideAnimationDuration: 600,
        });
    }
    openEventScreen = (id) => {
        this.props.navigation.navigate('Event',{
            eventId: id
        })
    }
    render(){
        console.log(this.props.events);
        return(
            <HomeComponent 
                removeEvent={this.removeEvent} 
                setNavigationColor={this.setNavigationColor}
                events={this.props.events}
                goToAddEvent={this.goToAddEvent}
                openEventScreen={this.openEventScreen}
            />
        )
    }
}


export default connect((state) => {
    return { user: state.user, events: state.events}
}, {
    addEvent,
    removeEvent,
    logout
})(HomeScreen);