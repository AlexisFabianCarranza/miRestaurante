import React , {Component} from 'react';
import {Image, View} from 'react-native';
import { Card, Title, IconButton } from 'react-native-paper';
import styles from '../../styles/home.style';

export default class ContactCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false
        };
    }
    render(){
        console.log(this.props.user.name);
        let props = this.props;
        return(
            <Card style={(this.state.selected) ? {...styles.card, backgroundColor:'green'} : styles.card}> 
                <Card.Content style={{flexDirection:'row'}}>
                    <Image style={{width:40, height:40}} source={{uri: props.user.avatar}}/>
                    <View style={{flex:1, marginLeft:10}}>
                        <Title>{props.user.name}</Title>
                    </View>
                    {props.addContactToEvent && <IconButton 
                        style={{flex: 1,width: 40,height:40}}
                        icon='person-add'
                        onPress={() => {
                            this.setState({
                                selected: true
                            });
                            this.props.addContactToEvent(props.user);
                        }}
                    />}
                </Card.Content>
            </Card>
        )
    }
    
}