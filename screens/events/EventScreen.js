import React, {Component} from 'react';
import EventUI from '../../components/events/EventUI';

export default class EventScreen extends Component {
    componentDidMount(){
        this.eventID = this.props.navigation.getParam('eventId');
    }
    openContactsScreen = ()=>{
        this.props.navigation.navigate('Contacts',{
            eventID: this.eventID
        })
    }
    render() {
        return (
            <EventUI openContactsScreen={this.openContactsScreen}/>
        )
    }
}