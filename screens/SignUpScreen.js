import React, {Component} from 'react';

import AuthenticatorUI from '../components/AuthenticatorUI';
import firebase from 'react-native-firebase';
import { showMessage } from 'react-native-messages';
import {connect} from 'react-redux';
import {login} from '../actions/user';

class SignUpScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    componentDidMount(){
        console.log(this.props.user);
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

    /*createUser= () =>{
        //console.log(this.state);
        firebase.auth().createUserWithEmailAndPassword(this.state.email , this.state.password)
            .then(response => {
                let user = response.user;
                console.log(user);
            })
    }*/
    createUser = async () => {
        if (this.state.email && this.state.password){
            try {
                let response = await firebase.auth().createUserWithEmailAndPassword(this.state.email , this.state.password);
                let {user} = response; //destructuring objetcts
                this.props.login(user);
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
                mainAction={this.createUser}
                mainButtonTitle='Crear Usuario'
                secondaryButtonTitle='Ya tengo cuenta'
                mainTitle='Creación de Usuario'
                navigationAction={()=>{
                    this.props.navigation.navigate('Login')
                }}
                email={this.state.email}
                pass={this.state.password} 
            />
        );
    }
}

export default connect(
    (state) => ({user: state.user}),
    
)(SignUpScreen);