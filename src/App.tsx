import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import MainStacks from "./navigations/MainStack";

class Doleman extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <MainStacks />
        </NavigationContainer>
      </View>
    );
  }
}

export default Doleman;
