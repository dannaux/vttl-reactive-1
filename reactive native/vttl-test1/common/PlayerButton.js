import React, {Component} from 'react';
import { TouchableOpacity, Text, View } from 'react-native'
import { Styles } from '../style/Styles';

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
              style={Styles.playerButtonView}
              onPress={self.onPress.bind(self)}
            >
              <Text style={Styles.playerButtonText}> { self.props.title }</Text>
            </TouchableOpacity>
           </View>
         )
       }

}