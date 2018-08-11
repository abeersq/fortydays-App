import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Amplify, { Auth } from "aws-amplify";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <View style={styles.profileicWrap}>
          <Image
            style={styles.profileic}
            source={require("../../Icons/profile.jpg")}
          />
        </View>

        <Text style={styles.name}>الاسم : </Text>
        <Text style={styles.pos}>
          {Auth.user.signInUserSession.idToken.payload.name}{" "}
        </Text>
        <Text style={styles.name}>الايميل : </Text>
        <Text style={styles.pos}>
          {" "}
          {Auth.user.signInUserSession.idToken.payload.email}
        </Text>
        <Text style={styles.name}>الحساب المالي : </Text>
        <Text style={styles.pos}>لا يوجد </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerBackground: {
    flex: 1,
    width: null,
    alignSelf: "stretch"
  },
  header: {
    flex: 1,
    alignItems: "center",

    padding: 20,
    backgroundColor: "rgb(66,139,202)"
    //backgroundColor: 'rgba(0,0,0, 0.5)'
  },
  profileicWrap: {
    width: 180,
    height: 180,
    borderRadius: 100,
    borderColor: "rgba(0,0,0, 0.4)",
    borderWidth: 16
  },
  profileic: {
    flex: 1,
    width: null,
    alignSelf: "stretch",
    borderRadius: 100,
    borderColor: "#fff",
    borderWidth: 4
  },
  name: {
    marginTop: 20,
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold"
  },
  pos: {
    fontSize: 14,
    color: "white",
    fontWeight: "300",
    fontStyle: "italic"
  },
  b1: {
    alignSelf: "flex-end",

    marginTop: 50
  },
  b2: {
    alignSelf: "flex-start",

    marginTop: -45
  },
  b3: {
    alignSelf: "center"
  }
});
