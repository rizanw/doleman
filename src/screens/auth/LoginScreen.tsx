import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { Text, TextInput, View } from "react-native";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { styles } from "../../resources/styles";

interface Props {
  navigation: NavigationProp<any, any>;
}

class LoginScreen extends React.Component<Props> {
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
          <Button
            label="masuk"
            onPress={() => this.props.navigation.navigate("Profile", {loggedIn: true})}
          />
        </View>
      </View>
    );
  }
}

export default LoginScreen;
