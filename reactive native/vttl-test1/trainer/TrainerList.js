import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { AppRegistry, StyleSheet, FlatList, Text, View, ScrollView, Alert, ActivityIndicator, Platform} from 'react-native';
import DBTrainerLoader from './DBTrainerLoader';

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

FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
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

    return (
      <ScrollView>
         <FlatList
            data={ self.state.dataSource }
            ItemSeparatorComponent = {this.FlatListItemSeparator}
            renderItem={ ({item}) => <Text 
                style={styles.FlatListItemStyle} 
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

const styles = StyleSheet.create({

MainContainer :{
  justifyContent: 'center',
  flex:1,
  margin: 10,
  paddingTop: (Platform.OS === 'ios') ? 20 : 0,
},

FlatListItemStyle: {
    padding: 10,
    fontSize: 18,
    height: 44,
    backgroundColor: '#ffffffd0'
  },
});
