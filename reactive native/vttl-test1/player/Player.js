import React, {Component} from 'react';
import { Text, View, Image, Button } from 'react-native';
import { playerStyles } from '../style/Styles';
import ImageWithDefault from '../common/ImageWithDefault';
import RankBar from './RankBar';
import VTTLPlayerLoader from './VTTLPlayerLoader';

export default class Player extends Component {

  constructor(props) {
    super(props);
    this.playerLoader = new VTTLPlayerLoader();
    this.state = {
      playerLoaded : false
    };
  }

  componentDidMount() {
    this.playerLoader.loadPlayer(this.props.playerId, this.updateStateForPlayer.bind(this) );
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.playerId != nextProps.playerId) {
      this.setState({ playerLoaded : false });
      this.playerLoader.loadPlayer(nextProps.playerId, this.updateStateForPlayer.bind(this) );
    }
  }

  updateStateForPlayer(player) {
    this.player = player;
    this.setState( { playerLoaded : true } );
  }

  render() {
    var self = this;
    if ( this.state.playerLoaded == true ) {
      this.playerImageUri = this.computeImagePlayerUri(this.player);
      var numberMatches = Object.keys(self.player.RankResults).map( (rank) =>  self.player.RankResults[rank].win+self.player.RankResults[rank].loss );
      var maxMatches = Math.max(...numberMatches);
      var totalMatches = numberMatches.reduce( (a,b) => a+b, 0 );
     return (
       <View style={{flexDirection: 'column', alignItems: 'stretch', marginLeft: 20, paddingBottom: 10}}>
         <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10}}>
           <ImageWithDefault
             style={{width: 150, height: 150, borderWidth: 2, borderColor: 'white', borderRadius: 5}}
            source={{uri: this.playerImageUri}}
            />
            <View style={{flexDirection: 'column', alignItems: 'stretch', marginLeft: 20}}>
             <Text style={playerStyles.playerName}>{self.player.LastName}</Text>
             <Text style={playerStyles.playerName}>{self.player.FirstName}</Text>
             <Text style={playerStyles.ranking}>{self.player.Ranking}</Text>
             <Text style={playerStyles.matchen}>{totalMatches} matchen</Text>
           </View>
         </View>
         {Object.keys(self.player.RankResults).sort().reverse().map( (field) =>
           <RankBar key={field} maxmatches={maxMatches} ranking={field} win={self.player.RankResults[field].win} loss={self.player.RankResults[field].loss}/>
         )}
       </View>
     );
    }
    else {
      return (
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 50}}>
          <Text style={[playerStyles.playerName, {color:'#808080'}]}>Loading player</Text>
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
