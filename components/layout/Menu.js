import React, { Component } from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";

export default class Menu1 extends Component {
  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <Button
            buttonStyle={{ marginTop: "5%" }}
            backgroundColor="blue"
            title="بيانات المستخدم"
            onPress={() => this.props.navigation.navigate("header")}
          />
          <Button
            buttonStyle={{ marginTop: "5%" }}
            title="المقررات"
            backgroundColor="blue"
            onPress={() => this.props.navigation.navigate("course")}
          />
          <Button
            buttonStyle={{ marginTop: "5%" }}
            title="المهام"
            backgroundColor="blue"
            onPress={() => this.props.navigation.navigate("tasks")}
          />
          <Button
            buttonStyle={{ marginTop: "5%" }}
            title="تسليم المهمه"
            backgroundColor="blue"
            onPress={() => this.props.navigation.navigate("sendtask")}
          />
        </View>
      </View>
    );
  }
}
