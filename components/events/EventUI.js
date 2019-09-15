import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import {Button, Title, Paragraph} from 'react-native-paper';
import ContactCard from '../contacts/ContactCard';
import SecretContactCard from '../contacts/SecretContactCard';
import Empty from '../../components/utilities/Empty';

class EventUI extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let props = this.props;
        return (
            <View style={{flex: 1,backgroundColor:'#f5f5f5'}}>
                <View style={{alignItems:'center'}}>
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
                </View>
               
                <FlatList 
                    ListEmptyComponent={Empty}
                    data={props.contacts}
                    renderItem={({item}) =>{
                        if (item.friend){
                            return <SecretContactCard user={item}/>
                        }else {
                            return <ContactCard user={item}/>
                        }
                    }}
                />
                <Button onPress={()=> props.openContactsScreen()}>Agregar Invitados</Button>
            </View>
            
        )
    }
}

export default EventUI;