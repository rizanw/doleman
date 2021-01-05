import { CommonActions, NavigationProp } from "@react-navigation/native";
import React from "react";
import { KeyboardAvoidingView, Platform, TextInput, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { styles } from "../../resources/styles";
import { register } from "../../store/auth/actions";
import { UserReg } from "../../store/auth/types";

interface Props {
  navigation: NavigationProp<any, any>;
  register: (user: UserReg) => {};
}

class RegisterScreen extends React.Component<Props> {
  state = {
    email: "",
    password: "",
    passwordConfirm: "",
    name: "",
    isInvalid: true,
  };

  async register() {
    if (!this.state.email || !this.state.password || !this.state.name) {
      alert("Pastikan semua data terisi dengan benar!");
      return;
    }
    if (this.state.password != this.state.passwordConfirm) {
      alert("password tidak sama!");
      return;
    }
    if (this.state.password.length < 8) {
      alert("buat password minimal 8 karakter!");
      return;
    }

    let user: UserReg = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      roles: ["wisatawan"],
    };

    let req = await this.props.register(user);
    console.log(req);
    if (!req.success) {
      console.log("invalid");
      this.setState({ isInvalid: true });
      if (req.message == "Failed! Email is already in use!") {
        alert("Email telah digunakan! silakan login!");
      }
      alert("Periksa kembali data anda!");
    } else {
      this.setState({ isInvalid: false });
    }

    if (!this.state.isInvalid) {
      this.props.navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "MainTab" }],
        })
      );
      this.props.navigation.navigate("ProfileStack");
    }
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={[styles.container]}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <View
          style={{ paddingHorizontal: 16, paddingVertical: 24, width: "100%" }}
        >
          <TextField
            placeholder="nama lengkap"
            autoCompleteType="name"
            onChangeText={(text) => this.setState({ name: text })}
            returnKeyType="next"
          />
          <TextField
            placeholder="email"
            autoCompleteType="email"
            onChangeText={(text) => this.setState({ email: text })}
            returnKeyType="next"
          />
          <TextField
            placeholder="password"
            secureTextEntry={true}
            onChangeText={(text) => this.setState({ password: text })}
            returnKeyType="next"
          />
          <TextField
            placeholder="konfirmasi password"
            secureTextEntry={true}
            onChangeText={(text) => this.setState({ passwordConfirm: text })}
            returnKeyType="go"
          />
        </View>
        <View style={{ flexDirection: "row", marginHorizontal: 10 }}>
          <Button label="daftar" onPress={() => this.register()} />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => ({
  register: bindActionCreators(register, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
