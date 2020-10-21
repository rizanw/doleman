import React from "react";
import MapView from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import BottomSheet from "reanimated-bottom-sheet";
import * as Location from "expo-location";
import { NavigationProp } from "@react-navigation/native";
import { styles } from "../resources/styles";
import { colors } from "../resources/colors";
import { AntDesign, Ionicons, FontAwesome5 } from "@expo/vector-icons";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    name: "Jawa Timur Park I",
    location: "Batu, Malang",
    percantage: 10,
    distance: "5 km",
  },
];

interface Props {
  navigation: NavigationProp<any, any>;
}

export default class DicoverScreen extends React.Component<Props> {
  sheetRef = null;
  state = {
    errorMsg: "",
    mapRegion: undefined,
  };

  async componentDidMount() {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      this.setState({ errorMsg: "Permission to access location was denied" });
    }

    await this._getCurrentLocation();
  }

  async _getCurrentLocation() {
    let location = await Location.getCurrentPositionAsync({});
    this.setState({
      mapRegion: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.08,
        longitudeDelta: 0.04,
      },
    });
  }

  _handleMapRegionChange(mapRegion: any) {
    console.log(mapRegion);
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
      <View style={styles.container}>
        <MapView
          showsUserLocation={true}
          style={styles.mapStyle}
          region={this.state.mapRegion}
          onRegionChange={this._handleMapRegionChange.bind(this)}
        />
        <View style={{ position: "absolute", top: 24, right: 4 }}>
          <TouchableOpacity
            onPress={async () => await this._getCurrentLocation()}
          >
            <Image
              source={require("../../assets/doleman.png")}
              style={{ width: 100, height: 100, resizeMode: "contain" }}
            />
          </TouchableOpacity>
          <Text>{text}</Text>
        </View>
        <BottomSheet
          ref={this.sheetRef}
          initialSnap={2}
          snapPoints={[Dimensions.get("screen").height - 140, 220, 140]}
          borderRadius={14}
          renderContent={this.renderContent.bind(this)}
        />
      </View>
    );
  }

  // Render Content Bottom Sheet
  renderContent = () => (
    <View
      style={{
        backgroundColor: "white",
        padding: 16,
        height: Dimensions.get("screen").height - 140,
        alignItems: "center",
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
      <Text style={{ fontSize: 18, fontWeight: "bold", color: "#777777" }}>
        Jelajah sekitar
      </Text>
      <FlatList
        data={DATA}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => {
          return <Item item={item} navigation={this.props.navigation} />;
        }}
        style={{ width: "100%", marginTop: 24 }}
      />
    </View>
  );
}

interface ItemProps {
  item: any;
  navigation: NavigationProp<any, any>;
}

const Item = ({ item, navigation }: ItemProps) => (
  <TouchableOpacity
    onPress={() => navigation.navigate("Place")}
    style={styles.ticketCard}
    activeOpacity={0.7}
  >
    <View style={styles.ticketCardLeftSide}>
      <Image
        source={require("../../assets/jatim1.jpg")}
        style={{
          width: 120,
          height: 120,
          resizeMode: "cover",
        }}
      />
    </View>
    <View style={styles.ticketCardRightSide}>
      <View style={{ flexDirection: "row", flex: 1 }}>
        <View style={{ flex: 3 }}>
          <Text style={styles.ticketCardTextTitle}>{item.name}</Text>
          <View style={{ marginTop: 6 }}>
            <Text style={styles.ticketCardTextSubTitle}>{item.location}</Text>
          </View>
          <View style={{ marginTop: 6, flexDirection: "row" }}>
            <Ionicons name="md-people" size={16} color={colors.BLUE_DEEP} />
            <Text style={[styles.ticketCardTextSubTitle, { marginLeft: 6 }]}>
              {item.percantage + "% ramai"}
            </Text>
          </View>
          <View style={{ marginTop: 6, flexDirection: "row" }}>
            <FontAwesome5 name="route" size={16} color={colors.BLUE_DEEP} />
            <Text style={[styles.ticketCardTextSubTitle, { marginLeft: 6 }]}>
              {item.distance}
            </Text>
          </View>
        </View>
        <View style={{ flex: 0.5, alignItems: "flex-end" }}>
          <AntDesign name="hearto" size={20} color={colors.GREY} />
        </View>
      </View>
    </View>
  </TouchableOpacity>
);
