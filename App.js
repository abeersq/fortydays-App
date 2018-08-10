import React from "react";
import { StyleSheet, View } from "react-native";

import Amplify from "aws-amplify";
import AWSConfig from "./aws-exports";
Amplify.configure(AWSConfig);

import SignIn from "./components/auth/SignIn";

export default class App extends React.Component {
  state = {
    isAuthenticated: false
  };
  authenticate(isAuthenticated) {
    this.setState({ isAuthenticated });
  }
  render() {
    if (this.state.isAuthenticated) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        />
      );
    }
    return (
      <View style={styles.container}>
        <SignIn />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
