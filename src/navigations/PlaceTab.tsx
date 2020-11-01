import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import Button from "../components/Button";
import { colors } from "../resources/colors";
import { styles } from "../resources/styles";
import PlaceGalleryScreen from "../screens/place/PlaceGalleryScreen";
import PlaceInfoScreen from "../screens/place/PlaceInfoScreen";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationProp, RouteProp } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

interface Props {
  navigation: NavigationProp<any, any>;
  route: RouteProp<any, any>;
}

export default function PlaceTabs({ navigation, route }: Props) {
  return (
    <ScrollView
      style={{ backgroundColor: "white", flex: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <Image
        source={{ uri: route.params?.item.img }}
        style={{ width: "100%", height: 250, resizeMode: "cover" }}
      />
      <View style={{ flexDirection: "row" }}>
        <View style={{ marginTop: 24, marginLeft: 24, flex: 2 }}>
          <Text style={styles.placeTitle}>{route.params?.item.name}</Text>
          <View
            style={{
              marginTop: 6,
              flexDirection: "row",
              alignContent: "center",
            }}
          >
            <Ionicons name="md-people" size={18} color={colors.BLUE_DEEP} />
            <Text style={styles.placeSubTitle}>
              {route.params?.item.percantage}% ramai
            </Text>
          </View>
        </View>
        <View
          style={{
            margin: 24,
            flex: 1,
            alignContent: "flex-end",
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Booking", { item: route.params?.item })
            }
            style={{
              borderColor: colors.BITTERSWEET,
              borderWidth: 2,
              padding: 4,
              paddingHorizontal: 10,
              borderRadius: 12,
            }}
          >
            <Text
              style={{
                fontSize: 10,
                fontWeight: "bold",
                letterSpacing: 1,
                color: colors.BITTERSWEET,
              }}
            >
              BOOK
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Tab.Navigator
        tabBarOptions={{
          style: {
            borderBottomColor: colors.BLUE_NEON,
            borderBottomWidth: 2,
          },
          indicatorStyle: { backgroundColor: colors.BLUE_NEON },
          activeTintColor: colors.BLUE_NEON,
          inactiveTintColor: colors.BITTERSWEET,
        }}
      >
        <Tab.Screen
          name="Info"
          component={PlaceInfoScreen}
          initialParams={{ item: route.params?.item }}
        />
        <Tab.Screen name="Gallery" component={PlaceGalleryScreen} />
      </Tab.Navigator>
    </ScrollView>
  );
}
