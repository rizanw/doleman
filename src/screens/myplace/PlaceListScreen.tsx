import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../resources/styles";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../../resources/colors";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    name: "Jawa Timur Park I",
    location: "Batu, Malang",
  },
];

interface ItemProps {
  item: any;
  navigation: NavigationProp<any, any>;
}

const Item = ({ item, navigation }: ItemProps) => (
  <TouchableOpacity style={styles.ticketCard} activeOpacity={0.7}>
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
      <View style={{ flexDirection: "row", flex: 1 }}>
        <View style={{ flex: 3 }}>
          <Text style={styles.ticketCardTextTitle}>{item.name}</Text>
          <View style={{ marginTop: 6 }}>
            <Text style={styles.ticketCardTextSubTitle}>{item.location}</Text>
          </View>
        </View>
        <View style={{ flex: 0.5, alignItems: "flex-end" }}>
          <AntDesign name="heart" size={20} color={colors.BITTERSWEET} />
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

interface Props {
  navigation: NavigationProp<any, any>;
}

class PlaceListScreen extends React.Component {
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

export default PlaceListScreen;
