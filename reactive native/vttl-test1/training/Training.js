import React, {Component} from 'react';
import { Button, FlatList, Image, ScrollView, Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import FlatListItemSeparator from '../common/FlatListItemSeparator';
import { Styles, playerStyles } from '../style/Styles';
import DBTrainerLoader from '../db/DBTrainerLoader';
import Constants from 'expo';
import DateUtil from '../common/DateUtil'


export default class Training extends Component {
    
    constructor(props) {
        super(props);
        this.trainingLoader = new DBTrainerLoader();
        this.state = {
          trainingLoaded : false
        };
      }
    
      componentDidMount() {
        this.trainingLoader.loadTraining(this.props.trainingId, this.updateStateForTraining.bind(this) );
      }
    
      componentWillReceiveProps(nextProps) {
        if (this.props.trainingId != nextProps.trainingId) {
          this.setState({ trainingLoaded : false });
          this.trainingLoader.loadTraining(nextProps.trainingId, this.updateStateForTraining.bind(this) );
        }
      }
    
      updateStateForTraining(training) {
        this.training = training;
        this.setState( { trainingLoaded : true } );
      }
    
      render() {
        var self = this;
    
        if ( this.state.trainingLoaded == true ) {
          return (
             <ScrollView>
              <FlatList
                  data={ self.training.sessions }
                  ItemSeparatorComponent = {FlatListItemSeparator}
                  renderItem={ ({item}) => <Text 
                      style={this.renderTrainingSessionStyle(item)} 
                    >{this.renderTrainingSessionText(item)}</Text>}
                  keyExtractor={(item, index) => index}
              />
             </ScrollView>
         );
        }
        else {
          return (
            <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 50}}>
              <Text style={[playerStyles.playerName, {color:'#808080'}]}>Loading training</Text>
            </View>
          );
        }
      }
    
      renderTrainingSessionText(trainingsession) {
        return trainingsession.dag + "/" + trainingsession.maand + "/"+ trainingsession.jaar;
      }
    
      renderTrainingSessionStyle(training) {
        return Styles.flatListItem;
      }
        
}