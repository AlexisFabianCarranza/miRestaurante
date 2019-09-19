import React, {Component} from 'react'; 
import {PermissionsAndroid , View} from 'react-native';
import Contacts from 'react-native-contacts';
import ContactUI from '../../components/contacts/ContactUI';
import firebase from 'react-native-firebase';
import { showMessage } from 'react-native-messages';

export default class ContactsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasPermission: false,
            contacts: []
        }
    }
    componentDidMount(){
        this.requestPermission();
        this.eventId =  this.props.navigation.getParam('eventId');
        this.db = firebase.firestore(); 
    }
    addContactToEvent= async (contact) =>{
        let prom = await this.db.collection('events').doc(this.eventId).collection('contacts')
                    .add(contact);
        showMessage('Se ha agregado el contacto',{
            duration:3000,
            slideAnimationOffset: 10,
            showAnimationDuration: 600,
            hideAnimationDuration: 600,
        });
    }
    requestPermission = async () => {
        //Solicitar permiso
        try {
            let granted = await PermissionsAndroid
            .request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
                title: 'Permiso para leer tu libreta de mensajes',
                message: 'Tu libreta sera usada para que puedas invitar a tus amigos'
            });
            if (granted == PermissionsAndroid.RESULTS.GRANTED) {
                this.setState({hasPermission: true});
                this.queryContacts();
                return;
            }
            this.props.navigation.goBack();
        }
        catch(err) {
            this.props.navigation.goBack();
        }
        
        //Si nos dieron permiso, cambiar state
        //Si cambiamos state , consultar contactos
    }
    queryContacts = (query='') => {
        Contacts.getContactsMatchingString(query,(err,contactsFromPhone) => {
            if (err)
                console.log(err);
            else{
                let contacts = contactsFromPhone.map((contact) => ({
                    name: contact.givenName, 
                    avatar: contact.thumbnailPath,
                    id: contact.recordID
                }));
                this.setState({contacts});
                console.log(contacts);  
            }
        })
    }
    render(){
        return(
            <ContactUI 
                addContactToEvent={this.addContactToEvent} 
                queryContacts={this.queryContacts} 
                contacts={this.state.contacts}
            />
        );
    }
}