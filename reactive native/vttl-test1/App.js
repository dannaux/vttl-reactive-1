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




  export class Player extends Component {

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
    }

    componentDidMount()  {
      this.loadPlayer('522436');
    }

    render() {
      var self = this;
      if (this.state.player != null) {
        this.playerImageUri = this.computeImagePlayerUri(this.props);
       return (
         <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 50}}>
           <Image
             style={{width: 200, height: 200}}
            source={{uri: this.playerImageUri}}
            />
            <View style={{flexDirection: 'column', alignItems: 'stretch', marginLeft: 20}}>
             <Text style={styles.playerName}>{self.state.player.LastName}</Text>
             <Text style={styles.playerName}>{self.state.player.FirstName}</Text>
             <Text style={styles.ranking}>{self.state.player.Ranking}</Text>
           </View>
         </View>
       );
      }
      else {
        return (
          <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 50}}>
            <Text style={styles.playerName}>Loading player</Text>
          </View>
        );
      }
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
