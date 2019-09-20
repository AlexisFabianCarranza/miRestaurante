import React, {Component} from 'react';
import {View , Text} from 'react-native';
import {withTheme , FAB} from 'react-native-paper';
import styles from '../styles/home.style';
import { FlatList } from 'react-native-gesture-handler';
import Empty from './utilities/Empty';
import { showMessage } from 'react-native-messages';
import EventCard from './events/EventCard';

class HomeComponent extends Component{
    componentDidMount(){
        this.props.setNavigationColor(this.props.theme.colors.primary);
    }
    render() {
        return(
            <View style={styles.container}>
                <FlatList
                    data={this.props.events}
                    ListEmptyComponent={Empty}
                    style={{width:'100%'}}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <EventCard 
                                                    removeEvent={this.props.removeEvent}
                                                    openEventScreen={this.props.openEventScreen} 
                                                    key={item.id} 
                                                    event={item}>
                                               </EventCard>}
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