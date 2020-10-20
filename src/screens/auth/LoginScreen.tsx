import React from "react";
import { Text, TextInput, View } from "react-native";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { styles } from "../../resources/styles";

class LoginScreen extends React.Component {
  state = {};
  render() {
    return (
      <View style={[styles.container]}>
        <Text style={styles.loginTitle}>Selamat Datang!</Text>
        <View
          style={{ paddingHorizontal: 16, paddingVertical: 24, width: "100%" }}
        >
          <TextField placeholder="email" />
          <TextField placeholder="password" secureTextEntry={true} />
        </View>
        <View style={{ flexDirection: "row", marginHorizontal: 10 }}>
          <Button label="masuk" />
        </View>
      </View>
    );
  }
}

export default LoginScreen;
