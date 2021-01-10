import React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import {
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import * as Location from "expo-location";
import { NavigationProp } from "@react-navigation/native";
import { styles } from "../resources/styles";
import { colors } from "../resources/colors";
import { AntDesign, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity as TouchableOpacityAndroid } from "react-native-gesture-handler";
import { mapStyle } from "../resources/mapStyle";
import * as geolib from "geolib";
import ScrollBottomSheet from "react-native-scroll-bottom-sheet";
import { Wisata, WisataList } from "../store/wisata/types";
import { bindActionCreators } from "redux";
import { fetchNearby } from "../store/wisata/actions";
import { connect } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";

interface Props {
  navigation: NavigationProp<any, any>;
  wisatas: WisataList;
  fetchNearby: (coordinate: { long: number; lat: number }) => {};
}

class DicoverScreen extends React.Component<Props> {
  sheetRef = null;
  state = {
    errorMsg: "",
    mapRegion: undefined,
    destinations: [],
  };

  async componentDidMount() {
    await this._getCurrentLocation();
  }

  async _getCurrentLocation() {
    let location = await Location.getCurrentPositionAsync({});

    let coordinates: { long: number; lat: number } = {
      lat: location.coords.latitude,
      long: location.coords.longitude,
    };

    let res = await this.props.fetchNearby(coordinates);
    this.setState({
      destinations: res,
    });

    this.setState({
      mapRegion: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.08,
        longitudeDelta: 0.04,
      },
    });

    function updateDistance(loc: { coords: any; timestamp?: number }) {
      return function (obj: Wisata) {
        var LatLon = {
          latitude: obj.location.coordinates[1],
          longitude: obj.location.coordinates[0],
        };
        return Object.assign(obj, {
          distance:
            geolib.getDistance(
              LatLon,
              {
                latitude: loc.coords.latitude,
                longitude: loc.coords.longitude,
              },
              1
            ) * 0.001,
        });
      };
    }

    this.setState((prevState) => ({
      destinations: prevState.destinations.map(updateDistance(location)),
    }));
  }

  _handleMapRegionChange(mapRegion: any) {
    this.setState({ mapRegion });
  }

  // Render Screen
  render() {
    let text = "Waiting..";
    if (this.state.errorMsg) {
      text = this.state.errorMsg;
    } else if (this.state.mapRegion) {
      text = "";
    }
    return (
      <View style={{ flex: 1 }}>
        <MapView
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          style={styles.mapStyle}
          initialRegion={this.state.mapRegion}
          region={this.state.mapRegion}
          showsCompass={true}
          customMapStyle={mapStyle}
        >
          {this.state.destinations.map((marker: Wisata, index) => {
            var LatLng = {
              latitude: marker.location.coordinates[1],
              longitude: marker.location.coordinates[0],
            };
            console.log(LatLng);
            return (
              <Marker
                key={index}
                coordinate={LatLng}
                style={{ alignItems: "center" }}
              >
                <Text
                  style={{
                    fontSize: 10,
                    textAlign: "center",
                    color: colors.BLUE_NEON,
                  }}
                >
                  {marker.name}
                </Text>
                <MaterialIcons
                  name="location-on"
                  size={26}
                  color={colors.BLUE_NEON}
                />
              </Marker>
            );
          })}
        </MapView>
        <View style={{ position: "absolute", top: 24, left: 4 }}>
          <TouchableOpacity onPress={() => this._getCurrentLocation()}>
            <Image
              source={require("../../assets/doleman.png")}
              style={{ width: 100, height: 100, resizeMode: "contain" }}
            />
          </TouchableOpacity>
          <Text>{text}</Text>
        </View>
        <ScrollBottomSheet<string> // If you are using TS, that'll infer the renderItem `item` type
          componentType="FlatList"
          snapPoints={[128, "50%", Dimensions.get("screen").height - 200]}
          initialSnapIndex={2}
          renderHandle={() => (
            <View
              style={{
                backgroundColor: "white",
                padding: 16,
                alignItems: "center",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              }}
            >
              <View
                style={{
                  width: 76,
                  height: 8,
                  backgroundColor: "#CCCCCC",
                  borderRadius: 10,
                  marginBottom: 12,
                }}
              />
              <Text
                style={{ fontSize: 18, fontWeight: "bold", color: "#777777" }}
              >
                Jelajah sekitar
              </Text>
            </View>
          )}
          data={this.state.destinations.sort(
            (a, b) => a.crowdedness - b.crowdedness
          )}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={() => (
            <Text style={{ textAlign: "center" }}>
              (Tidak ada wisata di sekitar)
            </Text>
          )}
          renderItem={({ item }) => {
            return Platform.select({
              ios: <Item item={item} navigation={this.props.navigation} />,
              android: (
                <ItemAndroid item={item} navigation={this.props.navigation} />
              ),
            });
          }}
          contentContainerStyle={{
            backgroundColor: colors.WHITE,
            paddingHorizontal: 16,
          }}
        />
      </View>
    );
  }
}

interface ItemProps {
  item: any;
  navigation: NavigationProp<any, any>;
}

const Item = ({ item, navigation }: ItemProps) => (
  <View style={styles.ticketCard}>
    <TouchableOpacity
      onPress={() => navigation.navigate("Place", { item: item })}
      style={{ flexDirection: "row", flex: 1 }}
    >
      <Image
        source={{
          uri: item.images[0],
        }}
        style={{
          width: 130,
          height: 130,
          resizeMode: "cover",
        }}
      />
      <View style={[styles.ticketCardRightSide, { flex: 1 }]}>
        <Text style={styles.ticketCardTextTitle} numberOfLines={1}>
          {item.name}
        </Text>
        <View>
          <Text style={styles.ticketCardTextSubTitle}>
            {item.address.city}, {item.address.province}
          </Text>
        </View>
        <View style={{ marginTop: 6, flexDirection: "row" }}>
          <Ionicons name="md-people" size={16} color={colors.BLUE_DEEP} />
          <Text style={[styles.ticketCardTextSubTitle, { marginLeft: 6 }]}>
            {(item.crowdedness ? item.crowdedness : 0) + "% ramai"}
          </Text>
        </View>
        <View style={{ marginTop: 6, flexDirection: "row" }}>
          <FontAwesome5 name="route" size={16} color={colors.BLUE_DEEP} />
          <Text style={[styles.ticketCardTextSubTitle, { marginLeft: 6 }]}>
            {item.distance ? item.distance.toFixed(2) + " km" : "memuat .."}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
    <View
      style={{
        right: 12,
        top: 12,
        padding: 4,
      }}
    >
      <AntDesign name="hearto" size={20} color={colors.GREY} />
    </View>
  </View>
);

const ItemAndroid = ({ item, navigation }: ItemProps) => (
  <View style={styles.ticketCard}>
    <TouchableOpacityAndroid
      onPress={() => navigation.navigate("Place", { item: item })}
      style={{ flexDirection: "row", flex: 1 }}
    >
      <Image
        source={{
          uri: item.images[0],
        }}
        style={{
          width: 130,
          height: 130,
          resizeMode: "cover",
        }}
      />
      <View style={[styles.ticketCardRightSide, { width: "60%" }]}>
        <Text style={styles.ticketCardTextTitle} numberOfLines={1}>
          {item.name}
        </Text>
        <View>
          <Text style={styles.ticketCardTextSubTitle}>
            {item.address.city}, {item.address.province}
          </Text>
        </View>
        <View style={{ marginTop: 6, flexDirection: "row" }}>
          <Ionicons name="md-people" size={16} color={colors.BLUE_DEEP} />
          <Text style={[styles.ticketCardTextSubTitle, { marginLeft: 6 }]}>
            {(item.crowdedness ? item.crowdedness : 0) + "% ramai"}
          </Text>
        </View>
        <View style={{ marginTop: 6, flexDirection: "row" }}>
          <FontAwesome5 name="route" size={16} color={colors.BLUE_DEEP} />
          <Text style={[styles.ticketCardTextSubTitle, { marginLeft: 6 }]}>
            {item.distance ? item.distance.toFixed(2) + " km" : "memuat .."}
          </Text>
        </View>
      </View>
    </TouchableOpacityAndroid>
    <View
      style={{
        right: 18,
        top: 12,
        padding: 4,
      }}
    >
      <AntDesign name="hearto" size={20} color={colors.GREY} />
    </View>
  </View>
);

const mapStateToProps = (state: any) => {
  return {
    wisatas: state.wisatas,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  fetchNearby: bindActionCreators(fetchNearby, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(DicoverScreen);
