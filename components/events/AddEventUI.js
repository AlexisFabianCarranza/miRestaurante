import React, {Component} from 'react';
import {View} from 'react-native';
import { Title, TextInput, Button, withTheme, Paragraph } from 'react-native-paper';
import DatePicker from 'react-native-datepicker';

class AddEventUI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            date: (new Date()).toJSON()
        } 
    }
    submit = () => {
        this.props.add(this.state);
    }
    render(){
        return (
            <View>
                <Title>Organiza un intercambio</Title>
                <TextInput 
                    label='Titulo(Ej. Intercambio de la oficina)'
                    value={this.state.title}
                    onChangeText={(title) => {this.setState({title})}}
                />
                <View>
                    <Paragraph>Fecha:</Paragraph>
                    <DatePicker
                        style={{width:'100%'}}
                        date={new Date(this.state.date).toLocaleDateString()}
                        onDateChange={(date)=> this.setState({date: date})}
                    />
                </View>
                <View>
                    <Button 
                        mode='contained' 
                        color={this.props.theme.colors.accent}
                        onPress={this.submit}>Crear Evento
                    </Button>
    
                </View>
            </View>
    
        )
    }
}

export default withTheme(AddEventUI);