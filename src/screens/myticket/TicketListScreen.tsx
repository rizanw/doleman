import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import { styles } from "../../resources/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../resources/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationProp } from "@react-navigation/native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    name: "Jawa Timur Park I",
    location: "Batu, Malang",
    date: "10/05/2021",
    tikets: "2",
  },
];

interface ItemProps {
  item: any;
  navigation: NavigationProp<any, any>;
}

const Item = ({ item, navigation }: ItemProps) => (
  <TouchableOpacity
    onPress={() => navigation.navigate('MyTicketDetail')}
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
      <Text style={styles.ticketCardTextTitle}>{item.name}</Text>
      <View style={{ marginTop: 6 }}>
        <Text style={styles.ticketCardTextSubTitle}>{item.location}</Text>
        <Text style={styles.ticketCardTextSubTitle}>{item.date}</Text>
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 6 }}
      >
        <MaterialIcons name="people" size={16} color={colors.BLUE_DEEP} />
        <Text style={styles.ticketCardTextSubTitle}>
          {item.tikets + " tiket"}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

interface Props {
    navigation: NavigationProp<any, any>
}

class TicketListScreen extends React.Component<Props> {
  state = {};
  render() {
    return (
      <View style={{ backgroundColor: "white", flex: 1 }}>
        <FlatList
          data={DATA}
          keyExtractor={(item, index) => item.id}
          renderItem={({ item }) => {
            return <Item item={item} navigation={this.props.navigation} />;
          }}
          style={{ paddingHorizontal: 16, paddingTop: 18 }}
        />
      </View>
    );
  }
}

export default TicketListScreen;
