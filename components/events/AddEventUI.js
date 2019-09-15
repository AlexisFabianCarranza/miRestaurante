import React, {Component} from 'react';
import {View} from 'react-native';
import { Title, TextInput, Button, withTheme, Paragraph } from 'react-native-paper';
import DatePicker from 'react-native-datepicker';
import styles from '../../styles/event.style';

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
            <View style={styles.container}>
                <View style={{alignItems: 'center'}}>
                    <Title style={styles.title}>Organiza un intercambio</Title>
                    <TextInput 
                       style={styles.textInput}
                       label='Titulo(Ej. Intercambio de la oficina)'
                       value={this.state.title}
                       onChangeText={(title) => {this.setState({title})}}
                   />
                   <View style={{flexDirection:'row', marginTop: 20}}>
                       <Paragraph >Fecha:</Paragraph>
                       <DatePicker
                           style={{width:'60%'}}
                           date={this.state.date}
                           onDateChange={(date)=> this.setState({date: date})}
                        />
                   </View>
                   <View >
                    <Button style={styles.button}
                        mode='contained' 
                        color={this.props.theme.colors.accent}
                        onPress={this.submit}>Crear Evento
                    </Button>
                    </View>
                </View>
                
            </View>
    
        )
    }
}

export default withTheme(AddEventUI);