import React from 'react';
import {View, FlatList} from 'react-native';
import {Text, Button, Title, Paragraph} from 'react-native-paper';
import ContactCard from '../../components/contacts/ContactCard';

export default (props) => {
    return (
        <View>
            <Title>{props.event.title}</Title>
            <Paragraph>{new Date(props.event.date).toLocaleDateString()}</Paragraph>
            <FlatList 
                data={props.contacts}
                renderItem={({item}) => <ContactCard user={item}/>}
            />
            <Button onPress={()=> props.openContactsScreen()}>Agregar Invitados</Button>
        </View>
    )
}