import React, {Component} from 'react';
import { Text, View, Image, Button } from 'react-native';
import Player from './Player';

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
    render() {
      // '520746' // Jolan
      // '522434' // Pieter
      // '522435' // Maarten
      // '522436' // Lander
      // '507015' // Vanja
      // 524734 // Jesse

      return (
        <View>
           <Player playerId="522435"/>
        </View>
      );
    }
  }
