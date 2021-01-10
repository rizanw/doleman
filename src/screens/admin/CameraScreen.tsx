import { Camera } from "expo-camera";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { User } from "../../store/auth/types";
import { checkIn } from "../../store/wisata/actions";
import { BarCodeScanner } from "expo-barcode-scanner";

interface Props {
  auth: User;
  checkInByCode: (code: string) => any;
}

class CameraScreen extends React.Component<Props> {
  state = { cameraPermission: null, cameraStatus: null, scanned: false };

  async componentDidMount() {
    const { status } = await Camera.requestPermissionsAsync();
    this.setState({
      cameraPermission: status === "granted",
      cameraStatus: status,
    });
    console.log("camera status: ", status, this.state.cameraPermission);
  }

  handleBarCodeScanned({ data }: any) {
    this.setState({ scanned: true });
    const req = this.props.checkInByCode(data, this.props.auth.adminOn);
    req.then((data: { success: boolean; message: string | undefined }) => {
      console.log(data);
      if (data.success) {
        Alert.alert("Berhasil!", "Pengunjung ditambahkan.", [
          {
            text: "OK",
            onPress: () => this.setState({ scanned: false }),
          },
        ]);
        return;
      }
      Alert.alert("Gagal!", data.message, [
        { text: "OK", onPress: () => this.setState({ scanned: false }) },
      ]);
    });
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
        <BarCodeScanner
          onBarCodeScanned={
            this.state.scanned
              ? undefined
              : this.handleBarCodeScanned.bind(this)
          }
          style={StyleSheet.absoluteFillObject}
        />
      </View>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(CameraScreen);
