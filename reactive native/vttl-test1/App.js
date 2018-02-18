import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

var soap = require('soap-everywhere');
var url = 'http://api.vttl.be/0.7/?WSDL';
var args = { Season: 18, Club: 'Vl-B234'};


  soap.createClient(url, function(err, client) {
      client.GetClubs(args, function(err, result) {
          console.log(result);
      });
  });



export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Image
          style={{width: 200, height: 200}}
         source={{uri: 'https://competitie.vttl.be/photos/1718/small/Lander.Dannaux.522436.jpg'}}
         />
         <Text>This includes SOAP everywhere</Text>
         <Text>This includes URL</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
