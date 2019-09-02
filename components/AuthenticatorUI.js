import React from 'react';

import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

export default (props) => {
    return(
        <View style={styles.container}>
            <Text>Correo electrónico:</Text>
            <TextInput onChangeText= {(text) => props.setEmail(text) }/>
            <Text>Password:</Text>
            <TextInput  onChangeText= {(text) => props.setPassword(text) }/>
            <Button title={props.mainButtonTitle} onPress={() => props.mainAction()}/>
            <Button title={props.secondaryButtonTitle} onPress={() => props.navigationAction()}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF'
    }
});