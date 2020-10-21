import React from "react";
import { SafeAreaView, View } from "react-native";
import Doleman from "./src/App";
import * as Location from "expo-location";

export default class App extends React.Component {
  async componentDidMount() {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      console.log(status);
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Doleman />
      </View>
    );
  }
}
