import React, {Component} from 'react';
import { Text, View, Image, Button } from 'react-native';
import Player from './player/Player';
import { StyleSheet, Alert } from 'react-native';

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
        <View style={{flexDirection: 'column', alignItems: 'stretch', marginTop: 50, marginLeft: 5, backgroundColor: '#fff7c0'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around' }}>
           <Button title="Jolan" onPress={this.changeToJolan.bind(self)} style={{backgroundColor: '#66ab8c'}}/>
           <Button title="Pieter" onPress={this.changeToPieter.bind(self)}/>
           <Button title="Maarten" onPress={this.changeToMaarten.bind(self)}/>
           <Button title="Lander" onPress={this.changeToLander.bind(self)}/>
          </View>
          <Player playerId={this.state.playerUniqueId}/>
        </View>
      );
    }
}
