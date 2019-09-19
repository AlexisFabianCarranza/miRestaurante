import React, {Component} from 'react';
import AddEventUI from '../../components/events/AddEventUI';
import firebase from 'react-native-firebase';
import slugify from '../../lib/slugify';
import { connect } from 'react-redux';
import {login} from '../../actions/user';

class AddEventScreen extends Component {
    
    componentDidMount() {
        this.db = firebase.firestore();
    }
    add = async ({title,date}) => {
        //Guardar en firebase
        //Generar slug en base al titulo
        let slug = slugify(title);
        //Guardar en el doc del usuario
        await this.db.collection('users').doc(this.props.user.uid)
                .collection('events').doc(slug).set({
            title,
            date
        });
        await this.db.collection('events').doc(slug).set({
            title, 
            date
        });
        this.props.navigation.navigate('Home');
    }
    render(){
        return(
            <AddEventUI 
                add={this.add} 
            />
        )
    }
}

export default connect(({user})=>({user})) (AddEventScreen)