import React from "react";
import { KeyboardAvoidingView, Platform, TextInput, View } from "react-native";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { styles } from "../../resources/styles";

class RegisterScreen extends React.Component {
  state = {};
  render() {

    return (
      <KeyboardAvoidingView
        style={[styles.container]}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <View
          style={{ paddingHorizontal: 16, paddingVertical: 24, width: "100%" }}
        >
          <TextField placeholder="nama lengkap" autoCompleteType="name" />
          <TextField placeholder="email" autoCompleteType="email" />
          <TextField placeholder="password" secureTextEntry={true} />
          <TextField placeholder="konfirmasi password" secureTextEntry={true} />
        </View>
        <View style={{ flexDirection: "row", marginHorizontal: 10 }}>
          <Button label="daftar" />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default RegisterScreen;
