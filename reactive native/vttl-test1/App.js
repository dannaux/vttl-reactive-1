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
        playerUniqueId: 522434
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
        <View style={{flexDirection: 'column', alignItems: 'stretch', marginTop: 50, marginLeft: 5}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around' }}>
           <Button title="Jolan" onPress={this.changeToJolan.bind(self)}/>
           <Button title="Pieter" onPress={this.changeToPieter.bind(self)}/>
           <Button title="Maarten" onPress={this.changeToMaarten.bind(self)}/>
           <Button title="Lander" onPress={this.changeToLander.bind(self)}/>
          </View>
          <Player playerId={this.state.playerUniqueId}/>
        </View>
      );
    }
  }

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  buttonContainer: {
    backgroundColor: '#2E9298',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25
  }
})
