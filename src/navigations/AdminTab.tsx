import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { colors } from "../resources/colors";
import { styles } from "../resources/styles";
import DirectScreen from "../screens/admin/DirectScreen";
import OnlineScreen from "../screens/admin/OnlineScreen";

const Tab = createMaterialTopTabNavigator();

export default function AdminTabs() {
  return (
    <KeyboardAvoidingView
      style={{ backgroundColor: "white" }}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Image
          source={require("../../assets/jatim1.jpg")}
          style={{ width: "100%", height: 200, resizeMode: "cover" }}
        />
        <View style={{ backgroundColor: "white" }}>
          <Text style={[styles.ticketTitle, { marginVertical: 10 }]}>
            Jawa Timur Park I
          </Text>
          <View style={[styles.backgroundGrey, { marginHorizontal: 0 }]}>
            <Text style={styles.backgroundGreyText}>
              Statistik Hari Ini ( Minggu, 11 Oct 2020)
            </Text>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1, justifyContent: "center" }}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={[styles.backgroundGreyText, { flex: 2 }]}>
                    Pengunjung Masuk
                  </Text>
                  <Text style={[styles.backgroundGreyText, { flex: 1 }]}>
                    20
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={[styles.backgroundGreyText, { flex: 2 }]}>
                    Pengunjung Keluar
                  </Text>
                  <Text style={[styles.backgroundGreyText, { flex: 1 }]}>
                    20
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={[styles.backgroundGreyText, { flex: 2 }]}>
                    Total Pengunjung
                  </Text>
                  <Text style={[styles.backgroundGreyText, { flex: 1 }]}>
                    40
                  </Text>
                </View>
              </View>
              <View style={{ flex: 1, justifyContent: "center" }}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={[styles.backgroundGreyText, { flex: 2 }]}>
                    Pengunjung Maks
                  </Text>
                  <Text style={[styles.backgroundGreyText, { flex: 1 }]}>
                    1000
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

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
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
