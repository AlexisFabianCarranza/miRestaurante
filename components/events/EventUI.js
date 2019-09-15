import React from 'react';
import {View, FlatList} from 'react-native';
import {Text, Button, Title, Paragraph} from 'react-native-paper';
import ContactCard from '../../components/contacts/ContactCard';
import SecretContactCard from '../contacts/SecretContactCard';

export default (props) => {
    return (
        <View style={{flex: 1, alignItems:'center'}}>
            <View style={{alignItems:'center'}}>
                <Title>{props.event.title}</Title>
                <Paragraph>{new Date(props.event.date).toLocaleDateString()}</Paragraph>
                <Button style={{width: 220, height: 40}}
                    onPress={props.shuffleUsers}
                    mode='contained' 
                    disabled={props.contacts.length<3}
                >
                    Generar parejas
                </Button>
            </View>
            <FlatList 
                data={props.contacts}
                renderItem={({item}) => <SecretContactCard user={item}/>}
            />
            <Button onPress={()=> props.openContactsScreen()}>Agregar Invitados</Button>
        </View>
    )
}