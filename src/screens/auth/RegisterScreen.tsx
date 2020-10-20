import React from "react";
import { TextInput, View } from "react-native";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { styles } from "../../resources/styles";

class RegisterScreen extends React.Component {
  state = {};
  render() {
    return (
      <View style={[styles.container]}>
        <View
          style={{ paddingHorizontal: 16, paddingVertical: 24, width: "100%" }}
        >
          <TextField placeholder="nama lengkap" />
          <TextField placeholder="email" />
          <TextField placeholder="password" secureTextEntry={true} />
          <TextField placeholder="konfirmasi password" secureTextEntry={true} />
        </View>
        <View style={{ flexDirection: "row", marginHorizontal: 10 }}>
          <Button label="daftar" />
        </View>
      </View>
    );
  }
}

export default RegisterScreen;
