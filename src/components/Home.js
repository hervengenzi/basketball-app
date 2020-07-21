import React, { Component } from 'react';
import {View, Text, StyleSheet,TouchableOpacity, FlatList} from 'react-native';
import Team from '../models/team';

const team = new Team();

const teams = [
    {
        id: team.id = 1,
        city: team.city = "Oklahoma",
        teamName: team.teamName = "Thunder",
        conf: team.conf = "East"
    },
    {
        id: team.id = 2,
        city: team.city = "Golden State",
        teamName: team.teamName = "Warriors",
        conf: team.conf = "West"
    },
    {
        id: team.id = 3,
        city: team.city = "Los angeles",
        teamName: team.teamName = "Lakers",
        conf: team.conf = "West"
    },
    {
        id: team.id = 4,
        city: team.city = "Milwaukee",
        teamName: team.teamName = "Bucks",
        conf: team.conf = "East"
    },
    {
        id: team.id = 5,
        city: team.city = "Los angeles",
        teamName: team.teamName = "Clippers",
        conf: team.conf = "West"
    },
    {
        id: team.id = 6,
        city: team.city = "Chicago",
        teamName: team.teamName = "Bulls",
        conf: team.conf = "East"
    }
];
class Home extends Component{
    render(){
        return(
            <View style={styles.menuContainer}>
            <FlatList 
                                
               keyExtractor={(item) => item.id.toString() }
               data={teams}
               renderItem={({item}) => (
               <Text>{item.teamName}</Text>
               )}
           />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    menuTitle: {
        flex: 1,
        color: 'white'
    },
});

export default Home;