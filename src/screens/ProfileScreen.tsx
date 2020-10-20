import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Button from "../components/Button";
import { styles } from "../resources/styles";
import { NavigationProp } from "@react-navigation/native";

interface Props {
  navigation: NavigationProp<any, any>;
}

export default class ProfileScreen extends React.Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 14, marginTop: 28 }}>
          Silakan masuk atau mendaftar
        </Text>
        <View
          style={{ flexDirection: "row", marginHorizontal: 12, marginTop: 24 }}
        >
          <Button
            label="masuk"
            onPress={() => this.props.navigation.navigate("Login")}
          />
          <Button
            label="daftar"
            type="outline"
            onPress={() => this.props.navigation.navigate("Register")}
          />
        </View>
      </View>
    );
  }
}
