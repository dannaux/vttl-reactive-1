import React, {Component} from 'react';
import { Text, View, Image, Button } from 'react-native';
import { playerStyles, trainerStyles } from '../style/Styles';
import ImageWithDefault from '../common/ImageWithDefault';
import DBTrainerLoader from './DBTrainerLoader';

export default class Trainer extends Component {

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
     return (
       <View style={{flexDirection: 'column', alignItems: 'stretch', marginLeft: 20}}>
         <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10}}>
           <ImageWithDefault
             style={{width: 200, height: 200, borderWidth: 2, borderColor: 'white', borderRadius: 5}}
            source={{uri: self.trainer.info.imageUrl }}
            />
            <View style={{flexDirection: 'column', alignItems: 'stretch', marginLeft: 20}}>
             <Text style={playerStyles.playerName}>{self.trainer.info.lastname}</Text>
             <Text style={playerStyles.playerName}>{self.trainer.info.firstname}</Text>
             <Text style={trainerStyles.diploma}>{self.trainer.info.diploma}</Text>
           </View>
         </View>
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
}

