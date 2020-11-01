import {
  CommonActions,
  NavigationProp,
  RouteProp,
} from "@react-navigation/native";
import React, { createRef } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { styles } from "../../resources/styles";
import { updateAuth } from "../../store/auth/actions";

interface Props {
  navigation: NavigationProp<any, any>;
  route: RouteProp<any, any>;
  updateAuth: (isLoggedIn: boolean) => void;
}

class LoginScreen extends React.Component<Props> {
  state = {
    email: "",
    password: "",
  };

  _LoginCheck() {
    if (
      this.state.email == "Admin@jatim1.com" &&
      this.state.password == "checkin"
    ) {
      this.props.navigation.navigate("Admin");
    } else if (
      this.state.email == "Rizan@its.ac.id" &&
      this.state.password == "rizan123"
    ) {
      this.props.updateAuth(true);
      if (this.props.route.params?.booking) {
        this.props.navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: "Booking" }],
          })
        );
        this.props.navigation.navigate("Confirmation");
      } else {
        this.props.navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: "MainTab" }],
          })
        );
        this.props.navigation.navigate("ProfileStacks");
      }
    } else alert("Isi Email dan Password dengan benar!");
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
  return {
    authState: state.authState,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  updateAuth: bindActionCreators(updateAuth, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
