import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
  ScrollView,
} from "react-native";
import { colors } from "../resources/colors";

const Tab = createMaterialTopTabNavigator();

export default function LoginTabs() {
  return (
    <KeyboardAvoidingView
      style={{ backgroundColor: "white", flex: 1 }}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={{
              alignItems: "center",
              backgroundColor: colors.WHITE,
              paddingTop: 40,
            }}
          >
            <Image
              source={require("../../assets/doleman.png")}
              style={{
                width: 180,
                height: 180,
                resizeMode: "contain",
              }}
            />
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
            name="Login"
            component={LoginScreen}
            options={{ tabBarLabel: "Masuk" }}
          />
          <Tab.Screen
            name="Register"
            component={RegisterScreen}
            options={{ tabBarLabel: "Daftar" }}
          />
        </Tab.Navigator>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
