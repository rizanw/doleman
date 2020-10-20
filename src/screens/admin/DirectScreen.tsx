import React from "react";
import { View } from "react-native";
import Button from "../../components/Button";
import { styles } from "../../resources/styles";

class DirectScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{ flexDirection: "row", marginHorizontal: 12, marginTop: 24 }}
        >
          <Button label="Tambah Pengunjung" />
        </View>
      </View>
    );
  }
}

export default DirectScreen;
