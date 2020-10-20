import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/ProfileScreen";
import { colors } from "../resources/colors";
const Stack = createStackNavigator();

export default function ProfileStacks() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          color: colors.BLUE_DEEP,
        },
      }}
    >
      <Stack.Screen name="Profil" component={ProfileScreen} options={{}} />
    </Stack.Navigator>
  );
}
