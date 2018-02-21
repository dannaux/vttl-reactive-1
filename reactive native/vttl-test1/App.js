import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

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

function loadPlayer(uniqueIndex: String) {
  var soap = require('soap-everywhere');
  var url = 'http://api.vttl.be/0.7/?WSDL';
  var args = { Season: 18, UniqueIndex: uniqueIndex, WithResults: 'FALSE'};


    soap.createClient(url, function(err, client) {
        client.GetMembers(args, function(err, result) {
            console.log(result);
        });
    });
}

loadPlayer('522436');

  export class Player extends Component {

    render() {
       this.playerImageUri = this.computeImagePlayerUri(this.props);
      return (
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 50}}>
          <Image
            style={{width: 200, height: 200}}
           source={{uri: this.playerImageUri}}
           />
           <View style={{flexDirection: 'column', alignItems: 'stretch', marginLeft: 20}}>
            <Text style={styles.playerName}>{this.props.FirstName}</Text>
            <Text style={styles.playerName}>{this.props.LastName}</Text>
            <Text style={styles.ranking}>{this.props.Ranking}</Text>
          </View>
        </View>
      );
    }

    computeImagePlayerUri(playerProperties) {
      return 'https://competitie.vttl.be/photos/1718/small/'+playerProperties.FirstName+'.'+playerProperties.LastName+'.'+playerProperties.UniqueIndex+'.jpg';
    }
  }

  export default class App extends Component {
    render() {
      return (
        <View>
           <Player LastName="Dannaux" FirstName="Lander" UniqueIndex="522436" Ranking="NG"/>
        </View>
      );
    }
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ranking: {
    fontWeight: 'bold',
    fontSize: 40
  },
  playerName: {
    fontSize: 30
  }
});
