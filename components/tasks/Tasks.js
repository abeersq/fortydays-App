import * as React from 'react';
import { Text, View, StyleSheet,  ScrollView} from 'react-native';
import { Constants } from 'expo';
import { ListItem } from 'react-native-elements';
import { Button } from 'react-native-elements';

export default class Tasks extends React.Component {
  render() {
    return (
          <ScrollView>
      <View>
        <Text
          style={{
            marginTop: '10%',
            fontSize: 20,
            fontWeight: 'bold',
            textAlignVertical: 'center',
            textAlign: 'center',
          }}>
          المهام الفردية{' '}
        </Text>
        <ListItem
          title="مهمه ( ١ )"
          subtitle={
            <View style={styles.subtitleView}>
              <Text style={styles.ratingText}>تم التسليم</Text>
            </View>
          }
        />
        <ListItem
          title="مهمه ( ٢ )"
          subtitle={
            <View style={styles.subtitleView}>
              <Text style={styles.ratingText}>تم التسليم</Text>
            </View>
          }
        />
        <ListItem
          title="مهمه ( ٣ )"
          subtitle={
            <View style={styles.subtitleView}>
              <Text style={styles.ratingText}>لم يتم التسليم</Text>
            </View>
          }
        />
        <ListItem
          title="مهمه ( ٤ )"
          subtitle={
            <View style={styles.subtitleView}>
              <Text style={styles.ratingText}>تم التسليم</Text>
            </View>
          }
        />


        <Text
          style={{
            marginTop: '10%',
            
            fontSize: 20,
            fontWeight: 'bold',
            textAlignVertical: 'center',
            textAlign: 'center',
          }}>
           المهام الجماعية{' '}
        </Text>
        <ListItem
          title="مهمه ( ١ )"
          subtitle={
            <View style={styles.subtitleView}>
              <Text style={styles.ratingText}>لم يتم التسليم</Text>
            </View>
          }
        />
        <ListItem
          title="مهمه ( ٢ )"
          subtitle={
            <View style={styles.subtitleView}>
              <Text style={styles.ratingText}>تم التسليم</Text>
            </View>
          }
        />
                <ListItem
          title="مهمه ( ٣ )"
          subtitle={
            <View style={styles.subtitleView}>
              <Text style={styles.ratingText}>لم يتم التسليم</Text>
            </View>
          }
        />

              <ListItem
          title="مهمه ( ٤ )"
          subtitle={
            <View style={styles.subtitleView}>
              <Text style={styles.ratingText}>تم التسليم</Text>
            </View>
          }
        />
      </View>

      <Button
               style={{ marginTop: '10%' , alignSelf: 'flex-end'}}
                  title=" القائمة الرئيسية "
                  color="white"
                  backgroundColor="blue"
                  onPress={() =>{}}     
                             /> 
      </ScrollView>


    );
  }
}
const styles = StyleSheet.create({
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5,
    
  },
  
  ratingText: {
    paddingLeft: 10,
    color: 'grey',
  },
});
