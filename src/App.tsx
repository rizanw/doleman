import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import MainStacks from "./navigations/MainStack";
import AdminStacks from "./navigations/AdminStack";
import { connect } from "react-redux";
import { User } from "./store/auth/types";
import * as Location from "expo-location"; 
import { bindActionCreators } from "redux";
import { updateGeo } from "./store/auth/actions";

interface Props {
  auth: User;
  updateGeo: (coords: { lat: number; lon: number }) => {};
}

class Doleman extends React.Component<Props> {
  async componentDidMount() {
    let { status } = await Location.requestPermissionsAsync();

    if (status !== "granted") {
      this.setState({ errorMsg: "Permission to access location was denied" });
    }
    var location = await Location.getCurrentPositionAsync({});
    var res = await this.props.updateGeo({
      lat: location.coords.latitude,
      lon: location.coords.longitude,
    });
    console.log(res);
  }

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

const mapDispatchToProps = (dispatch: any) => ({
  updateGeo: bindActionCreators(updateGeo, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Doleman);
