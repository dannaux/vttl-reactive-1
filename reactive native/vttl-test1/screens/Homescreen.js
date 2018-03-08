import React, {Component} from 'react';
import { Button, ImageBackground, Image, Text, View } from 'react-native';
import { Styles } from '../style/Styles';
import HomeButton from '../common/HomeButton';

export default class HomeScreen extends Component {

    constructor(props) {
      super(props);
    }

    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <HomeButton target="PreferredPlayers" title="Dannaux"/>
          <HomeButton target="TrainerList" title="Trainers"/>
        </View>
      );
    }
}


