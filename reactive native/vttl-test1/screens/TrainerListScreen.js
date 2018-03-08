import React, {Component} from 'react';
import { Button, ImageBackground, Image, Text, View } from 'react-native';
import Player from '../player/Player';
import PlayerButton from '../common/PlayerButton';
import { Styles } from '../style/Styles';
import TrainerList from '../trainer/TrainerList';

export default class PreferredPlayers extends Component {

    constructor(props) {
      super(props);
      this.state = {
        playerUniqueId: 522436
      };
    }

    changeToJolan() {
      this.setState( { playerUniqueId: 520746 } );
    }

    changeToPieter() {
      this.setState( { playerUniqueId: 522434 } );
    }

    changeToLander() {
      this.setState( { playerUniqueId: 522436 } );
    }

    changeToMaarten() {
      this.setState( { playerUniqueId: 522435 } );
    }

    render() {
      var self = this;

      return (
        <ImageBackground source={require('../assets/batnet.jpg')} style={Styles.backgroundImage} >
            <TrainerList/>
        </ImageBackground>
      );
    }
}
