import React, {Component} from 'react';
import {View} from 'react-native';
import { Title, TextInput, Button, withTheme } from 'react-native-paper';

class AddEventUI extends Component {
    render(){
        return (
            <View>
                <Title>Organiza un intercambio</Title>
                <TextInput 
                    label='Titulo(Ej. Intercambio de la oficina)'
                    value={this.props.getTitle}
                    onChangeText={this.props.setTitle}
                />
                <View>
                    <Button 
                        mode='contained' 
                        color={this.props.theme.colors.accent}
                        onPress={this.props.submit}>Crear Evento
                    </Button>
    
                </View>
            </View>
    
        )
    }
}

export default withTheme(AddEventUI);