import React, {Component} from 'react';
import { Button, ImageBackground, Image, Text, View } from 'react-native';
import Player from '../player/Player';
import PlayerButton from '../common/PlayerButton';
import { Styles } from '../style/Styles';

export default class PlayerScreen extends Component {

    constructor(props) {
      super(props);
    }

    render() {
      var self = this;

      const { params } = this.props.navigation.state;      
      const vttlId = params ? params.vttlId : null;

      return (
        <ImageBackground source={require('../assets/batnet.jpg')} style={Styles.backgroundImage} >
          <View style={Styles.container}>
            <Player playerId={vttlId}/>
          </View>
        </ImageBackground>
      );
    }
}
