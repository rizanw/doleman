import {
  CommonActions,
  NavigationProp,
  RouteProp,
} from "@react-navigation/native";
import React from "react";
import { Alert, Dimensions, ScrollView, Text, View } from "react-native";
import { styles } from "../../resources/styles";
import RNPickerSelect from "react-native-picker-select";
import { AntDesign } from "@expo/vector-icons";
import Button from "../../components/Button";
import { AuthState } from "../../store/auth/types";
import { connect } from "react-redux";
import { updateAuth } from "../../store/auth/actions";
import { bindActionCreators } from "redux";

interface Props {
  navigation: NavigationProp<any, any>;
  route: RouteProp<any, any>;
  authState: AuthState;
}

class PaymentScreen extends React.Component<Props> {
  state = {
    paymentGateway: null,
  };
  render() {
    return (
      <ScrollView style={[styles.container]}>
        <View style={[styles.backgroundGrey, { marginHorizontal: 0 }]}>
          <Text style={styles.bookingTitle}>Ringkasan Tagihan</Text>
          <View
            style={{
              flexDirection: "row",
              borderBottomWidth: 0.8,
              borderColor: "#CCCCCC",
              marginBottom: 10,
            }}
          >
            <Text style={styles.bookingText}>
              {"Rp. " +
                this.props.route.params?.ticket
                  .toString()
                  .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") +
                " x " +
                this.props.route.params?.qty +
                " orang"}
            </Text>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <Text style={styles.bookingText}>
                {"Rp. " +
                  (
                    this.props.route.params?.ticket *
                    this.props.route.params?.qty
                  )
                    .toString()
                    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              borderBottomWidth: 0.8,
              borderColor: "#CCCCCC",
              marginBottom: 10,
            }}
          >
            <Text style={styles.bookingText}>Total</Text>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <Text style={styles.bookingText}>
                {"Rp. " +
                  (
                    this.props.route.params?.ticket *
                    this.props.route.params?.qty
                  )
                    .toString()
                    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
              </Text>
            </View>
          </View>
        </View>
        <View style={{ margin: 16 }}>
          <Text style={styles.bookingTitle}>Metode Pembayaran</Text>

          <RNPickerSelect
            placeholder={{
              label: "Pilih Metode Pembayaran",
              value: null,
              color: "black",
            }}
            onValueChange={(value) => this.setState({ paymentGateway: value })}
            items={[
              { label: "OVO", value: "OVO" },
              { label: "KlikAja", value: "KlikAja" },
              { label: "GoPay", value: "GoPay" },
            ]}
            style={{
              placeholder: styles.datePickerButtonLabel,
              inputIOS: styles.pickerContainer,
              inputAndroid: styles.pickerContainer,
              iconContainer: styles.pickerIconContainer,
            }}
            Icon={() => {
              return <AntDesign name="caretdown" size={16} color="#8E8E8E" />;
            }}
          />
        </View>
        <View style={{ paddingHorizontal: 12, marginTop: 48 }}>
          <Button
            label="Bayar"
            onPress={() => {
              if (this.state.paymentGateway == null) {
                Alert.alert(
                  "Perhatikan!",
                  "Pilih Metode Pembayaran dengan benar!",
                  [
                    {
                      text: "Ok",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel",
                    },
                  ],
                  { cancelable: false }
                );
              } else {
                Alert.alert(
                  "Konfirmasi Ulang",
                  "Apakah anda yakin akan membayar dengan " +
                    this.state.paymentGateway +
                    " ?",
                  [
                    {
                      text: "Tidak",
                      style: "default",
                    },
                    {
                      text: "Iya",
                      style: "cancel",
                      onPress: () => {
                        if (this.props.authState.isLoggedIn) {
                          this.props.navigation.navigate("Confirmation");
                        } else {
                          this.props.navigation.dispatch(
                            CommonActions.reset({
                              index: 0,
                              routes: [{ name: "MainTab" }],
                            })
                          );
                          this.props.navigation.dispatch(
                            CommonActions.reset({
                              index: 1,
                              routes: [{ name: "ProfileStack" }],
                            })
                          );
                          this.props.navigation.navigate("LoginTab", {
                            booking: true,
                          });
                        }
                      },
                    },
                  ],
                  { cancelable: false }
                );
              }
            }}
          />
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    authState: state.authState,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  updateAuth: bindActionCreators(updateAuth, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentScreen);
