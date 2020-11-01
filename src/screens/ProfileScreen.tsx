import React from "react";
import MapView from "react-native-maps";
import { TouchableOpacity, Text, View, Dimensions } from "react-native";
import Button from "../components/Button";
import { styles } from "../resources/styles";
import {
  CommonActions,
  NavigationProp,
  RouteProp,
} from "@react-navigation/native";
import { colors } from "../resources/colors";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";
import { connect } from "react-redux";
import { AuthState } from "../store/auth/types";
import { bindActionCreators } from "redux";
import { updateAuth } from "../store/auth/actions";

interface Props {
  navigation: NavigationProp<any, any>;
  route: RouteProp<any, any>;
  authState: AuthState;
  updateAuth: (isLoggedIn: boolean) => void;
}

class ProfileScreen extends React.Component<Props> {
  state = {};

  render() {
    if (!this.props.authState.isLoggedIn) {
      return (
        <View style={[styles.container, { alignItems: "center" }]}>
          <Text style={{ fontSize: 14, marginTop: 28 }}>
            Silakan masuk atau mendaftar
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 12,
              marginTop: 24,
            }}
          >
            <Button
              label="masuk"
              onPress={() => this.props.navigation.navigate("LoginTab")}
            />
            <Button
              label="daftar"
              type="outline"
              onPress={() => this.props.navigation.navigate("LoginTab")}
            />
          </View>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <View style={{ flex: 1, width: "100%" }}>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              margin: 16,
              justifyContent: "flex-start",
              alignContent: "center",
            }}
          >
            <View
              style={{
                width: 56,
                height: 56,
                borderRadius: 56 / 2,
                backgroundColor: colors.BLUE_DEEP,
              }}
            ></View>
            <View
              style={{
                flexDirection: "column",
                alignContent: "center",
                justifyContent: "center",
                marginLeft: 10,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Sue Rizan
              </Text>
              <Text style={{ fontSize: 12 }}>Malang, Jawa Timur</Text>
            </View>
          </View>

          <View style={{ marginHorizontal: 16, marginTop: 18 }}>
            <TouchableOpacity
              style={styles.buttonMenu}
              onPress={() => this.props.navigation.navigate("MyTickets")}
            >
              <FontAwesome5
                name="ticket-alt"
                size={24}
                color={colors.LIGHT_ORANGE}
              />
              <Text style={styles.buttonMenuLabel}>Tiket saya</Text>
              <View style={{ flex: 1, alignItems: "flex-end" }}>
                <Text style={styles.buttonMenuText}>1</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("MyPlaces")}
              style={styles.buttonMenu}
            >
              <AntDesign name="heart" size={24} color={colors.LIGHT_ORANGE} />
              <Text style={styles.buttonMenuLabel}>Tempat Favorit</Text>
              <View style={{ flex: 1, alignItems: "flex-end" }}>
                <Text style={styles.buttonMenuText}>0</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{ flexDirection: "row", marginHorizontal: 12, marginTop: 24 }}
        >
          <Button label="keluar" onPress={() => this.props.updateAuth(false)} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    authState: state.authState,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  updateAuth: bindActionCreators(updateAuth, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
