import React, {Component} from 'react';
import { Button, ImageBackground, Image, Text, View } from 'react-native';
import Player from './player/Player';
import PlayerButton from './common/PlayerButton';
import { Styles } from './style/Styles';
import TrainerList from './trainer/TrainerList';

function loadMeerdaal() {
  var soap = require('soap-everywhere');
  var url = 'http://api.vttl.be/0.7/?WSDL';
  var args = { Season: 18, Club: 'Vl-B234'};

    soap.createClient(url, function(err, client) {
        client.GetClubs(args, function(err, result) {
            console.log(result);
        });
    });
}

export default class App extends Component {

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
        <ImageBackground source={require('./assets/batnet.jpg')} style={Styles.backgroundImage} >
          <View style={Styles.container}>
            <View style={{flexDirection: 'row', justifyContent: 'space-around' }}>
            <PlayerButton title="Jolan" onPress={this.changeToJolan.bind(self)}/>
            <PlayerButton title="Pieter" onPress={this.changeToPieter.bind(self)}/>
            <PlayerButton title="Maarten" onPress={this.changeToMaarten.bind(self)}/>
            <PlayerButton title="Lander" onPress={this.changeToLander.bind(self)}/>
            </View>
            {/* <Player playerId={this.state.playerUniqueId}/> */}
            <TrainerList/>
          </View>
        </ImageBackground>
      );
    }
}
