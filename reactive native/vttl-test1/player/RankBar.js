import React, {Component} from 'react';
import { Text, View, Image } from 'react-native';

export default class RankBar extends Component {


  constructor(props) {
    super(props);
    this.woncolor = '#3385ff';
    this.losscolor = '#cc2900';
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
           <View key={this.props.ranking} style={{flexDirection: 'row', marginLeft: 15, marginTop: 8}}>
            <Text key={this.props.ranking+"-rank"} style={{ width: 30}}>{this.props.ranking} </Text>
            <View key={this.props.ranking+"-winbar"} style={{height: 20, width: 250*this.winperc()*this.relativematches(), backgroundColor: this.woncolor, borderTopLeftRadius: 3, borderBottomLeftRadius: 3, borderTopRightRadius: 2, borderBottomRightRadius: 2}} />
            <View key={this.props.ranking+"-lossbar"} style={{height: 20, width: 250*this.lossperc()*this.relativematches(), backgroundColor: this.losscolor, borderTopRightRadius: 3, borderBottomRightRadius: 3, borderTopLeftRadius: 2, borderBottomLeftRadius: 2}} />
            <Text key={this.props.ranking+"-loss"} style={{ width: 40, marginLeft: 3, textAlign: "left"}}>{this.props.win}/{this.props.win+this.props.loss} </Text>
          </View>
       );
     }
     else {
       return null;
     }
  }
}
