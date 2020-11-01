import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React, { useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { colors } from "../resources/colors";
import { styles } from "../resources/styles";
import DirectScreen from "../screens/admin/DirectScreen";
import OnlineScreen from "../screens/admin/OnlineScreen";
import ProgressCircle from "react-native-progress-circle";

const DATA = [
  {
    masuk: 120,
    keluar: 20,
    maks: 1000,
  },
];

const Tab = createMaterialTopTabNavigator();

export default function AdminTabs() {
  const [masuk, setMasuk] = useState(260);
  const [keluar, setKeluar] = useState(20);
  const [maks, setMaks] = useState(1000);

  var dt = new Date();
  function getDay() {
    switch (dt.getDay()) {
      case 1:
        return "Senin";
      case 2:
        return "Selasa";
      case 3:
        return "Rabu";
      case 4:
        return "Kamis";
      case 5:
        return "Jumat";
      case 6:
        return "Sabtu";
      default:
        return "Minggu";
    }
  }
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ];

  const hari = getDay();
  const date =
    dt.getDate() + " " + monthNames[dt.getMonth()] + " " + dt.getFullYear();

  return (
    <KeyboardAvoidingView
      style={{ backgroundColor: "white", flex: 1 }}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <Image
        source={require("../../assets/jatim1.jpg")}
        style={{ width: "100%", height: 160, resizeMode: "cover" }}
      />
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        style={{ backgroundColor: "white" }}
      >
        <Text style={[styles.ticketTitle, { marginVertical: 10 }]}>
          Jawa Timur Park I
        </Text>
        <View style={[styles.backgroundGrey, { marginHorizontal: 0 }]}>
          <Text style={styles.backgroundGreyText}>
            Statistik Hari Ini ({hari}, {date})
          </Text>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <View style={{ flexDirection: "row" }}>
                <Text style={[styles.backgroundGreyText, { flex: 2 }]}>
                  Pengunjung Masuk
                </Text>
                <Text style={[styles.backgroundGreyText, { flex: 1 }]}>
                  {masuk}
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={[styles.backgroundGreyText, { flex: 2 }]}>
                  Pengunjung Keluar
                </Text>
                <Text style={[styles.backgroundGreyText, { flex: 1 }]}>
                  {keluar}
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={[styles.backgroundGreyText, { flex: 2 }]}>
                  Total Pengunjung
                </Text>
                <Text style={[styles.backgroundGreyText, { flex: 1 }]}>
                  {keluar + masuk}
                </Text>
              </View>
            </View>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <View style={{ alignItems: "center" }}>
                <ProgressCircle
                  percent={(masuk / maks) * 100}
                  radius={40}
                  borderWidth={6}
                  color={colors.BLUE_NEON}
                  shadowColor={"#e1e1e1"}
                  bgColor={"#F7F7F7"}
                >
                  <Text style={{ fontSize: 18 }}>
                    {(masuk / maks) * 100 + "%"}
                  </Text>
                </ProgressCircle>
                <Text style={[styles.backgroundGreyText, { marginTop: 10 }]}>
                  Pengunjung Maks : {maks}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <Tab.Navigator
        tabBarOptions={{
          style: {
            borderBottomColor: colors.GREEN_OCEAN,
            borderBottomWidth: 2,
          },
          indicatorStyle: { backgroundColor: colors.GREEN_OCEAN },
          activeTintColor: colors.GREEN_OCEAN,
          inactiveTintColor: colors.BITTERSWEET,
        }}
      >
        <Tab.Screen name="Direct" component={DirectScreen} options={{}} />
        <Tab.Screen name="Online" component={OnlineScreen} />
      </Tab.Navigator>
    </KeyboardAvoidingView>
  );
}
