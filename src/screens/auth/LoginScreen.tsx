import { NavigationProp } from "@react-navigation/native";
import React, { createRef } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
} from "react-native";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { styles } from "../../resources/styles";

interface Props {
  navigation: NavigationProp<any, any>;
}

class LoginScreen extends React.Component<Props> {
  render() {
    return (
      <View style={[styles.container]}>
        <Text style={styles.loginTitle}>Selamat Datang!</Text>
        <View
          style={{ paddingHorizontal: 16, paddingVertical: 24, width: "100%" }}
        >
          <TextField
            placeholder="email"
            autoCompleteType="email"
            returnKeyType="next"
          />
          <TextField
            placeholder="password"
            secureTextEntry={true}
            returnKeyType="go"
          />
        </View>
        <View style={{ flexDirection: "row", marginHorizontal: 10 }}>
          <Button
            label="masuk"
            onPress={() =>
              this.props.navigation.navigate("Admin" )
            }
          />
        </View>
      </View>
    );
  }
}

export default LoginScreen;
