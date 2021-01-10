import React from "react";
import MapView from "react-native-maps";
import { TouchableOpacity, Text, View, Dimensions } from "react-native";
import Button from "../components/Button";
import { styles } from "../resources/styles";
import { CommonActions, NavigationProp } from "@react-navigation/native";
import { colors } from "../resources/colors";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";
import { connect } from "react-redux";
import { User } from "../store/auth/types";
import { bindActionCreators } from "redux";
import { logout, updateGeo } from "../store/auth/actions";
import * as Location from "expo-location";
import { TicketList } from "../store/ticket/types";
import { fetchByUser } from "../store/ticket/actions";

interface Props {
  navigation: NavigationProp<any, any>;
  auth: User;
  tickets: TicketList;
  fetchByUser: (id: string) => {};
  logout: () => void;
  updateGeo: (coords: { lat: number; lon: number }) => {};
}

class ProfileScreen extends React.Component<Props> {
  state = {
    name: "",
    location: "",
  };

  async componentDidMount() {
    if (this.props.auth.accessToken) {
      this.setState({ name: this.props.auth.name });
      this.setState({ location: this.props.auth.geocoding });
      await this.props.fetchByUser(this.props.auth.email);
    }
    if (!this.state.location) {
      var location = await Location.getCurrentPositionAsync({});
      var res = await this.props.updateGeo({
        lat: location.coords.latitude,
        lon: location.coords.longitude,
      });
    }
  }

  render() {
    if (!this.props.auth.accessToken) {
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
              onPress={() =>
                this.props.navigation.navigate("LoginTab", {
                  screen: "Register",
                })
              }
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
                {this.state.name}
              </Text>
              <Text style={{ fontSize: 12 }}>{this.state.location}</Text>
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
                <Text style={styles.buttonMenuText}>
                  {this.props.tickets.tickets.length}
                </Text>
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
          <Button label="keluar" onPress={() => this.props.logout()} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    auth: state.auth,
    tickets: state.tickets,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  logout: bindActionCreators(logout, dispatch),
  updateGeo: bindActionCreators(updateGeo, dispatch),
  fetchByUser: bindActionCreators(fetchByUser, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
