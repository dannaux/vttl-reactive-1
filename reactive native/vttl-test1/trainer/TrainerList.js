import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { AppRegistry, StyleSheet, FlatList, Text, View, ScrollView, Alert, ActivityIndicator, Platform} from 'react-native';
import DBTrainerLoader from '../db/DBTrainerLoader';
import FlatListItemSeparator from '../common/FlatListItemSeparator';
import { Styles } from '../style/Styles';

class TrainerList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
      this.trainerLoader = new DBTrainerLoader();     
      this.trainerLoader.loadTrainerList(this.trainerListLoaded.bind(this) );
   }

   trainerListLoaded(responseJson) {
    this.setState({
      isLoading: false,
      dataSource: responseJson
    });
   }

  render() {
    var self = this;
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator /> 
        </View>
      );
    }

    console.log(Styles.flatListItem);

    return (
      <ScrollView>
         <FlatList
            data={ self.state.dataSource }
            ItemSeparatorComponent = {FlatListItemSeparator}
            renderItem={ ({item}) => <Text 
                style={Styles.flatListItem} 
                onPress={() => {     
                    this.props.navigation.navigate('Trainer', { trainerId: item.vttl_id });
             }}>{item.firstname} {item.lastname}</Text>}
            keyExtractor={(item, index) => index}
         />
      </ScrollView>
    );
  }
}

export default withNavigation(TrainerList);