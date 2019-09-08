import React, {Component} from 'react';
import AddEventUI from '../../components/events/AddEventUI';
import firebase from 'react-native-firebase';
import slugify from '../../lib/slugify';
import { connect } from 'react-redux';

class AddEventScreen extends Component {
    
    componentDidMount() {
        this.db = firebase.firestore();
    }
    add = ({title,date}) => {
        //Guardar en firebase
        //Generar slug en base al titulo
        let slug = slugify(title);
        console.log(slug);
        console.log(this.props.user);
        //Guardar en el doc del usuario
        //this.db.collection('users').doc();
        //Generar slug en base al titulo
        //this.db.
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