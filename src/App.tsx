import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import MainStacks from "./navigations/MainStack";
import AdminStacks from "./navigations/AdminStack";

class Doleman extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <AdminStacks />
        </NavigationContainer>
      </View>
    );
  }
}

export default Doleman;
