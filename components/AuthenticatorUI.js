import React from 'react';

import {View, Text, TextInput, Button, StyleSheet, TouchableHighlight} from 'react-native';

export default (props) => {
    return(
        <View style={styles.container}>
            <Text>Correo electrónico:</Text>
            <TextInput onChangeText= {(text) => props.setEmail(text) }/>
            <Text>Password:</Text>
            <TextInput  onChangeText= {(text) => props.setPassword(text) }/>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'flex-start'
            }}>
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
      alignItems: 'center',
      backgroundColor: '#F5FCFF'
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'red'
    },
});