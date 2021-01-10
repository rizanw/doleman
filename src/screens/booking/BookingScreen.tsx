import React from "react";
import {
  Alert,
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "../../resources/styles";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import RNPickerSelect from "react-native-picker-select";
import { AntDesign } from "@expo/vector-icons";
import Button from "../../components/Button";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import { User } from "../../store/auth/types";
import { Ticket } from "../../store/ticket/types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { buyTicket } from "../../store/ticket/actions";

interface Props {
  navigation: NavigationProp<any, any>;
  route: RouteProp<any, any>;
  auth: User;
  buyTicket: (ticket: Ticket) => any;
}

class BookingScreen extends React.Component<Props> {
  state = {
    isDatePickerVisible: false,
    date: new Date(),
    ticket: 0,
    qty: 0,
    location: this.props.route.params?.item.name,
    ticketPrice: [],
  };

  showDatePicker = () => {
    this.setState({ isDatePickerVisible: true });
  };

  hideDatePicker = () => {
    this.setState({ isDatePickerVisible: false });
  };

  handleConfirm = (date: Date) => {
    if (date.getDate() < new Date().getDate()) {
      Alert.alert("Perhatian!", "Tidak bisa memilih hari yang telah berlalu", [
        { text: "OK", onPress: () => this.setState({ date: this.state.date }) },
      ]);
    } else {
      this.setState({ date: date });
    }
    this.hideDatePicker();
  };

  componentDidMount() {
    const price = this.props.route.params?.item.rerata_biaya
      .replace(/^\D+/g, "")
      .match(/\d/g)
      .join("")
      .slice(0, -2);
    this.setState({
      ticketPrice: [
        {
          label:
            "Tiket Regular (" +
            this.props.route.params?.item.rerata_biaya +
            ")",
          value: price,
        },
      ],
    });
  }

  buyTicket() {
    const ticket: Ticket = {
      user: this.props.auth.email,
      wisata: this.props.route.params?.item.name,
      code: "",
      date: this.state.date,
      quantity: this.state.qty,
      price: this.state.ticket,
      status: "UNPAID",
    };

    if (this.state.ticket == 0 || this.state.qty == 0) {
      Alert.alert(
        "Perhatikan!",
        "Pastikan Anda mengisi form dengan benar!",
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
      const req: any = this.props.buyTicket(ticket);
      req.then((data: any) => {
        console.log(data);
        this.props.navigation.navigate("Payment", {
          item: data,
        });
      });
    }
  }

  render() {
    return (
      <ScrollView style={[styles.container, { paddingTop: 24 }]}>
        <View style={{ marginHorizontal: 16 }}>
          <TouchableOpacity
            onPress={() => this.showDatePicker()}
            style={styles.datePickerButtonContainer}
          >
            <Text style={styles.datePickerButtonLabel}>
              {this.state.date.toDateString()}
            </Text>
            <AntDesign name="caretdown" size={16} color="#8E8E8E" />
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={this.state.isDatePickerVisible}
            mode="date"
            onConfirm={this.handleConfirm}
            onCancel={this.hideDatePicker}
          />
          <RNPickerSelect
            placeholder={{
              label: "Pilih Tiket",
              value: 0,
              color: "black",
            }}
            onValueChange={(value) => this.setState({ ticket: value })}
            items={this.state.ticketPrice}
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
          <RNPickerSelect
            placeholder={{
              label: "Pilih Jumlah Orang",
              value: 0,
              color: "black",
            }}
            onValueChange={(value) => this.setState({ qty: value })}
            items={[
              { label: "1 Orang", value: 1 },
              { label: "2 Orang", value: 2 },
              { label: "5 Orang", value: 5 },
              { label: "10 Orang", value: 10 },
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
        <View style={[styles.backgroundGrey, { marginHorizontal: 0 }]}>
          <Text style={styles.bookingTitle}>Detail Booking</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.bookingText}>Tujuan</Text>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <Text style={styles.bookingText}>{this.state.location}</Text>
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
            <Text style={styles.bookingText}>Tanggal</Text>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <Text style={styles.bookingText}>
                {this.state.date.toDateString()}
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
            <Text style={styles.bookingText}>
              {"Rp. " +
                this.state.ticket
                  .toString()
                  .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") +
                " x " +
                this.state.qty +
                " orang"}
            </Text>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <Text style={styles.bookingText}>
                {"Rp. " +
                  (this.state.ticket * this.state.qty)
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
                  (this.state.ticket * this.state.qty)
                    .toString()
                    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
              </Text>
            </View>
          </View>
        </View>
        <View style={{ paddingHorizontal: 12, marginTop: 48 }}>
          <Button label="Book" onPress={() => this.buyTicket()} />
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    auth: state.auth,
    tickets: state.tickets,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  buyTicket: bindActionCreators(buyTicket, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingScreen);
