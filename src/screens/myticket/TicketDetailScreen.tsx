import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { styles } from "../../resources/styles";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "../../resources/colors";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import QRCode from "react-native-qrcode-svg";

interface Props {
  navigation: NavigationProp<any, any>;
  route: RouteProp<any, any>;
}

class TicketDetailScreen extends React.Component<Props> {
  state = {};

  render() {
    console.log(this.props.route.params?.item.status)
    var date = new Date(this.props.route.params?.item.date);
    var weekday = new Array(7);
    weekday[0] = "Minggu";
    weekday[1] = "Senin";
    weekday[2] = "Selasa";
    weekday[3] = "Rabu";
    weekday[4] = "Kamis";
    weekday[5] = "Jumat";
    weekday[6] = "Sabtu";
    var dateDay = weekday[date.getDay()];
    var month = new Array();
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "Mei";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Agu";
    month[8] = "Sep";
    month[9] = "Okt";
    month[10] = "Nov";
    month[11] = "Des";
    var dateMonth = month[date.getMonth()];

    return (
      <ScrollView style={[{ backgroundColor: "white" }]}>
        <Image
          source={{ uri: this.props.route.params?.item.wisata.images[0] }}
          style={{ width: "100%", height: 250, resizeMode: "cover" }}
        />
        <Text style={styles.ticketTitle}>
          {this.props.route.params?.item.wisata.name}
        </Text>
        <View style={{ alignItems: "center" }}>
          <QRCode
            value={this.props.route.params?.item.code}
            size={180}
            logoBackgroundColor="transparent"
            logo={require("../../../assets/icon.png")}
          />
        </View>
        <View
          style={{
            alignSelf: "center",
            flexDirection: "row",
            margin: 10,
            alignItems: "center",
          }}
        >
          <Text style={styles.ticketTitleCode}>Kode Booking </Text>
          <Text style={styles.ticketCode}>
            {this.props.route.params?.item.code}
          </Text>
        </View>
        <View style={styles.backgroundGrey}>
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.backgroundGreyText, { flex: 1 }]}>
              Tanggal
            </Text>
            <Text style={[styles.backgroundGreyText, { flex: 2 }]}>
              : {dateDay}, {date.getDate()} {dateMonth} {date.getFullYear()}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.backgroundGreyText, { flex: 1 }]}>
              Jumlah Orang
            </Text>
            <Text style={[styles.backgroundGreyText, { flex: 2 }]}>
              : {this.props.route.params?.item.quantity} orang
            </Text>
          </View>
        </View>
        <View style={styles.backgroundGrey}>
          <View style={{ flexDirection: "row" }}>
            <FontAwesome name="warning" size={16} color={colors.GREY} />
            <Text
              style={[
                styles.backgroundGreyText,
                {
                  fontSize: 14,
                  fontWeight: "bold",
                  marginLeft: 4,
                  marginBottom: 8,
                },
              ]}
            >
              Tetap Patuhi Protokol Kesehatan!
            </Text>
          </View>
          <Text style={styles.backgroundGreyText}>
            1. Gunakan masker dan bawalah masker cadangan.
          </Text>
          <Text style={styles.backgroundGreyText}>
            2. Bersihkan mangan setiap saat menggunakan alcohol-based sanitizer
            atau air dan sabun.
          </Text>
          <Text style={styles.backgroundGreyText}>
            3. Jaga jarak dengan orang lebih dari 6 langkah (2 meter).
          </Text>
          <Text style={styles.backgroundGreyText}>
            4. Etika batuk, selalu tutup dengan sisi dalam siku.
          </Text>
          <Text style={styles.backgroundGreyText}>
            5. Hindari menyentuh mulut, hidung, dan mata.
          </Text>
          <Text style={styles.backgroundGreyText}>
            6. Batalkan perjalanan jika kurang sehat.
          </Text>
        </View>
      </ScrollView>
    );
  }
}

export default TicketDetailScreen;
