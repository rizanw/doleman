import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import { styles } from "../../resources/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../resources/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationProp } from "@react-navigation/native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchByUser } from "../../store/ticket/actions";
import { User } from "../../store/auth/types";
import { Ticket, TicketList } from "../../store/ticket/types";

interface ItemProps {
  item: Ticket;
  navigation: NavigationProp<any, any>;
}

const Item = ({ item, navigation }: ItemProps) => (
  <TouchableOpacity
    onPress={() => navigation.navigate("MyTicketDetail", { item: item })}
    style={styles.ticketCard}
    activeOpacity={0.7}
  >
    <View style={styles.ticketCardLeftSide}>
      <Image
        source={require("../../../assets/doleman.png")}
        style={{
          width: 120,
          height: 120,
          resizeMode: "contain",
        }}
      />
    </View>
    <View style={styles.ticketCardRightSide}>
      <Text style={styles.ticketCardTextTitle}>{item.wisata.name}</Text>
      <View style={{ marginTop: 6 }}>
        <Text style={styles.ticketCardTextSubTitle}>
          {item.wisata.address.city}, {item.wisata.address.province}
        </Text>
        <Text style={styles.ticketCardTextSubTitle}>
          {new Date(item.date).getDate()}/{new Date(item.date).getMonth() + 1}/
          {new Date(item.date).getFullYear()}
        </Text>
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 6 }}
      >
        <MaterialIcons name="people" size={16} color={colors.BLUE_DEEP} />
        <Text style={[styles.ticketCardTextSubTitle, { marginLeft: 4 }]}>
          {item.quantity + " tiket"}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

interface Props {
  navigation: NavigationProp<any, any>;
  auth: User;
  tickets: TicketList;
  fetchByUser: (id: string) => {};
}

class TicketListScreen extends React.Component<Props> {
  state = {
    data: this.props.tickets.tickets,
    refreshing: false,
  };

  async componentDidMount() {
    var req = await this.props.fetchByUser(this.props.auth.email);
    if (req) {
      this.setState({ data: req });
    }
  }

  async onRefresh() {
    this.setState({ refreshing: true });
    var req = await this.props.fetchByUser(this.props.auth.email);
    this.setState({ data: req });
    this.setState({ refreshing: false });
  }

  render() {
    return (
      <View style={{ backgroundColor: "white", flex: 1 }}>
        <FlatList
          data={this.state.data.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateB.getTime() - dateA.getTime();
          })}
          refreshing={this.state.refreshing}
          onRefresh={() => this.onRefresh()}
          keyExtractor={(item) => item.code}
          ListEmptyComponent={() => (
            <Text style={{ textAlign: "center" }}>Tidak ada tiket</Text>
          )}
          renderItem={({ item }) => {
            return <Item item={item} navigation={this.props.navigation} />;
          }}
          style={{ paddingHorizontal: 16, paddingTop: 18 }}
        />
      </View>
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
  fetchByUser: bindActionCreators(fetchByUser, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketListScreen);
