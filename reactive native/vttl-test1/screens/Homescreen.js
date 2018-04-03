import React, {Component} from 'react';
import { Button, ImageBackground, Image, Text, View } from 'react-native';
import { Styles } from '../style/Styles';
import HomeButton from '../common/HomeButton';

export default class HomeScreen extends Component {

    constructor(props) {
      super(props);
    }

    render() {
      return (
        <ImageBackground source={require('../assets/batnet.jpg')} style={Styles.backgroundImage} >        
          <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-around' }}>
            <View style={{ flex: 0.3, flexDirection: 'row', justifyContent: 'space-around' }}>
              <HomeButton target="PreferredPlayers" title="Favorieten"/>
              <HomeButton target="TrainerList" title="Trainers"/>
            </View>
          </View>
        </ImageBackground>
      );
    }
}


