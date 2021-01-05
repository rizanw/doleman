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
import {
  CommonActions,
  NavigationProp,
  RouteProp,
} from "@react-navigation/native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { login } from "../../store/auth/actions";
import { UserIn } from "../../store/auth/types";

interface Props {
  navigation: NavigationProp<any, any>;
  route: RouteProp<any, any>;
  login: (user: UserIn) => {};
}

class LoginScreen extends React.Component<Props> {
  state = {
    email: "",
    password: "",
    isInvalid: true,
  };

  async _LoginCheck() {
    if (!this.state.email || !this.state.password) {
      alert("Isi Email dan Password dengan benar!");
    }

    let user: UserIn = {
      email: this.state.email,
      password: this.state.password,
    };

    let req = await this.props.login(user);

    if (!req.success) {
      console.log("invalid");
      this.setState({ isInvalid: true });
      alert("Periksa kembali email dan password anda!");
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
    console.log(this.props.route.params);
    return (
      <View style={[styles.container]}>
        <Text style={styles.loginTitle}>Selamat Datang!</Text>
        <View
          style={{ paddingHorizontal: 16, paddingVertical: 24, width: "100%" }}
        >
          <TextField
            placeholder="email"
            onChangeText={(text) => this.setState({ email: text })}
            autoCompleteType="email"
            returnKeyType="next"
          />
          <TextField
            placeholder="password"
            onChangeText={(text) => this.setState({ password: text })}
            secureTextEntry={true}
            returnKeyType="go"
          />
        </View>
        <View style={{ flexDirection: "row", marginHorizontal: 10 }}>
          <Button label="masuk" onPress={() => this._LoginCheck()} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => ({
  login: bindActionCreators(login, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
