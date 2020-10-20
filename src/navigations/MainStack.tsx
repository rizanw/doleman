import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { colors } from "../resources/colors"; 
import MainTabs from "./MainTab";
import LoginTabs from "./LoginTab";

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
    </Stack.Navigator>
  );
}
