import React from "react";
import { Text, View } from "react-native";
import { styles } from "../../resources/styles";
import { Ionicons, AntDesign, Entypo } from "@expo/vector-icons";
import { colors } from "../../resources/colors";

class PlaceInfoScreen extends React.Component {
  state = {};
  render() {
    return (
      <View style={[styles.container, { paddingVertical: 20 }]}>
        <View style={styles.placeInfoContainer}>
          <View style={{ marginRight: 12 }}>
            <Ionicons
              name="ios-information-circle-outline"
              size={28}
              color={colors.GREEN_OCEAN}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.placeInfoTitle}>Alamat dan Telepon</Text>
            <Text numberOfLines={2} style={styles.placeInfoText}>
              Jl. Kertanegara No.148, Candirenggo, Kec. Singosari, Malang, Jawa
              Timur
            </Text>
            <Text style={styles.placeInfoText}>+62341595007</Text>
          </View>
        </View>
        <View style={styles.placeInfoContainer}>
          <View style={{ marginRight: 12 }}>
            <AntDesign
              name="clockcircleo"
              size={23}
              color={colors.GREEN_OCEAN}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.placeInfoTitle}>Jam Operasi</Text>
            <Text style={styles.placeInfoText}>Setiap Hari</Text>
            <Text style={styles.placeInfoText}>10.00 s.d. 18.00</Text>
          </View>
        </View>
        <View style={styles.placeInfoContainer}>
          <View style={{ marginRight: 12 }}>
            <Entypo name="ticket" size={24} color={colors.GREEN_OCEAN} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.placeInfoTitle}>Rerata Harga</Text>
            <Text style={styles.placeInfoText}>Rp. 50.000 - Rp. 500.000</Text>
          </View>
        </View>
        <View style={styles.placeInfoContainer}>
          <View style={{ flex: 1 }}>
            <Text style={styles.placeInfoTitle}>Deskripsi</Text>
            <Text numberOfLines={2} style={styles.placeInfoDescriptionTitle}>
              Jawa Timur Park I
            </Text>
            <Text style={styles.placeInfoText}>
              Candi Singasari merupakan candi Hindu - Buddha peninggalan
              bersejarah dari Kerajaan Singasari berlokasi di Desa Candirenggo,
              Kecamatan Singosari, Kabupaten Malang, Jawa Timur, Indonesia,
              sekitar 10 km dari Kota Malang. Candi ini berada pada lembah di
              antara Pegunungan Tengger dan Gunung Arjuna pada ketinggian 512m
              di atas permukaan laut. Cara pembuatan Candi Singasari ini
              menggunakan sistem menumpuk batu andesit hingga ketinggian
              tertentu selanjutnya diteruskan dengan mengukir dari atas baru
              turun ke bawah.
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default PlaceInfoScreen;
