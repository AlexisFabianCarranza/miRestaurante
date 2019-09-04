import React, {Component} from 'react';

import AuthenticatorUI from '../components/AuthenticatorUI';
import firebase from 'react-native-firebase';

export default class SignUpScreen extends Component {
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

    /*createUser= () =>{
        //console.log(this.state);
        firebase.auth().createUserWithEmailAndPassword(this.state.email , this.state.password)
            .then(response => {
                let user = response.user;
                console.log(user);
            })
    }*/
    createUser = async () => {
        try {
            let response = await firebase.auth().createUserWithEmailAndPassword(this.state.email , this.state.password);
            let {user} = response; //destructuring objetcts
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
                mainAction={this.createUser}
                mainButtonTitle='Crear Usuario'
                secondaryButtonTitle='Ya tengo cuenta'
                mainTitle='Creación de Usuario'
                navigationAction={()=>{
                    this.props.navigation.navigate('Login')
                }}
            />
        );
    }
}