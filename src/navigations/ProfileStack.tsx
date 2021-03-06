import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/ProfileScreen";
import { colors } from "../resources/colors";
import TicketListScreen from "../screens/myticket/TicketListScreen";
import TicketDetailScreen from "../screens/myticket/TicketDetailScreen";
import PlaceListScreen from "../screens/myplace/PlaceListScreen";
import BookingStacks from "./BookingStack";
import { RouteProp } from "@react-navigation/native";
const Stack = createStackNavigator();

interface Props {
  route: RouteProp<any, any>;
}

export default function ProfileStacks({ route }: Props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: colors.BLUE_DEEP,
        headerTitleStyle: {
          color: colors.BLUE_DEEP,
        },
      }}
    >
      <Stack.Screen
        name="Profil"
        component={ProfileScreen}
        initialParams={route}
      />

      <Stack.Screen
        name="MyTickets"
        component={TicketListScreen}
        options={{
          title: "Tiket Saya",
        }}
      />
      <Stack.Screen
        name="MyTicketDetail"
        component={TicketDetailScreen}
        options={{
          headerTintColor: "black",
          headerStyle: { shadowColor: "black" },
          headerTitle: "",
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="MyPlaces"
        component={PlaceListScreen}
        options={{
          title: "Tempat Favorit",
        }}
      />
    </Stack.Navigator>
  );
}
