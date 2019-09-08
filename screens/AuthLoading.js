import React, {Component} from 'react';
import {View, ActivityIndicator} from 'react-native';
import firebase from 'react-native-firebase';
import {connect} from 'react-redux';
import {login} from '../actions/user';

class AuthLoading extends Component {
    componentDidMount(){
        this.getUser();
    }
    getUser(){
        firebase.auth().onUserChanged((user) =>{
            this.props.login(user);
            this.props.navigation.navigate(user ? 'App' : 'Auth');
        })
    }
    render(){
        return (
            <View>
                <ActivityIndicator/>
            </View>
        )
    }
}

export default connect(()=>({}),{
    login
})(AuthLoading)