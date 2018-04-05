import React, {Component} from 'react';
import { Button, ImageBackground, Image, Text, View } from 'react-native';
import Training from '../training/Training';
import { Styles } from '../style/Styles';

export default class TrainingScreen extends Component {

    constructor(props) {
      super(props);
    }

    render() {
      var self = this;

      const { params } = this.props.navigation.state;      
      const trainingId = params ? params.trainingId : null;

      return (
        <ImageBackground source={require('../assets/batnet.jpg')} style={Styles.backgroundImage} >
          <View style={Styles.container}>
            <Training trainingId={trainingId}/>
          </View>
        </ImageBackground>
      );
    }
}
