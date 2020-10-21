import { CommonActions, NavigationProp } from "@react-navigation/native";
import React from "react";
import { KeyboardAvoidingView, Platform, TextInput, View } from "react-native";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { styles } from "../../resources/styles";

interface Props {
  navigation: NavigationProp<any, any>;
}

class RegisterScreen extends React.Component<Props> {
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
          <Button
            label="daftar"
            onPress={() => {
              this.props.navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{ name: "MainTab" }],
                })
              );
              this.props.navigation.navigate("ProfileStack");
            }}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default RegisterScreen;
