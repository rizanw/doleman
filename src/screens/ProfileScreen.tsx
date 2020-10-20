import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Button from "../components/Button";

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 14, marginTop: 28}}>Silakan masuk atau mendaftar</Text>
        <View
          style={{ flexDirection: "row", marginHorizontal: 12, marginTop: 24 }}
        >
          <Button label="masuk" />
          <Button label="daftar" type="outline" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
