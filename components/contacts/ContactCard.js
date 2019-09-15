import React , {Component} from 'react';
import {Image, View} from 'react-native';
import { Card, Title, IconButton } from 'react-native-paper';
import styles from '../../styles/home.style';

export default class ContactCard extends Component {
    render(){
        console.log(this.props.user.name);
        let props = this.props;
        return(
            <Card style={styles.card}> 
                <Card.Content style={{flexDirection:'row'}}>
                    <Image style={{width:40, height:40}} source={{uri: props.user.avatar}}/>
                    <View style={{flex:1, marginLeft:10}}>
                        <Title>{props.user.name}</Title>
                    </View>
                    {props.addContactToEvent && <IconButton 
                        icon='person-add'
                        onPress={() => props.addContactToEvent(props.user)}
                    />}
                </Card.Content>
            </Card>
        )
    }
    
}