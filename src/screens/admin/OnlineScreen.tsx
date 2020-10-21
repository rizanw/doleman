import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { colors } from "../../resources/colors";

interface Props {
  navigation: NavigationProp<any, any>;
}

class OnlineScreen extends React.Component<Props> {
  render() {
    return (
      <ScrollView style={{ backgroundColor: "white" }}>
        <View style={{ paddingHorizontal: 16, marginTop: 24, width: "100%" }}>
          <TextField placeholder="Kode Booking" />
        </View>
        <View
          style={{ flexDirection: "row", marginHorizontal: 12, marginTop: 12 }}
        >
          <Button label="Check code" />
        </View>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 16,
            alignItems: "center",
            marginTop: 12,
          }}
        >
          <View
            style={{
              borderWidth: 0.5,
              flex: 1,
              height: 0,
              borderColor: colors.GREY,
            }}
          />
          <Text style={{ marginHorizontal: 10, color: colors.GREY }}>Atau</Text>
          <View
            style={{
              borderWidth: 0.5,
              flex: 1,
              height: 0,
              borderColor: colors.GREY,
            }}
          />
        </View>
        <View
          style={{ flexDirection: "row", marginHorizontal: 12, marginTop: 12 }}
        >
          <Button
            label="Scan QR"
            color="secondary"
            onPress={() => this.props.navigation.navigate("Camera")}
          />
        </View>
      </ScrollView>
    );
  }
}

export default OnlineScreen;
