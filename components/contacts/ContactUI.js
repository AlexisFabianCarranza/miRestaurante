import React,{Component} from 'react';
import {View , FlatList} from 'react-native';
import styles from '../../styles/home.style';
import Empty from '../../components/utilities/Empty';
import ContactCard from './ContactCard';
import { TextInput } from 'react-native-paper';

class ContactUI extends Component{
    constructor(props){
        super(props);
        this.state= {
            query: ''
        }
    }
    updateQuery= (text) => {
        this.setState({
            query: text
        });
        this.props.queryContacts(text);

    } 
    render(){
        return(
            <View style={styles.container}>
                <TextInput 
                    label='Buscar un contacto...'
                    value={this.state.query}
                    onChangeText={this.updateQuery}
                />
                <FlatList
                    ListEmptyComponent={Empty}
                    data={this.props.contacts}
                    renderItem={({item})=> <ContactCard addContactToEvent={this.props.addContactToEvent} user={item}/>}
                />
            </View>
        )
    }
}  

export default ContactUI;