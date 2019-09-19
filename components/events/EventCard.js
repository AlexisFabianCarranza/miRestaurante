import React from 'react';
import {withTheme, Card, Title, Paragraph, Button, IconButton} from 'react-native-paper';
import styles from '../../styles/home.style';

let EventCard = (props) => {
    return(
        <Card style={styles.card}>
            <Card.Content>
                <Title>{props.event.title}</Title>
                <Paragraph>{new Date(props.event.date).toLocaleDateString()}</Paragraph>
            </Card.Content>
            <Card.Actions>
                <Button onPress={()=> {props.openEventScreen(props.event.id)}}>Administrar</Button>
                <IconButton
                    icon='delete'
                    color='blue'
                    style={{
                        position: 'absolute',
                        margin: 6,
                        right: 0,
                        bottom: 90}}
                    onPress={()=> {props.removeEvent(props.event.id)}}
                >Eliminar
                </IconButton>
            </Card.Actions>

        </Card>
    );
}

export default withTheme(EventCard);