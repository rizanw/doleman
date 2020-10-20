import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import MainTab from "./navigations/MainTab";

class Doleman extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <MainTab />
        </NavigationContainer>
      </View>
    );
  }
}

export default Doleman;
