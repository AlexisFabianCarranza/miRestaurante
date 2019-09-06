import React, {Component} from 'react';
import {View , Text} from 'react-native';
import {withTheme , FAB} from 'react-native-paper';
import styles from '../styles/home.style';
//////style={{flex: 1}}>
class HomeComponent extends Component{
    componentDidMount(){
        this.props.setNavigationColor(this.props.theme.colors.primary);
    }
    render() {
        return(
            <View style={{flex: 1}}>
                <Text>
                    Bienvenidos...
                </Text>
                <FAB icon='add' color='white'
                    style={{backgroundColor: this.props.theme.colors.primary, ...styles.fab}}
                    onPress={this.props.goToAddEvent}>
                </FAB>
            </View>
        );
    }
}

export default withTheme(HomeComponent);