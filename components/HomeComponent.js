import React, {Component} from 'react';
import {View , Text} from 'react-native';
import {withTheme , FAB} from 'react-native-paper';
import styles from '../styles/home.style';
import { FlatList } from 'react-native-gesture-handler';
import Empty from './utilities/Empty';
import { showMessage } from 'react-native-messages';
import EventCard from './events/EventCard';
/*
    <FlatList 
                    data={this.props.events}
                    ListEmptyComponent={Empty}
                    renderItem={ ({item}) => <Text>{item.title}</Text>}
    />
*/
class HomeComponent extends Component{
    componentDidMount(){
        this.props.setNavigationColor(this.props.theme.colors.primary);
        showMessage('PRUEBA' + this.props.events);
    }
    render() {
        return(
            <View style={styles.container}>
                <FlatList
                    data={this.props.events}
                    ListEmptyComponent={Empty}
                    style={{width:'100%'}}
                    renderItem={({ item }) => <EventCard key={item.id} event={item}></EventCard>}
                />
                <FAB icon='add' color='white'
                    style={{backgroundColor: this.props.theme.colors.primary, ...styles.fab}}
                    onPress={this.props.goToAddEvent}>
                </FAB>
            </View>
        );
    }
}

export default withTheme(HomeComponent);