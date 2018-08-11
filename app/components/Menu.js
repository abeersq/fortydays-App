import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert
} from 'react-native';
import { Container,  Content, Button,Icon} from 'native-base';
//import {createStackNavigator} from 'react-navigation';


export default class Header extends Component {
  render() {
    return (
        <View style={styles.header}>

            <View style={styles.profileicWrap}>
                <Image style={styles.profileic} source={require('./../img/logo2.jpg')} />
            </View>
            
            
          <Button full primary style={{
    marginTop: 50,}}>
           <Text style={{color:'white'}}>الملف الشخصي</Text>
            
          </Button>
          
          <Button full primary style={{
    marginTop: 50,}}>
           <Text style={{color:'white'}}>بيانات الفيزا</Text>
            
          </Button>
        </View>
     
    );
  }
}


const styles = StyleSheet.create({
  headerBackground: {
    flex: 1,
    width: null,
    alignSelf: 'stretch'
  },
  header: {
      flex: 2,
      alignItems: 'center',
      
    
      padding: 20,
      backgroundColor: 'white'
      //backgroundColor: 'rgba(0,0,0, 0.5)'
  },
  profileicWrap: {
      width: 180,
      height: 180,
      borderRadius: 100,
      borderColor: 'rgba(0,0,0, 0.4)',
      borderWidth: 16
  },
  profileic: {
      flex: 1,
      width: null,
      alignSelf: 'stretch',
      borderRadius: 100,
      borderColor: '#fff',
      borderWidth: 4
  },
  name:{
      marginTop: 20,
      fontSize: 16,
      color: '#fff',
      fontWeight: 'bold'
  },
  pos: {
      fontSize: 14,
      color: 'white',
      fontWeight: '300',
      fontStyle: 'italic'
  },
  b1:{
    alignSelf: 'flex-end',
    //flex-start 
    marginTop: 50,
  },
  b2:{
    alignSelf: 'flex-start',
    //flex-start 
    marginTop: -45,
  },
  b3:{
    alignSelf: 'center',
   // marginTop: 50,
  },
  
});

