import React, {Component} from 'react';
import { Text, View, Image, Button } from 'react-native';
import { Styles } from './Styles';
import ImageWithDefault from './ImageWithDefault';

export default class Player extends Component {

  loadPlayer(uniqueIndex: String) {
    var self = this;
    var soap = require('soap-everywhere');
    var url = 'http://api.vttl.be/0.7/?WSDL';
    var args = { Season: 18, UniqueIndex: uniqueIndex, WithResults: 'FALSE'};

      soap.createClient(url, function(err, client) {
          client.GetMembers(args, function(err, response) {
              self.setState({ player: self.convertPlayerResponse(response) })
          });
      });
  }

  convertPlayerResponse(playerResponse) {
    return playerResponse.MemberEntries[0]
  }

  constructor(props) {
    super(props);
    this.state = {
      player: null
    };
    console.log(Styles);
  }

  componentDidMount()  {
    // this.loadPlayer('522436'); // Lander
    // this.loadPlayer('522434'); // Pieter
    // this.loadPlayer('507015'); // Vanja
    console.log(this.props.playerId);
    this.loadPlayer(this.props.playerId); // Vanja
  }

  render() {
    var self = this;
    if (this.state.player != null) {
      this.playerImageUri = this.computeImagePlayerUri(this.state.player);
     return (
       <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 50}}>
         <ImageWithDefault
           style={{width: 200, height: 200, borderWidth: 10, borderColor: 'black'}}
          source={{uri: this.playerImageUri}}
          />
          <View style={{flexDirection: 'column', alignItems: 'stretch', marginLeft: 20}}>
           <Text style={Styles.playerName}>{self.state.player.LastName}</Text>
           <Text style={Styles.playerName}>{self.state.player.FirstName}</Text>
           <Text style={Styles.ranking}>{self.state.player.Ranking}</Text>
         </View>
       </View>
     );
    }
    else {
      return (
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 50}}>
          <Text style={Styles.playerName}>Loading player</Text>
        </View>
      );
    }
  }

  camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
      return index == 0 ? letter.toUpperCase() : letter.toLowerCase();
    }).replace(/\s+/g, '');
  }

  computeImagePlayerUri(playerProperties) {
    console.log("Player properties:");
    console.log(playerProperties);
    return 'https://competitie.vttl.be/photos/1718/small/'+this.camelize(playerProperties.FirstName)+'.'+this.camelize(playerProperties.LastName)+'.'+playerProperties.UniqueIndex+'.jpg';
  }
}
