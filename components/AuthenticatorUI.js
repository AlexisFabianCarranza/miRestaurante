import React from 'react';

import {View, TouchableHighlight} from 'react-native';
import { TextInput, Button, Title, withTheme } from 'react-native-paper';
import styles from '../styles/login.style';

let AuthenticatorUI = (props) => {
    //console.log(props.theme);
    return(
        <View style={styles.container}>
            <Title style={{fontFamily: props.theme.fonts.medium}}>{props.mainTitle}</Title>
            <TextInput 
                style={styles.formControl}
                label='Correo electronico'
                onChangeText= {(text) => props.setEmail(text) }
            />
            <TextInput
                style={styles.formControl}
                label='Contraseña'  
                onChangeText= {(text) => props.setPassword(text) }
            />
            <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    ...styles.formControl
                }}>
                <TouchableHighlight>
                    <Button 
                        onPress={() => props.mainAction()} mode='contained'
                        color={props.theme.colors.accent}
                    >
                        {props.mainButtonTitle}
                    </Button>
                </TouchableHighlight>
                <TouchableHighlight>
                    <Button onPress={() => props.navigationAction()} mode='contained'>
                        {props.secondaryButtonTitle}
                    </Button>
                </TouchableHighlight>
            </View>
            
        </View>
    );
}

export default withTheme(AuthenticatorUI);