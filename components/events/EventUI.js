import React from 'react';
import {View} from 'react-native';
import {Text, Button} from 'react-native-paper';

export default (props) => {
    return (
        <View>
            <Text>Hola anda</Text>
            <Button onPress={()=> props.openContactsScreen()}>Agregar Invitados</Button>
        </View>
    )
}