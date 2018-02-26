import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    flexDirection: 'column', 
    alignItems: 'stretch', 
    marginTop: 30, 
    marginLeft: 5, 
    marginRight: 5, 
    marginBottom: 5, 
    backgroundColor: '#ffffffd0', 
    borderRadius: 10 
  },
  ranking: {
    fontWeight: 'bold',
    fontSize: 40
  },
  playerName: {
    fontSize: 30
  },
  matchen: {
    fontSize: 20
  },
  backgroundImage: {
    flex: 1,
  },
  playerButtonView: {
    backgroundColor: '#3385ffe0',
    borderRadius: 10,
    marginTop: 10
  },
  playerButtonText: {
    fontSize: 25,
    marginLeft: 5,
    marginRight: 5,
    color: '#ffffff'
  }
  
});
