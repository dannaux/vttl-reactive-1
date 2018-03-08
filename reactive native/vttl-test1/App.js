import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import { Button, ImageBackground, Image, Text, View } from 'react-native';
import PreferredPlayersScreen from './screens/PreferredPlayersScreen';
import HomeScreen from './screens/Homescreen';
import TrainerListScreen from './screens/TrainerListScreen';
import PlayerScreen from './screens/PlayerScreen';

const RootStack = StackNavigator(
  {
    Home: { screen: HomeScreen },
    PreferredPlayers: { screen: PreferredPlayersScreen },
    Player: { screen: PlayerScreen },
    TrainerList: { screen: TrainerListScreen },
  },
  { initialRouteName: 'Home', }
);

export default class App extends Component {

    constructor(props) {
      super(props);
    }

    render() {
      return <RootStack/>
    }
}

