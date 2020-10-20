import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AdminTabs from "./AdminTab";
import CameraScreen from "../screens/admin/CameraScreen";
import { colors } from "../resources/colors";
const Stack = createStackNavigator();

export default function AdminStacks() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: colors.BLUE_DEEP,
      }}
    >
      <Stack.Screen
        name="Admin"
        component={AdminTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Camera"
        component={CameraScreen}
        options={{ title: "Scan QR" }}
      />
    </Stack.Navigator>
  );
}
