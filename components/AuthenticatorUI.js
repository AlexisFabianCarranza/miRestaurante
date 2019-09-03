import React from 'react';

import {View, Text, TextInput, Button, StyleSheet, TouchableHighlight} from 'react-native';

export default (props) => {
    return(
        <View style={styles.container}>
            <Text>Correo electrónico:</Text>
            <TextInput onChangeText= {(text) => props.setEmail(text) }/>
            <Text>Password:</Text>
            <TextInput  onChangeText= {(text) => props.setPassword(text) }/>
            <View style={styles.buttons}>
                <TouchableHighlight>
                    <Button title={props.mainButtonTitle} onPress={() => props.mainAction()}/>
                </TouchableHighlight>
                <Button title={props.secondaryButtonTitle} onPress={() => props.navigationAction()}/>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'center',
      backgroundColor: '#F5FCFF',
      flexDirection: 'column'
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
});