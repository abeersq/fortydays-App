import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { StackNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation';
import { PricingCard } from 'react-native-elements';


export default class Price extends React.Component {
  render() {
    return (
        
        <PricingCard
  color='#4f9deb'
  title='Just'
  price='$100'
  info={['1 User', 'Basic Support', 'All Core Features']}
  button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
/>
    );
  }
}
