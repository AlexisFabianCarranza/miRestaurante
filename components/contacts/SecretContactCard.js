import React,{Component, Fragment} from 'react';
import {View, Image} from 'react-native';
import {withTheme, Card, Paragraph, IconButton, Button} from 'react-native-paper';
import styles from '../../styles/home.style';

class SecretContactCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            vissibleFriend: false
        }
    }
    showFriend = () => {
        this.setState({vissibleFriend: true});
        setTimeout(() => {
            this.setState({vissibleFriend: false})
        },5000);
    }
    
    render () {
        let props = this.props;
        let avatar = (!props.user.avatar || props.user.avatar.length == 0) ? require('../../imgs/cat.png') : {uri: props.user.avatar };
        let avatarFriend = (!props.user.friend.avatar || props.user.avatar.friend.length == 0) ? require('../../imgs/cat.png') : {uri: props.user.friend.avatar };
        let avatarFriendHidden = this.state.vissibleFriend ? avatarFriend : require('../../imgs/cat_secret.png');
        return (     
            <Card style={styles.card}>
                <View style={[styles.row]}>
                <View >
                    <Card.Content style={{alignItems: 'center'}}>
                        <Image 
                        source={avatar} style={{width: 70, height:70}} 
                        />
                        <Paragraph>{props.user.name}</Paragraph>
                    </Card.Content>
                </View>
                <View>
                    <Image source={require('../../imgs/regalo.png')} style={{width:70,height:70}} />
                </View>
                <View >
                    <Card.Content style={{alignItems: 'center'}}>
                        <Image 
                            source={avatarFriendHidden}
                            style={{width: 70, height:70}}  
                        />
                        {
                            this.state.vissibleFriend ?
                            <Fragment>
                                <Paragraph>{props.user.friend.name}</Paragraph>
                                <Paragraph style={[this.props.theme.fonts.light,{fontSize:12}]}>Tienes 5 segundos para verlo</Paragraph>
                            </Fragment>:
                            <IconButton onPress={this.showFriend} icon='visibility-off'/>
                        }
                    </Card.Content>
                </View>
                </View>
                <Card.Actions style={{backgroundColor: '#eee', alignItems:'center', justifyContent:'center'}}>
                    <Button onPress={this.showFriend}>Ver amigo secreto</Button>
                </Card.Actions>
            </Card>
        );
    }
    
}

export default withTheme(SecretContactCard);