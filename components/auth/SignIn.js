import React from "react";
import { TextInput, Button, StyleSheet, Text, View } from "react-native";
import { Link } from "react-router-native";
import { Auth } from "aws-amplify";

export default class App extends React.Component {
  state = {
    username: "",
    password: "",
    user: {}
  };
  onChangeText(key, value) {
    this.setState({
      [key]: value
    });
  }
  signIn() {
    const { username, password } = this.state;
    Auth.signIn(username, password)
      .then(user => {
        this.setState({ user });
        console.log("successful sign in!");
        this.props.history.push("/menu");
      })
      .catch(err => {
        console.log("error signing in!: ", err);
        alert(err.message);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={value => this.onChangeText("username", value)}
          style={styles.input}
          placeholder="username"
        />
        <TextInput
          onChangeText={value => this.onChangeText("password", value)}
          style={styles.input}
          secureTextEntry={true}
          placeholder="password"
        />
        <Button title="Sign In" onPress={this.signIn.bind(this)} />
        <Link to="/signup">
          {/* <Button title="Sign Up" onPress={() => console.log("signup")} /> */}
          <Text>signup </Text>
        </Link>
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
