import { CommonActions, NavigationProp } from "@react-navigation/native";
import React from "react";
import { Dimensions, Image, ScrollView, Text, View } from "react-native";
import Button from "../../components/Button";
import { colors } from "../../resources/colors";
import { styles } from "../../resources/styles";

interface Props {
  navigation: NavigationProp<any, any>;
}

class ConfirmationScreen extends React.Component<Props> {
  state = {};
  render() {
    return (
      <ScrollView
        style={[styles.container, { paddingHorizontal: 12, paddingTop: 20 }]}
      >
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Image
            source={require("../../../assets/confirmation.png")}
            style={{
              width: Dimensions.get("screen").width / 3,
              height: 340,
              resizeMode: "center",
            }}
          />
          <Text
            numberOfLines={2}
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: colors.BLUE_DEEP,
              marginTop: 12,
              textAlign: "center",
            }}
          >
            Pemesanan Tiket Berhasil
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: colors.CHARCOAL,
              marginTop: 12,
              textAlign: "center",
            }}
          >
            Reservasi wisata Anda dengan menggunakan Doleman berhasil!
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: colors.CHARCOAL,
              marginTop: 12,
              textAlign: "center",
            }}
          >
            Tetap aman, Jaga kebersihan, Gunakan masker, Dan semoga hari mu
            menyenangkan.
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: colors.CHARCOAL,
              marginTop: 12,
              textAlign: "center",
            }}
          >
            Nomor tiket anda: 26182
          </Text>
        </View>
        <View style={{ paddingHorizontal: 12, marginTop: 48 }}>
          <Text
            style={{
              fontSize: 11,
              color: colors.CHARCOAL,
              marginTop: 12,
              textAlign: "center",
            }}
          >
            Periksa ticket anda:
          </Text>
          <Button
            label="Tiket Saya"
            onPress={() => {
              this.props.navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{ name: "MainTab" }], 
                })
              );
              this.props.navigation.dispatch(
                CommonActions.reset({
                  index: 1,
                  routes: [{ name: "ProfileStack" }], 
                })
              );
              this.props.navigation.navigate("MyTickets");
            }}
          />
        </View>
      </ScrollView>
    );
  }
}

export default ConfirmationScreen;
