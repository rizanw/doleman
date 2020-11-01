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
import { RouteProp } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

interface Props {
  route: RouteProp<any, any>;
}

export default function LoginTabs({ route }: Props) {
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
            initialParams={{ booking: route.params?.booking }}
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
