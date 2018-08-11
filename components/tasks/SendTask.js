import * as React from "react";
import { Text, View, TextInput } from "react-native";

import { Button } from "react-native-elements";

export default class SendTask extends React.Component {
  render() {
    return (
      <View>
        <Text
          style={{
            marginTop: "40%",
            fontSize: 20,
            fontWeight: "bold",
            textAlignVertical: "center",
            textAlign: "center"
          }}
        >
          تسليم المهام
        </Text>

        <TextInput
          style={{
            marginRight: "5%",
            marginLeft: "5%",
            marginTop: "5%",
            height: 40,
            borderColor: "gray",
            borderWidth: 1
          }}
          onChangeText={text => this.setState({ input: text })}
          placeholder="اسم المهمه"
        />
        <TextInput
          style={{
            marginRight: "5%",
            marginLeft: "5%",
            marginTop: "5%",
            height: 40,
            borderColor: "gray",
            borderWidth: 1
          }}
          onChangeText={text => this.setState({ input: text })}
          placeholder="رابط المهمه"
        />

        <Button
          style={{ marginTop: "20%" }}
          title=" تسليم "
          color="white"
          backgroundColor="blue"
          onPress={() => {}}
        />
      </View>
    );
  }
}
