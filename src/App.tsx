import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import MainStacks from "./navigations/MainStack";
import AdminStacks from "./navigations/AdminStack";
import { connect } from "react-redux";
import { User } from "./store/auth/types";

interface Props {
  auth: User;
}

class Doleman extends React.Component<Props> {
  render() {
    var isAdmin = this.props.auth.roles == "ROLE_PENGELOLA" ? true : false;

    return (
      <View style={{ flex: 1 }}>
        <StatusBar style="dark" />
        <NavigationContainer>
          {isAdmin ? <AdminStacks /> : <MainStacks />}
        </NavigationContainer>
      </View>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Doleman);
