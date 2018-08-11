import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
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
          placeholder="البريد الالكتروني"
        />
        <TextInput
          onChangeText={value => this.onChangeText("password", value)}
          style={styles.input}
          secureTextEntry={true}
          placeholder="كلمة المرور"
        />
        <Button
          buttonStyle={{ marginTop: "5%" }}
          backgroundColor="green"
          title="Sign In"
          onPress={this.signIn.bind(this)}
        />
        <Button
          buttonStyle={{ marginTop: "5%" }}
          backgroundColor="blue"
          title="Sign Up"
          onPress={() => this.props.history.push("/signup")}
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
