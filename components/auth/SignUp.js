import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";

import { Auth } from "aws-amplify";

export default class App extends React.Component {
  state = {
    name: "",
    password: "",
    phone_number: "",
    email: "",
    gender: "",
    confirmationCode: ""
  };
  onChangeText(key, value) {
    this.setState({
      [key]: value
    });
  }
  signUp() {
    Auth.signUp({
      username: this.state.email,
      password: this.state.password,
      attributes: {
        email: this.state.email,
        phone_number: "+966531981877",
        name: this.state.name,
        gender: "male"
      }
    })
      .then(() => console.log("successful sign up!"))
      .catch(err => {
        console.log("error signing up!: ", err);
        alert(err.message);
      });
  }
  confirmSignUp() {
    Auth.confirmSignUp(this.state.email, this.state.confirmationCode)
      .then(() => {
        console.log("successful confirm sign up!");
        this.props.history.push("/");
      })
      .catch(err => console.log("error confirming signing up!: ", err));
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={value => this.onChangeText("name", value)}
          style={styles.input}
          placeholder="name"
        />
        <TextInput
          onChangeText={value => this.onChangeText("password", value)}
          style={styles.input}
          secureTextEntry={true}
          placeholder="password"
        />
        <TextInput
          onChangeText={value => this.onChangeText("email", value)}
          style={styles.input}
          placeholder="email"
        />
        <Button
          backgroundColor="green"
          title="Sign Up"
          onPress={this.signUp.bind(this)}
        />

        <TextInput
          onChangeText={value => this.onChangeText("confirmationCode", value)}
          style={styles.input}
          placeholder="confirmation Code"
        />
        <Button
          title="Confirm Sign Up"
          onPress={this.confirmSignUp.bind(this)}
        />
        <Button
          buttonStyle={{ marginTop: "5%" }}
          title="sign in"
          backgroundColor="blue"
          onPress={() => this.props.history.push("/")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: "#2196F3",
    margin: 10
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  }
});
