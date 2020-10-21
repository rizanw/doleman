import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import BottomSheet from "reanimated-bottom-sheet";
import * as Location from "expo-location";
import { TouchableOpacity } from "react-native-gesture-handler";

const renderContent = () => (
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
  </View>
);

export default class DicoverScreen extends React.Component {
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
          renderContent={renderContent}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
