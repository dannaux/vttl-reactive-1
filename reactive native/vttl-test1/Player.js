import React, {Component} from 'react';
import { Text, View, Image, Button } from 'react-native';
import { Styles } from './Styles';
import ImageWithDefault from './ImageWithDefault';

export default class Player extends Component {

  loadPlayer(uniqueIndex: String) {
    var self = this;
    var soap = require('soap-everywhere');
    var url = 'http://api.vttl.be/0.7/?WSDL';
    var args = { Season: 18, UniqueIndex: uniqueIndex, WithResults: 'TRUE'};

      soap.createClient(url, function(err, client) {
          client.GetMembers(args, function(err, response) {
              self.setState({ player: self.convertPlayerResponse(response) })
          });
      });
  }

  convertPlayerResponse(playerResponse) {
    return this.convertPlayer(playerResponse.MemberEntries[0]);
  }

  convertPlayer(player) {
    var self = this;
    return {
      FirstName: player.FirstName,
      LastName: player.LastName,
      Ranking: player.Ranking,
      UniqueIndex: player.UniqueIndex,
      RankResults: self.convertResults(player.ResultEntries)
    }
  }

  convertResults(results) {
    var accumulateResultPerRanking = (rankResults, result, index) => {
      if (index == 1) {
        rankResults = {};
      }
      if (rankResults[result.Ranking] == undefined) {
        rankResults[result.Ranking] = {
          win: 0,
          loss: 0
        };
      }
      if (result.Result == 'D' ) {
        rankResults[result.Ranking].loss++;
      }
      else {
        rankResults[result.Ranking].win++;
      }
      return rankResults;
    };

    return results.reduce(accumulateResultPerRanking);
  }

  constructor(props) {
    super(props);
    this.state = {
      player: null
    };
  }

  componentDidMount()  {
    this.loadPlayer(this.props.playerId); // Vanja
  }

  render() {
    var self = this;
    if (this.state.player != null) {
      this.playerImageUri = this.computeImagePlayerUri(this.state.player);
      console.log(self.state.player.RankResults);

      Object.keys(self.state.player.RankResults).map( (field) =>
        console.log(field+" win: "+self.state.player.RankResults[field].win+", loss: "+self.state.player.RankResults[field].loss) );

     return (
       <View style={{flexDirection: 'column', alignItems: 'stretch', marginLeft: 20}}>
         <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 50}}>
           <ImageWithDefault
             style={{width: 200, height: 200, borderWidth: 3, borderColor: 'black'}}
            source={{uri: this.playerImageUri}}
            />
            <View style={{flexDirection: 'column', alignItems: 'stretch', marginLeft: 20}}>
             <Text style={Styles.playerName}>{self.state.player.LastName}</Text>
             <Text style={Styles.playerName}>{self.state.player.FirstName}</Text>
             <Text style={Styles.ranking}>{self.state.player.Ranking}</Text>
           </View>
         </View>
         {Object.keys(self.state.player.RankResults).sort().reverse().map( (field) =>
           <View key={field} style={{flexDirection: 'row', alignItems: 'stretch', marginLeft: 20, marginTop: 10}}>
              <Text key={field+"-rank"} style={{ width: 30}}>{field} </Text>
              <Text key={field+"-win"} style={{ width: 20 }}>{self.state.player.RankResults[field].win} </Text>
              <View key={field+"-winbar"} style={{height: 20, width: 250*self.state.player.RankResults[field].win/(self.state.player.RankResults[field].win+self.state.player.RankResults[field].loss), backgroundColor: '#008000'}} />
              <View key={field+"-lossbar"} style={{height: 20, width: 250*self.state.player.RankResults[field].loss/(self.state.player.RankResults[field].win+self.state.player.RankResults[field].loss), backgroundColor: '#b30000'}} />
              <Text key={field+"-loss"} style={{ width: 20, marginLeft: 3}}>{self.state.player.RankResults[field].loss} </Text>
            </View>
         )}
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
    return 'https://competitie.vttl.be/photos/1718/small/'+this.camelize(playerProperties.FirstName)+'.'+this.camelize(playerProperties.LastName)+'.'+playerProperties.UniqueIndex+'.jpg';
  }
}
