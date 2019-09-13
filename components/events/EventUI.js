import React from 'react';
import {View} from 'react-native';
import {Text, Button} from 'react-native-paper';

export default (props) => {
    return (
        <View>
            <Button onPress={()=> props.openContactsScreen()}>Agregar Invitados</Button>
        </View>
    )
}