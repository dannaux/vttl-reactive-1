import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import PreferredPlayersScreen from './screens/PreferredPlayersScreen';
import HomeScreen from './screens/Homescreen';
import TrainerListScreen from './screens/TrainerListScreen';
import PlayerScreen from './screens/PlayerScreen';
import TrainerScreen from './screens/TrainerScreen';


const RootStack = StackNavigator(
  {
    Home: { screen: HomeScreen },
    PreferredPlayers: { screen: PreferredPlayersScreen },
    Player: { screen: PlayerScreen },
    TrainerList: { screen: TrainerListScreen },
    Trainer: { screen: TrainerScreen },
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

