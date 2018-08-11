import React from "react";
import { StyleSheet, View } from "react-native";
import Amplify from "aws-amplify";
import AWSConfig from "./aws-exports";
import { NativeRouter, Switch, Route } from "react-router-native";

Amplify.configure(AWSConfig);

import Signin from "./components/auth/SignIn";
import Signup from "./components/auth/SignUp";
// import Course from "./components/Course";
import Menu from "./components/layout/Menu1";
export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <Switch>
          <View style={styles.container}>
            <Route exact path="/" component={Signin} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/menu" component={Menu} />
            {/* <Route path="/login" component="SignIn" />
            <Route path="/login" component="SignIn" />
            <Route path="/login" component="SignIn" /> */}
          </View>
        </Switch>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
