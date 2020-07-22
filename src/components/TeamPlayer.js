import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    ImageBackground,
    Image,
    ScrollView,
    StyleSheet} from 'react-native';
import Team from '../models/team';
import Player from '../models/player';

const team = new Team();
const player = new Player();

const teams = [
    {
        id: team.id = 1,
        city: team.city = "Oklahoma",
        teamName: team.teamName = "Thunder",
        conf: team.conf = "west",
        logo: team.logo = require('../assets/i.png'),
        player: [
            {
                id: player.id = 1,
                name: player.name = "Russel Westbrook",
                salary: player.salary = "$23M/Year",
                careerPoints: player.careerPoints = "23,000 Points"
            },
            {
                id: player.id = 2,
                name: player.name = "Paul George",
                salary: player.salary = "$21M/Year",
                careerPoints: player.careerPoints = "20,000 Points"
            },
            {
                id: player.id = 3,
                name: player.name = "Steve Adams",
                salary: player.salary = "$13M/Year",
                careerPoints: player.careerPoints = "8,000 Points"
            }
        ]
    },
    {
        id: team.id = 2,
        city: team.city = "Chicago",
        teamName: team.teamName = "Bulls",
        conf: team.conf = "East",
        logo: team.logo = require('../assets/bulls.jpg'),
        player: [
            {
                id: player.id = 1,
                name: player.name = "Michael Jordan",
                salary: player.salary = "$23M/Year",
                careerPoints: player.careerPoints = "34,000 Points"
            },
            {
                id: player.id = 2,
                name: player.name = "Pippen Scott",
                salary: player.salary = "$21M/Year",
                careerPoints: player.careerPoints = "20,000 Points"
            },
            {
                id: player.id = 3,
                name: player.name = "Steve Kerr",
                salary: player.salary = "$13M/Year",
                careerPoints: player.careerPoints = "8,000 Points"
            }
        ]
    },
    {
        id: team.id = 3,
        city: team.city = "Golden State",
        teamName: team.teamName = "Warriors",
        conf: team.conf = "West",
        logo: team.logo = require('../assets/GSW.png'),
        player: [
            {
                id: player.id = 1,
                name: player.name = "Stephen Curry",
                salary: player.salary = "$47M/Year",
                careerPoints: player.careerPoints = "34,000 Points"
            },
            {
                id: player.id = 2,
                name: player.name = "Draymond Green",
                salary: player.salary = "$21M/Year",
                careerPoints: player.careerPoints = "20,000 Points"
            },
            {
                id: player.id = 3,
                name: player.name = "klay Thompson",
                salary: player.salary = "$13M/Year",
                careerPoints: player.careerPoints = "8,000 Points"
            }
        ]
    },
    {
        id: team.id = 4,
        city: team.city = "Los angeles",
        teamName: team.teamName = "Lakers",
        conf: team.conf = "West",
        logo: team.logo = require('../assets/lakers.png'),
        player: [
            {
                id: player.id = 1,
                name: player.name = "Lebron James",
                salary: player.salary = "$47M/Year",
                careerPoints: player.careerPoints = "34,000 Points"
            },
            {
                id: player.id = 2,
                name: player.name = "Dwight howard",
                salary: player.salary = "$21M/Year",
                careerPoints: player.careerPoints = "20,000 Points"
            },
            {
                id: player.id = 3,
                name: player.name = "Anthony Davis",
                salary: player.salary = "$13M/Year",
                careerPoints: player.careerPoints = "8,000 Points"
            }
        ]
    },
    {
        id: team.id = 5,
        city: team.city = "Milwaukee",
        teamName: team.teamName = "Bucks",
        conf: team.conf = "East",
        logo: team.logo = require('../assets/bucks.png'),
        player: [
            {
                id: player.id = 1,
                name: player.name = "Giannis Anteto...",
                salary: player.salary = "$47M/Year",
                careerPoints: player.careerPoints = "34,000 Points"
            },
            {
                id: player.id = 2,
                name: player.name = "Kyrie Kuxma",
                salary: player.salary = "$21M/Year",
                careerPoints: player.careerPoints = "20,000 Points"
            },
            {
                id: player.id = 3,
                name: player.name = "Manu Ginobilli",
                salary: player.salary = "$13M/Year",
                careerPoints: player.careerPoints = "8,000 Points"
            }
        ]
    },
    {
        id: team.id = 6,
        city: team.city = "Los angeles",
        teamName: team.teamName = "Clippers",
        conf: team.conf = "West",
        logo: team.logo = require('../assets/clippers.png'),
        player: [
            {
                id: player.id = 1,
                name: player.name = "Isaiah Thomas",
                salary: player.salary = "$47M/Year",
                careerPoints: player.careerPoints = "34,000 Points"
            },
            {
                id: player.id = 2,
                name: player.name = "Carl Malone",
                salary: player.salary = "$21M/Year",
                careerPoints: player.careerPoints = "20,000 Points"
            },
            {
                id: player.id = 3,
                name: player.name = "Reggie Millers",
                salary: player.salary = "$13M/Year",
                careerPoints: player.careerPoints = "8,000 Points"
            }
        ]
    },
    {
        id: team.id = 7,
        city: team.city = "Boston",
        teamName: team.teamName = "Celtics",
        conf: team.conf = "East",
        logo: team.logo = require('../assets/celtics.jpg'),
        player: [
            {
                id: player.id = 1,
                name: player.name = "Aaron Goldon",
                salary: player.salary = "$47M/Year",
                careerPoints: player.careerPoints = "34,000 Points"
            },
            {
                id: player.id = 2,
                name: player.name = "Kyrie Irving",
                salary: player.salary = "$21M/Year",
                careerPoints: player.careerPoints = "20,000 Points"
            },
            {
                id: player.id = 3,
                name: player.name = "Kemba walker",
                salary: player.salary = "$13M/Year",
                careerPoints: player.careerPoints = "8,000 Points"
            }
        ]
    }
]

class TeamPlayer extends Component{
    render(){
        return(
            <View style={styles.menuContainer}>
            <FlatList 
                                
               keyExtractor={(item) => item.id.toString() }
               data={teams}
               renderItem={({item}) => (
                   <ImageBackground
                       style={styles.image}
                       source={item.logo}
                   >
                   </ImageBackground>
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

export default TeamPlayer;