import React, {Component} from 'react';
import { Button, ImageBackground, Image, Text, View } from 'react-native';
import Player from '../player/Player';
import { Styles } from '../style/Styles';

export default class PlayerScreen extends Component {

    constructor(props) {
      super(props);
    }

    render() {
      var self = this;

      const { params } = this.props.navigation.state;      
      const playerId = params ? params.playerId : null;
      console.log(params);


      return (
        <ImageBackground source={require('../assets/batnet.jpg')} style={Styles.backgroundImage} >
          <View style={Styles.container}>
            <Player playerId={playerId}/>
          </View>
        </ImageBackground>
      );
    }
}
