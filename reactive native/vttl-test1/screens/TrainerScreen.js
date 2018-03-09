import React, {Component} from 'react';
import { Button, ImageBackground, Image, Text, View } from 'react-native';
import Trainer from '../trainer/Trainer';
import { Styles } from '../style/Styles';

export default class TrainerScreen extends Component {

    constructor(props) {
      super(props);
    }

    render() {
      var self = this;

      const { params } = this.props.navigation.state;      
      const trainerId = params ? params.trainerId : null;

      console.log( 'TrainerScreen: trainer id = '+trainerId);

      return (
        <ImageBackground source={require('../assets/batnet.jpg')} style={Styles.backgroundImage} >
          <View style={Styles.container}>
            <Trainer trainerId={trainerId}/>
          </View>
        </ImageBackground>
      );
    }
}
