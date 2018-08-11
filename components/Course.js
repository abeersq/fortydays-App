import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import { Constants } from "expo";
import { Card } from "react-native-elements";
import { Button } from "react-native-elements";

import { createStackNavigator } from "react-navigation";
// import Courseinfo from "./Courseinfo";

export default class Course extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.paragraph} />
          <Card title="React">
            <Text style={styles.paragraph}>
              {" "}
              Learn React online from the best React tutorials & courses
              recommended by the programming community. React is sometimes also
              styled React.js or ReactJS.
            </Text>
            <Image
              style={styles.logo}
              source={require("../Icons/images-2.png")}
            />
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1, marginRight: 10 }}>
                <Button
                  title="تسجيل"
                  color="blue"
                  backgroundColor="white"
                  onPress={() => this.props.navigation.navigate("Courseinfo")}
                />
              </View>
            </View>
          </Card>

          <Card title="Java script">
            <Text style={styles.paragraph}>
              {" "}
              Learn JavaScript the most popular programming language on the web.
            </Text>
            <Image style={styles.logo} source={require("../Icons/javas.png")} />
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1, marginRight: 10 }}>
                <Button
                  title="تسجيل "
                  color="blue"
                  backgroundColor="white"
                  onPress={() => {}}
                />
              </View>
            </View>
          </Card>
          <Card title="Linux">
            <Text style={styles.paragraph}>
              {" "}
              Learn the basics of the command line interface of a Linux server:
              the terminal and shell (GNU Bash){" "}
            </Text>
            <Image style={styles.logo} source={require("../Icons/linux.png")} />
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1, marginRight: 10 }}>
                <Button
                  title="تسجيل"
                  color="blue"
                  backgroundColor="white"
                  onPress={() => {}}
                />
              </View>
            </View>
          </Card>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "normal",
    textAlign: "center"
  },
  logo: {
    alignSelf: "center",
    height: 128,
    width: 128
  }
});

const Appstacknavigator = createStackNavigator({
  Courseinfo: {
    screen: Courseinfo
  }
});
