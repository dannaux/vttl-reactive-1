import React, {Component} from 'react';
import { Text, View, Image } from 'react-native';

export default class RankBar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
     if (this.props.ranking != "") {
       return (
           <View key={this.props.ranking} style={{flexDirection: 'row', alignItems: 'stretch', marginLeft: 20, marginTop: 10}}>
            <Text key={this.props.ranking+"-rank"} style={{ width: 30}}>{this.props.ranking} </Text>
            <Text key={this.props.ranking+"-win"} style={{ width: 20, textAlign: "right" }}>{this.props.win} </Text>
            <View key={this.props.ranking+"-winbar"} style={{height: 20, width: 250*this.props.win/(this.props.win+this.props.loss), backgroundColor: '#008000'}} />
            <View key={this.props.ranking+"-lossbar"} style={{height: 20, width: 250*this.props.loss/(this.props.win+this.props.loss), backgroundColor: '#b30000'}} />
            <Text key={this.props.ranking+"-loss"} style={{ width: 40, marginLeft: 3, textAlign: "left"}}>{this.props.loss}/{this.props.win+this.props.loss} </Text>
          </View>
       );
     }
     else {
       return null;
     }
  }
}
