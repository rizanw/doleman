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
import { NavigationProp } from "@react-navigation/native";

interface Props {
  navigation: NavigationProp<any, any>;
}

class BookingScreen extends React.Component<Props> {
  state = {
    isDatePickerVisible: false,
    date: new Date().toDateString(),
    ticket: 0,
    qty: 0,
    location: "Jawa Timur Park I",
  };

  showDatePicker = () => {
    this.setState({ isDatePickerVisible: true });
  };

  hideDatePicker = () => {
    this.setState({ isDatePickerVisible: false });
  };

  handleConfirm = (date: Date) => {
    console.warn("A date has been picked: ", date);
    this.setState({ date: date.toDateString() });
    this.hideDatePicker();
  };

  render() {
    return (
      <ScrollView style={[styles.container, { paddingTop: 24 }]}>
        <View style={{ marginHorizontal: 16 }}>
          <TouchableOpacity
            onPress={() => this.showDatePicker()}
            style={styles.datePickerButtonContainer}
          >
            <Text style={styles.datePickerButtonLabel}>{this.state.date}</Text>
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
              value: null,
              color: "black",
            }}
            onValueChange={(value) => this.setState({ ticket: value })}
            items={[
              { label: "Tiket Regular (Rp. 50.000)", value: 50000 },
              { label: "Tiket VIP (Rp. 100.000)", value: 100000 },
              { label: "Tiket Premium (Rp. 150.000)", value: 150000 },
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
          <RNPickerSelect
            placeholder={{
              label: "Pilih Jumlah Orang",
              value: null,
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
              <Text style={styles.bookingText}>{this.state.date}</Text>
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
        <View
          style={{
            width: "100%",
            backgroundColor: "white",
            position: "absolute",
            top: Dimensions.get("screen").height - 180,
            right: 0,
            paddingHorizontal: 12,
          }}
        >
          <Button
            label="Book"
            onPress={() => {
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
                this.props.navigation.navigate("Payment", {
                  ticket: this.state.ticket,
                  qty: this.state.qty,
                });
              }
            }}
          />
        </View>
      </ScrollView>
    );
  }
}

export default BookingScreen;
