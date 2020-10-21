import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { colors } from "../resources/colors";
import BookingScreen from "../screens/booking/BookingScreen";
import ConfirmationScreen from "../screens/booking/ConfirmationScreen";
import PaymentScreen from "../screens/booking/PaymentScreen";
import TicketListScreen from "../screens/myticket/TicketListScreen";

const Stack = createStackNavigator();

export default function BookingStacks() {
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
        name={"Booking"}
        component={BookingScreen}
        options={{ title: "Booking" }}
      />
      <Stack.Screen
        name={"Payment"}
        component={PaymentScreen}
        options={{ title: "Pembayaran" }}
      />
      <Stack.Screen
        name={"Confirmation"}
        component={ConfirmationScreen}
        options={{ headerShown: false }}
      /> 
    </Stack.Navigator>
  );
}
