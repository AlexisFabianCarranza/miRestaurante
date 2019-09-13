import React, {Component} from 'react'; 
import {PermissionsAndroid , View} from 'react-native';
import { Text } from 'react-native-paper';

export default class ContactsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasPermission: false
        }
    }
    componentDidMount(){
        this.requestPermission();
    }
    componentDidUpdate(){

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
            }
            this.props.navigation.goBack();
        }
        catch(err) {
            this.props.navigation.goBack();
        }
        
        //Si nos dieron permiso, cambiar state
        //Si cambiamos state , consultar contactos
    }
    queryContacts = () => {
        console.log('Nos dieron los contactos');
    }
    render(){
        return(
            <View><Text>Dando permisos</Text></View>
        );
    }
}