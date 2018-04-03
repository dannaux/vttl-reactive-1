import React, {Component} from 'react';
import { ImageBackground } from 'react-native';
import { Styles } from '../style/Styles';
import TrainerList from '../trainer/TrainerList';

export default class TrainerListScreen extends Component {

    constructor(props) {
      super(props);
    }

    render() {
      return (
        <ImageBackground source={require('../assets/batnet.jpg')} style={Styles.backgroundImage} >
            <TrainerList/>
        </ImageBackground>
      );
    }
}
