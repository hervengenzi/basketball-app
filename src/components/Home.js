import React, { Component } from 'react';
import {View, Text, StyleSheet,TouchableOpacity, ImageBackground, FlatList} from 'react-native';
import Team from '../models/team';

const team = new Team();

const teams = [
    {
        id: team.id = 1,
        city: team.city = "Oklahoma",
        teamName: team.teamName = "Thunder",
        conf: team.conf = "East",
        logo: team.logo = require('../assets/i.png')
    },
    {
        id: team.id = 2,
        city: team.city = "Golden State",
        teamName: team.teamName = "Warriors",
        conf: team.conf = "West",
        logo: team.logo = require('../assets/GSW.png')
    },
    {
        id: team.id = 3,
        city: team.city = "Los angeles",
        teamName: team.teamName = "Lakers",
        conf: team.conf = "West",
        logo: team.logo = require('../assets/lakers.png')
    },
    {
        id: team.id = 4,
        city: team.city = "Milwaukee",
        teamName: team.teamName = "Bucks",
        conf: team.conf = "East",
        logo: team.logo = require('../assets/bucks.png')
    },
    {
        id: team.id = 5,
        city: team.city = "Los angeles",
        teamName: team.teamName = "Clippers",
        conf: team.conf = "West",
        logo: team.logo = require('../assets/clippers.png')
    },
    {
        id: team.id = 6,
        city: team.city = "Chicago",
        teamName: team.teamName = "Bulls",
        conf: team.conf = "East",
        logo: team.logo = require('../assets/bulls.jpg')
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
                   <TouchableOpacity key={item.id} onPress={""}>
                   <ImageBackground
                       style={styles.image}
                       source={item.logo}
                   >
                   </ImageBackground>
                   </TouchableOpacity>
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
    image: {
        flex: 1,
        height: 100,
        width: 200,
        marginLeft: 7,
        marginTop: 30,
    resizeMode: "cover",
    justifyContent: "center"
    },
    teamText: {
        flex: 1,
        margin: 0,
        marginLeft: 0
    }
});

export default Home;