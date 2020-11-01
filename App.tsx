import React from "react";
import { SafeAreaView, View } from "react-native";
import Doleman from "./src/App";
import * as Location from "expo-location";
import { Provider } from "react-redux";
import { persistor, store } from "./src/store";
import { PersistGate } from "redux-persist/integration/react";

export default class App extends React.Component {
  async componentDidMount() {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      console.log(status);
    }
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View style={{ flex: 1 }}>
            <Doleman />
          </View>
        </PersistGate>
      </Provider>
    );
  }
}
