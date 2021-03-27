import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container:{
    width: '100%',
    padding: 10
  },
  button:{
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  primary:{
    backgroundColor: '#171a20cc',
  },
  secondary:{
    backgroundColor: '#ffffffa6',
  },
  textPrimary:{
    color: 'white',
  },
  textSecondary:{
    color: '#171a20',
  },
  text:{
    fontSize: 12,
    fontWeight: '500',
    textTransform: 'uppercase'
  }
  
});

export default styles;