import React, {Component} from 'react';
import { TouchableOpacity, Text, View } from 'react-native'
import { playerStyles } from '../style/Styles';

export default class PlayerButton extends Component {

    constructor(props) {
        super(props);

    }

    onPress() {
        this.props.onPress();
    }

    render() {
        var self = this;
        return (
          <View>
            <TouchableOpacity
              style={playerStyles.playerButtonView}
              onPress={self.onPress.bind(self)}
            >
              <Text style={playerStyles.playerButtonText}> { self.props.title }</Text>
            </TouchableOpacity>
           </View>
         )
       }

}