import React, {Component} from 'react';
import { TouchableOpacity, Text, View } from 'react-native'
import { Styles } from '../style/Styles';
import { withNavigation } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

class HomeButton extends Component {

    constructor(props) {
        super(props);
    }

    onPress() {
        this.props.navigation.navigate(this.props.target);
    }

    render() {
        var self = this;
        return (
          <View>
            <TouchableOpacity
              style={Styles.homebutton}
              onPress={self.onPress.bind(self)}
            >
              <Text style={Styles.homeButtonText}> { self.props.title }</Text>
              
            </TouchableOpacity>
           </View>
         )
       }

}

export default withNavigation(HomeButton);