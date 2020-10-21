import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { colors } from "../resources/colors";
import MainTabs from "./MainTab";
import LoginTabs from "./LoginTab";
import PlaceTabs from "./PlaceTab";
import AdminStacks from "./AdminStack";

const Stack = createStackNavigator();

export default function MainStacks() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          color: colors.BLUE_DEEP,
        },
      }}
    >
      <Stack.Screen
        name="MainTab"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Admin"
        component={AdminStacks}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Place"
        component={PlaceTabs}
        options={{
          headerTintColor: "white",
          headerBackTitleVisible: false,
          headerStyle: { shadowColor: "black" },
          headerTitle: "",
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}
