import { Camera } from "expo-camera";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

class CameraScreen extends React.Component {
  state = { cameraPermission: null, cameraStatus: null };

  async componentDidMount() {
    const { status } = await Camera.requestPermissionsAsync();
    this.setState({
      cameraPermission: status === "granted",
      cameraStatus: status,
    });
    console.log("camera status: ", status, this.state.cameraPermission);
  }

  render() {
    console.log(this.state.cameraPermission);
    if (this.state.cameraPermission === null) {
      return <View />;
    }
    if (this.state.cameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={{ flex: 1 }}>
        <StatusBar style="dark" />
        <Camera style={{ flex: 1 }} type={Camera.Constants.Type.back}>
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(0, 0, 0, 0.6)",
            }}
          />
          <View
            style={{
              flex: 2,
              backgroundColor: "transparent",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "rgba(0, 0, 0, 0.6)",
              }}
            />
            <View
              style={{
                flex: 5,
                backgroundColor: "transparent",
              }}
            />
            <View
              style={{
                flex: 1,
                backgroundColor: "rgba(0, 0, 0, 0.6)",
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(0, 0, 0, 0.6)",
            }}
          />
        </Camera>
      </View>
    );
  }
}

export default CameraScreen;
