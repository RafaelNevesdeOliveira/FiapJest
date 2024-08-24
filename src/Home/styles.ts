import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  cell: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    textAlign: 'center',
  },
  red: {
    backgroundColor: '#FF0000',
    color: '#FFF',
  },
  green: {
    backgroundColor: '#00FF00',
    color: '#FFF',
  },
  blue: {
    backgroundColor: '#0000FF',
    color: '#FFF',
  },
  counter: {
    marginTop: 30,
    alignItems: 'center',
  },
  counterText: {
    fontSize: 20,
    marginBottom: 10,
  },
});
