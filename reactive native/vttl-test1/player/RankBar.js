import React, {Component} from 'react';
import { Text, View, Image } from 'react-native';

export default class RankBar extends Component {

  constructor(props) {
    super(props);
  }

  winperc = () => {
       return this.props.win/(this.props.win+this.props.loss);
  }

  lossperc = () => {
       return this.props.loss/(this.props.win+this.props.loss);
  }

  relativematches = () => {
       return (this.props.win+this.props.loss)/this.props.maxmatches;
  }


  render() {
     if (this.props.ranking != "") {
       return (
           <View key={this.props.ranking} style={{flexDirection: 'row', alignItems: 'stretch', marginLeft: 15, marginTop: 8}}>
            <Text key={this.props.ranking+"-rank"} style={{ width: 30}}>{this.props.ranking} </Text>
            <View key={this.props.ranking+"-winbar"} style={{height: 20, width: 250*this.winperc()*this.relativematches(), backgroundColor: '#008000'}} />
            <View key={this.props.ranking+"-lossbar"} style={{height: 20, width: 250*this.lossperc()*this.relativematches(), backgroundColor: '#b30000'}} />
            <Text key={this.props.ranking+"-loss"} style={{ width: 40, marginLeft: 3, textAlign: "left"}}>{this.props.win}/{this.props.win+this.props.loss} </Text>
          </View>
       );
     }
     else {
       return null;
     }
  }
}
