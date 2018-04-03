import React, {Component} from 'react';
import { Button, ImageBackground, Image, ScrollView, Text, View } from 'react-native';
import PlayerList from '../player/PlayerList';
import PlayerButton from '../common/PlayerButton';
import { Styles } from '../style/Styles';

export default class PreferredPlayersScreen extends Component {

    constructor(props) {
      super(props);
    }

    render() {
      var self = this;

      return (
        <ImageBackground source={require('../assets/batnet.jpg')} style={Styles.backgroundImage} >
            <PlayerList/>
        </ImageBackground>
      );
    }
}
