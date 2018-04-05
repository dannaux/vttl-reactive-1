import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { AppRegistry, StyleSheet, FlatList, Text, View, ScrollView, Alert, ActivityIndicator, Platform} from 'react-native';
import FlatListItemSeparator from '../common/FlatListItemSeparator';

class TrainerList extends Component {

  constructor(props) {
    super(props);
    this.players = [
      { 
        firstname: 'Jolan',
        lastname: 'Dannaux',
        vttlId: '520746'
      },
      { 
        firstname: 'Pieter',
        lastname: 'Dannaux',
        vttlId: '522434'
      },
      { 
        firstname: 'Maarten',
        lastname: 'Dannaux',
        vttlId: '522435'
      },
      { 
        firstname: 'Lander',
        lastname: 'Dannaux',
        vttlId: '522436'
      }
    ];
    this.state = {
      //isLoading: true
      isLoading: false,
      players: this.players
    }
  }

  componentDidMount() {
//      this.trainerLoader = new DBTrainerLoader();     
//      this.trainerLoader.loadTrainerList(this.trainerListLoaded.bind(this) );
   }

   trainerListLoaded(responseJson) {
    this.setState({
      isLoading: false,
      players: responseJson
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

    console.log(self.state.players);

    return (
      <ScrollView>
         <FlatList
            data={ self.state.players }
            ItemSeparatorComponent = {FlatListItemSeparator}
            renderItem={ ({item}) => <Text 
                style={styles.FlatListItemStyle} 
                onPress={() => {     
                  this.props.navigation.navigate('Player', { playerId: item.vttlId });                  
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
