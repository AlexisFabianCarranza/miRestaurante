import React, {Component} from 'react';
import AddEventUI from '../../components/events/AddEventUI';
import firebase from 'react-native-firebase';
import slugify from '../../lib/slugify';

export default class AddEventScreen extends Component {
    constructor() {
        super(props);
        this.db = firebase.firestore();
        this.state = {
            title: '',
            date: (new Date()).toJSON
        }
    }

    getTitle = () => {
        return this.state.title;
    }

    setTitle = (title) => {
        this.setState({
            title: title
        })
    }

    add = ({title,date}) => {
        //Guardar en firebase
        //Generar slug en base al titulo
        let slug = slugify(title);
        //Guardar en el doc del usuario
        this.db.collection('users').doc()
        //Generar slug en base al titulo
        this.db.
    }

    render(){
        return(
            <AddEventUI 
                getTitle={this.getTitle}
                setTitle={this.setTitle}
                submit={this.add} 
            />
        )
    }
}