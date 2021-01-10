import { NavigationProp, RouteProp } from "@react-navigation/native";
import React from "react";
import { Alert, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { colors } from "../../resources/colors";
import { logout } from "../../store/auth/actions";
import { User } from "../../store/auth/types";
import { checkIn } from "../../store/wisata/actions";

interface Props {
  navigation: NavigationProp<any, any>;
  route: RouteProp<any, any>;
  auth: User;
  checkInByCode: (code: string) => any;
  logout: () => any;
}

class OnlineScreen extends React.Component<Props> {
  state = {
    code: "",
  };

  checkIn() {
    const req = this.props.checkInByCode(
      this.state.code,
      this.props.auth.adminOn
    );
    req.then((data: { success: boolean; message: string | undefined }) => {
      console.log(data);
      if (data.success) {
        Alert.alert("Berhasil!", "Pengunjung ditambahkan.");
        this.props.route.params?.onRefresh(data);
        return;
      }
      Alert.alert("Gagal!", data.message);
    });
  }

  render() {
    console.log(this.props.auth.adminOn);
    return (
      <ScrollView style={{ backgroundColor: "white" }}>
        <View style={{ paddingHorizontal: 16, marginTop: 24, width: "100%" }}>
          <TextField
            autoCapitalize="characters"
            placeholder="Kode Booking (kapital)"
            onChangeText={(text) => this.setState({ code: text })}
          />
        </View>
        <View
          style={{ flexDirection: "row", marginHorizontal: 12, marginTop: 12 }}
        >
          <Button label="Check code" onPress={() => this.checkIn()} />
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

const mapStateToProps = (state: any) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  checkInByCode: bindActionCreators(checkIn, dispatch),
  logout: bindActionCreators(logout, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(OnlineScreen);
