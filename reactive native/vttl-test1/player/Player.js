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
      player: null,
    };
  }

  componentDidMount() {
    this.playerLoader.loadPlayer(this.props.playerId, this.updateStateForPlayer.bind(this) );
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.playerId != nextProps.playerId) {
      this.playerLoader.loadPlayer(nextProps.playerId, this.updateStateForPlayer.bind(this) );
    }
  }

  updateStateForPlayer(player) {
    this.setState({ player: player} );
  }

  toggleBool = () => {
        if (this.state.isTrue === false)
            return (true);
        return (false);
    }

  playerLoaded = () => {
       return ( (this.state.player != null) && (this.state.player.UniqueIndex == this.props.playerId) );
  }

  render() {
    var self = this;
    if (this.playerLoaded()) {
      this.playerImageUri = this.computeImagePlayerUri(this.state.player);
     return (
       <View style={{flexDirection: 'column', alignItems: 'stretch', marginLeft: 20}}>
         <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10}}>
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
           <RankBar key={field} ranking={field} win={self.state.player.RankResults[field].win} loss={self.state.player.RankResults[field].loss}/>
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
