import React, {Component} from 'react';
import { Text, View, Image, Button } from 'react-native';
import { Styles } from '../style/Styles';
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
      console.log("componentWillReceiveProps: "+ this.state.playerLoaded);
      this.playerLoader.loadPlayer(nextProps.playerId, this.updateStateForPlayer.bind(this) );
    }
  }

  updateStateForPlayer(player) {
    this.player = player;
    this.setState( { playerLoaded : true } );
  }

  render() {
    var self = this;
    console.log("Render: "+ this.state.playerLoaded);
    if ( this.state.playerLoaded == true ) {
      this.playerImageUri = this.computeImagePlayerUri(this.player);
      var numberMatches = Object.keys(self.player.RankResults).map( (rank) =>  self.player.RankResults[rank].win+self.player.RankResults[rank].loss );
      var maxMatches = Math.max(...numberMatches);
      var totalMatches = numberMatches.reduce( (a,b) => a+b, 0 );
     return (
       <View style={{flexDirection: 'column', alignItems: 'stretch', marginLeft: 20}}>
         <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10}}>
           <ImageWithDefault
             style={{width: 200, height: 200, borderWidth: 1, borderColor: 'black'}}
            source={{uri: this.playerImageUri}}
            />
            <View style={{flexDirection: 'column', alignItems: 'stretch', marginLeft: 20}}>
             <Text style={Styles.playerName}>{self.player.LastName}</Text>
             <Text style={Styles.playerName}>{self.player.FirstName}</Text>
             <Text style={Styles.ranking}>{self.player.Ranking}</Text>
             <Text style={Styles.matchen}>{totalMatches} matchen</Text>
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
