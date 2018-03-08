import React, { Component } from 'react';

import { AppRegistry, StyleSheet, FlatList, Text, View, ScrollView, Alert, ActivityIndicator, Platform} from 'react-native';

export default class TrainerList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
     return fetch('http://192.168.0.99:9000/trainerlist.php')
       .then((response) => response.json())
       .then((responseJson) => {
         this.setState({
           isLoading: false,
           dataSource: responseJson
         }, function() {
           // In this block you can do something with new state.
         });
       })
       .catch((error) => {
         console.error(error);
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

  GetFlatListItem (fruit_name) {
    Alert.alert(fruit_name);
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

    console.log("Render")
    console.log(this.state.dataSource);

    return (
      <ScrollView>
         <FlatList
            data={ self.state.dataSource }
            ItemSeparatorComponent = {this.FlatListItemSeparator}
            renderItem={ ({item}) => <Text style={styles.FlatListItemStyle} onPress={this.GetFlatListItem.bind(this, item.vttl_id)} >{item.firstname} {item.lastname}, {item.name}</Text>}
            keyExtractor={(item, index) => index}
         />
      </ScrollView>
    );
  }
}

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
  },
});
