import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { colors } from "../resources/colors";
import MainTabs from "./MainTab";
import LoginTabs from "./LoginTab";
import PlaceTabs from "./PlaceTab";
import AdminStacks from "./AdminStack";
import BookingStacks from "./BookingStack";
import ProfileStacks from "./ProfileStack";

const Stack = createStackNavigator();

export default function MainStacks() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
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
          headerShown: true,
          headerTintColor: "white",
          headerBackTitleVisible: false,
          headerStyle: { shadowColor: "black" },
          headerTitle: "",
          headerTransparent: true,
        }}
      />
      <Stack.Screen name="Booking" component={BookingStacks} />
      <Stack.Screen name="Profile" component={ProfileStacks} />
    </Stack.Navigator>
  );
}
