import React, {Component} from 'react';
import EventUI from '../../components/events/EventUI';

export default class EventScreen extends Component {
    componentDidMount(){
        this.eventId = this.props.navigation.getParam('eventId');
        console.log(this.eventId);

    }
    openContactsScreen = ()=>{
        this.props.navigation.navigate('Contacts',{
            eventId: this.eventId
        })
    }
    render() {
        return (
            <EventUI openContactsScreen={this.openContactsScreen}/>
        )
    }
}