import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import { SimpleLineIcons, Feather } from "@expo/vector-icons"; 
import DicoverScreen from "../screens/DicoverScreen";
import ProfileStack from "./ProfileStack";
import { colors } from "../resources/colors";

const Tab = createBottomTabNavigator();

export default function MainTab() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: colors.GREEN_OCEAN,
      }}
    >
      <Tab.Screen
        name="Discover"
        component={DicoverScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <SimpleLineIcons name="compass" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Feather name="user" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
