import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React, { useEffect, useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from "react-native";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { colors } from "../resources/colors";
import { styles } from "../resources/styles";
import DirectScreen from "../screens/admin/DirectScreen";
import OnlineScreen from "../screens/admin/OnlineScreen";
import ProgressCircle from "react-native-progress-circle";
import { useDispatch, useSelector } from "react-redux";
import { fetchStatistic, fetchWisata } from "../store/wisata/actions";
import { User } from "../store/auth/types";
import { AppState } from "../store";
import { logout } from "../store/auth/actions";
import { Wisata } from "../store/wisata/types";
import { NavigationProp } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createMaterialTopTabNavigator();

const wait = (timeout: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

interface Props {
  navigation: NavigationProp<any, any>;
}

export default function AdminTabs({ navigation }: Props) {
  const user: User = useSelector((state: AppState) => state.auth);
  const wisata: Wisata = useSelector((state: AppState) => state.wisata);
  const [masuk, setMasuk] = useState(wisata.in ? wisata.in : 0);
  const [keluar, setKeluar] = useState(wisata.total ? wisata.total - masuk : 0);
  const [maks, setMaks] = useState(wisata.capacity ? wisata.capacity : 0);
  const [percentage, setPercentage] = useState((masuk / maks) * 100);
  const [refreshing, setRefreshing] = React.useState(false);
  const dispatch = useDispatch();

  const forceRender = (data: any) => {
    console.log(data);
    setMasuk(data.in);
    setKeluar(data.total - data.in);
    setMaks(data.capacity);
    setPercentage((masuk / maks) * 100);
  };

  useEffect(() => {
    setMasuk(wisata.in ? wisata.in : 0);
    setKeluar(wisata.total ? wisata.total - masuk : 0);
    setMaks(wisata.capacity ? wisata.capacity : 0);
    setPercentage((masuk / maks) * 100);
  }, []);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    //@ts-ignore
    let req = await dispatch(fetchWisata(user.adminOn));
    //@ts-ignore
    let req1: any = dispatch(fetchStatistic(user.adminOn));
    req1.then((data: any) => {
      setMasuk(data.in);
      setKeluar(data.total - data.in);
      setMaks(data.capacity);
      setPercentage((masuk / maks) * 100);
      console.log(percentage);
    });

    //@ts-ignore
    if (req.success) {
      setRefreshing(false);
      //@ts-ignore
    } else {
      wait(2000).then(() => setRefreshing(false));
    }
  }, []);

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
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Image
          source={{ uri: wisata.images[1] }}
          style={{ width: "100%", height: 160, resizeMode: "cover" }}
        />
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
          style={{ backgroundColor: "white" }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={[styles.ticketTitle, { marginVertical: 10, flex: 1 }]}>
              {wisata.name}
            </Text>
            <TouchableOpacity
              onPress={() => {
                dispatch(logout());
                navigation.reset({
                  index: 0,
                  routes: [{ name: "MainTab" }],
                });
              }}
            >
              <MaterialCommunityIcons
                name="logout"
                size={24}
                color={colors.BITTERSWEET}
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.backgroundGrey, { marginHorizontal: 0 }]}>
            <Text style={styles.backgroundGreyText}>
              Statistik Hari Ini ({hari}, {date})
            </Text>
            <View
              style={{
                flexDirection: "row",
              }}
            >
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
                    percent={percentage}
                    radius={40}
                    borderWidth={6}
                    color={colors.BLUE_NEON}
                    shadowColor={"#e1e1e1"}
                    bgColor={"#F7F7F7"}
                  >
                    <Text style={{ fontSize: 18 }}>
                      {percentage.toFixed(1) + "%"}
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
          <Tab.Screen
            name="Direct"
            component={DirectScreen}
            initialParams={{ onRefresh: forceRender }}
          />
          <Tab.Screen
            name="Online"
            component={OnlineScreen}
            initialParams={{ onRefresh: forceRender }}
          />
        </Tab.Navigator>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

//91D966