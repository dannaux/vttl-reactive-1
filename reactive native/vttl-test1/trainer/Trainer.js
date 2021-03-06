import React, {Component} from 'react';
import { Button, FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { playerStyles, trainerStyles } from '../style/Styles';
import ImageWithDefault from '../common/ImageWithDefault';
import FlatListItemSeparator from '../common/FlatListItemSeparator';
import { Styles } from '../style/Styles';
import DBTrainerLoader from '../db/DBTrainerLoader';
import Constants from 'expo';
import DateUtil from '../common/DateUtil'

class Trainer extends Component {

  constructor(props) {
    super(props);
    this.trainerLoader = new DBTrainerLoader();
    this.state = {
      trainerLoaded : false
    };
  }

  componentDidMount() {
    this.trainerLoader.loadTrainer(this.props.trainerId, this.updateStateForTrainer.bind(this) );
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.trainerId != nextProps.trainerId) {
      this.setState({ trainerLoaded : false });
      this.trainerLoader.loadTrainer(nextProps.trainerId, this.updateStateForTrainer.bind(this) );
    }
  }

  updateStateForTrainer(trainer) {
    this.trainer = trainer;
    this.setState( { trainerLoaded : true } );
  }

  render() {
    var self = this;

    if ( this.state.trainerLoaded == true ) {
      var imageUrl = this.createImageURL( self.trainer.info.id );
      return (
       <View style={{flex: 1, flexDirection: 'column', alignItems: 'stretch', marginLeft: 20}}>
         <View style={{flex: 0.4, flexDirection: 'row', marginTop: 10, marginBottom: 10}}>
           <ImageWithDefault
             style={{ flex: 0.4, borderWidth: 2, borderColor: 'white', borderRadius: 5}}
            source={{uri: imageUrl }}
            />
            <View style={{flex: 0.8, flexDirection: 'column', alignItems: 'stretch', marginLeft: 20}}>
             <Text style={playerStyles.playerName}>{self.trainer.info.lastname}</Text>
             <Text style={playerStyles.playerName}>{self.trainer.info.firstname}</Text>
             <Text style={trainerStyles.diploma}>{self.trainer.info.diploma}</Text>
           </View>
         </View>
         <ScrollView>
          <FlatList
              data={ self.trainer.trainings }
              ItemSeparatorComponent = {FlatListItemSeparator}
              renderItem={ ({item}) => <Text 
                  style={this.renderTrainingStyle(item)} 
                  onPress={() => {     
                    this.props.navigation.navigate('Training', { trainingId: item.id });
                  }}
                >{this.renderTrainingText(item)}</Text>}
              keyExtractor={(item, index) => index}
          />
         </ScrollView>
       </View>
     );
    }
    else {
      return (
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 50}}>
          <Text style={[playerStyles.playerName, {color:'#808080'}]}>Loading trainer</Text>
        </View>
      );
    }
  }

  renderTrainingText(training) {
    return DateUtil.dayOfTheWeek(training.day) + " " + training.start + "-" + training.stop + ": "+ training.name;
  }

  renderTrainingStyle(training) {
    var d = new Date();
    var n = d.getDay();
    if ( Math.abs((n - training.day))  > 1 ) {
      return Styles.flatListItem;
    }
    else {
      return StyleSheet.flatten([Styles.flatListItem, Styles.selectStyle]);
    }
  }

  createImageURL(userId) {
    return Expo.Constants.manifest.extra.UserImagesBaseURL + userId + '.jpg';    
  }
}

export default withNavigation(Trainer);