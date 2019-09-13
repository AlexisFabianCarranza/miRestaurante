import React from 'react';
import {View , FlatList} from 'react-native';
import styles from '../../styles/home.style';
import Empty from '../../components/utilities/Empty';
import ContactCard from './ContactCard';

export default (props) => {
    return(
        <View style={styles.container}>
            <FlatList
                ListEmptyComponent={Empty}
                data={props.contacts}
                renderItem={({item})=> <ContactCard addContactToEvent={props.addContactToEvent} user={item}/>}
            />
        </View>
    )
}  