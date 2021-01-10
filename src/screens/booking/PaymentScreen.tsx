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
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { User } from "../../store/auth/types";
import { updateStatusTicket } from "../../store/ticket/actions";

interface Props {
  navigation: NavigationProp<any, any>;
  route: RouteProp<any, any>;
  auth: User;
  updateStatusTicket: (code: string, status: string) => any;
}

class PaymentScreen extends React.Component<Props> {
  state = {
    paymentGateway: null,
    price: 0,
    quantity: 0,
  };

  componentDidMount() {
    this.setState({
      price: this.props.route.params?.item.price,
      quantity: this.props.route.params?.item.quantity,
    });
  }

  pay() {
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
              const req: any = this.props.updateStatusTicket(
                this.props.route.params?.item.code,
                "CONFIRMED"
              );
              req.then((data: any) => {
                console.log(data);
                this.props.navigation.navigate("Confirmation", {
                  item: data,
                  code: this.props.route.params?.item.code,
                });
              });
            },
          },
        ],
        { cancelable: false }
      );
    }
  }

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
                this.state.price
                  .toString()
                  .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") +
                " x " +
                this.state.quantity +
                " orang"}
            </Text>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <Text style={styles.bookingText}>
                {"Rp. " +
                  (this.state.price * this.state.quantity)
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
                  (this.state.price * this.state.quantity)
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
          <Button label="Bayar" onPress={() => this.pay()} />
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  updateStatusTicket: bindActionCreators(updateStatusTicket, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentScreen);
