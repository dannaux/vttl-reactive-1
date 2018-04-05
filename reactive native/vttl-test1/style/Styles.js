import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', 
    alignItems: 'stretch', 
    marginTop: 10, 
    marginLeft: 5, 
    marginRight: 5, 
    marginBottom: 5, 
    backgroundColor: '#ffffffa0', 
    borderRadius: 10 
  },
  backgroundImage: {
    flex: 1,
  },
  homebutton: {
    flex: 0.70,
    borderRadius: 10,
    backgroundColor: '#3385ffe0',
    width: 120,
    height: 120, 
    borderWidth: 2, 
    borderColor: 'white',
    marginTop: 10,
    alignItems: 'flex-end',
  },
  homeButtonText: {
    fontSize: 20,
    marginLeft: 5,
    marginRight: 5,
    color: '#ffffff'
  },
  flatListItem: {
    padding: 10,
    fontSize: 18,
    height: 44,
    backgroundColor: '#ffffffd0',
    borderRadius: 5,
    marginRight: 5,
    marginLeft: 5,
    marginTop: 1,
    marginBottom: 1
  },
  selectStyle: {
    backgroundColor : "#5dd55dbf"
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
