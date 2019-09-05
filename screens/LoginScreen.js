import React, {Component} from 'react';

import AuthenticatorUI from '../components/AuthenticatorUI';
import firebase from 'react-native-firebase';
import { showMessage } from 'react-native-messages';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    setEmail = (email) => {
        this.setState({
            email: email
        })
    }

    setPassword = (password) => {
        this.setState({
            password: password
        })
    }

    /*login = () =>{
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(response => {
                let user = response.user;
                console.log(user); 
            }).catch(err => {
                console.log(err);
            })
    }*/
    login = async () => {
        if (this.state.email && this.state.password){
            try {
                let response = await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
                let {user} = response;
                console.log(user);
            }catch(err){
                showMessage('La contraseña o el usuario es invalido');
            } 
        }else {
            showMessage('Usuario o contraseña no ingresados');
        }
    }
    render(){
        return(
            <AuthenticatorUI 
                setPassword={this.setPassword} 
                setEmail={this.setEmail} 
                mainAction={this.login}
                mainButtonTitle={'Iniciar Sesion'}
                secondaryButtonTitle='No tengo cuenta'
                mainTitle='Inicio de Sesión'
                navigationAction={()=>{
                    this.props.navigation.navigate('SignUp')
                }}
                email={this.state.email}
                pass={this.state.password} 
            />
        );
    }
}