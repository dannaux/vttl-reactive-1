import React, {Component} from 'react';
import { Text, View, Image, Button } from 'react-native';
import Player from './player/Player';

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

    render() {
      // '520746' // Jolan
      // '522434' // Pieter
      // '522435' // Maarten
      // '522436' // Lander
      // '507015' // Vanja
      // 524734 // Jesse

      return (
        <View>
           <Player playerId={this.state.playerUniqueId}/>
        </View>
      );
    }
  }
