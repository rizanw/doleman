import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import BottomSheet from "reanimated-bottom-sheet";

const renderContent = () => (
  <View
    style={{
      backgroundColor: "white",
      padding: 16,
      height: Dimensions.get("screen").height - 200,
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

  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle} />

        <BottomSheet
          ref={this.sheetRef}
          initialSnap={2}
          snapPoints={[Dimensions.get("screen").height - 200, 220, 100]}
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
