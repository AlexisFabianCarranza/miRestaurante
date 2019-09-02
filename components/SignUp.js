import React from 'react';

import {View, Text, TextInput, Button} from 'react-native';

export default (props) => {
    return(
        <View>
            <Text>Correo electrónico:</Text>
            <TextInput onChangeText= {(text) => props.setEmail(text) }/>
            <Text>Password:</Text>
            <TextInput  onChangeText= {(text) => props.setPassword(text) }/>
            <Button title='Guardar usuario' onPress={() => props.createUser()}/>
        </View>
    );
}