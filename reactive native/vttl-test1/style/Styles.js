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
  backgroundImage: {
    flex: 1,
  },
  homebutton: {
    borderRadius: 10,
    backgroundColor: '#3385ffe0',
    width: 120,
    height: 120, 
    borderWidth: 2, 
    borderColor: 'white',
    marginTop: 10,
    alignItems: 'flex-end'
  },
  homeButtonText: {
    fontSize: 20,
    marginLeft: 5,
    marginRight: 5,
    color: '#ffffff'
  }
});

export const playerStyles = StyleSheet.create({
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
  },
  playerName: {
    fontSize: 30
  },
  matchen: {
    fontSize: 20
  },
  ranking: {
    fontWeight: 'bold',
    fontSize: 40
  },
});

export const trainerStyles = StyleSheet.create({
  diploma: {
    fontWeight: 'bold',
    fontSize: 30
  },
});
