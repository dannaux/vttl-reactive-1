import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import PlayerListScreen from './screens/PlayerListScreen';
import HomeScreen from './screens/Homescreen';
import TrainerListScreen from './screens/TrainerListScreen';
import PlayerScreen from './screens/PlayerScreen';
import TrainerScreen from './screens/TrainerScreen';
import TrainingScreen from './screens/TrainingScreen';


const RootStack = StackNavigator(
  {
    Home: { screen: HomeScreen },
    PreferredPlayers: { screen: PlayerListScreen },
    Player: { screen: PlayerScreen },
    TrainerList: { screen: TrainerListScreen },
    Trainer: { screen: TrainerScreen },
    Training: { screen: TrainingScreen },
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

