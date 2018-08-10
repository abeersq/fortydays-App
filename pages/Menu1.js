import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { StackNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation';
import { Button } from 'react-native-elements';

export default class Menu extends React.Component {
  render() {
    return (
        
      <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Button
               style={{ marginTop: '40%' }}
                  title="بيانات المستخدم"
                  color="white"
                  backgroundColor="blue"
                  onPress={() =>{}}     
                             />
                             <Button
               style={{ marginTop: '5%' }}
                  title="المقررات"
                  color="white"
                  backgroundColor="blue"
                  onPress={() =>{}}     
                             />
                      <Button
                  style={{ marginTop: '5%' }}
                  title="المهام"
                  color="white"
                  backgroundColor="blue"
                  onPress={() => {}}    
                              />

                              <Button
                  style={{ marginTop: '5%' }}
                  title="تسليم المهمه"
                  color="white"
                  backgroundColor="blue"
                  onPress={() => {}}    
                              />

                              <Button
                  style={{ marginTop: '5%' }}
                  title="تسجيل الخروج"
                  color="white"
                  backgroundColor="blue"
                  onPress={() => {}}    
                              />
              </View>
               </View>
    );
  }
}