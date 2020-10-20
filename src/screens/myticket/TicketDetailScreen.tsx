import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { styles } from "../../resources/styles";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "../../resources/colors";

class TicketDetailScreen extends React.Component {
  state = {};
  render() {
    return (
      <ScrollView style={[{ backgroundColor: "white" }]}>
        <Image
          source={require("../../../assets/jatim1.jpg")}
          style={{ width: "100%", height: 250, resizeMode: "cover" }}
        />
        <Text style={styles.ticketTitle}>Jawa Timur Park I</Text>
        <Image
          source={require("../../../assets/qrcode.png")}
          style={{
            width: 160,
            height: 160,
            resizeMode: "contain",
            alignSelf: "center",
          }}
        />
        <View
          style={{
            alignSelf: "center",
            flexDirection: "row",
            margin: 10,
            alignItems: "center",
          }}
        >
          <Text style={styles.ticketTitleCode}>Kode Booking </Text>
          <Text style={styles.ticketCode}>123456</Text>
        </View>
        <View style={styles.backgroundGrey}>
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.backgroundGreyText, { flex: 1 }]}>
              Tanggal
            </Text>
            <Text style={[styles.backgroundGreyText, { flex: 2 }]}>
              : Sabtu, 10 Oct 2020
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.backgroundGreyText, { flex: 1 }]}>
              Jumlah Orang
            </Text>
            <Text style={[styles.backgroundGreyText, { flex: 2 }]}>
              : 2 orang
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
