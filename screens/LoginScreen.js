import React, {Component} from 'react';

import AuthenticatorUI from '../components/AuthenticatorUI';
import firebase from 'react-native-firebase';


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
        try {
            let response = await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
            let {user} = response;
            console.log(user);
        }catch(err){
            console.log(err);
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
                navigationAction={()=>{
                    this.props.navigation.navigate('SignUp')
                }}
            />
        );
    }
}