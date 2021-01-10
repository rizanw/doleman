import React from "react";
import { Text, View } from "react-native";
import { styles } from "../../resources/styles";
import { Ionicons, AntDesign, Entypo } from "@expo/vector-icons";
import { colors } from "../../resources/colors";
import { NavigationProp, RouteProp } from "@react-navigation/native";

interface Props {
  navigation: NavigationProp<any, any>;
  route: RouteProp<any, any>;
}

class PlaceInfoScreen extends React.Component<Props> {
  state = {};
  render() {
    return (
      <View style={[styles.container, { paddingVertical: 20 }]}>
        <View style={styles.placeInfoContainer}>
          <View style={{ marginRight: 12 }}>
            <Ionicons
              name="ios-information-circle-outline"
              size={28}
              color={colors.GREEN_OCEAN}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.placeInfoTitle}>Alamat dan Telepon</Text>
            <Text numberOfLines={4} style={styles.placeInfoText}>
              {this.props.route.params?.item.address.street}
            </Text>
            <Text style={styles.placeInfoText}>
              {this.props.route.params?.item.phone}
            </Text>
          </View>
        </View>
        <View style={styles.placeInfoContainer}>
          <View style={{ marginRight: 12 }}>
            <AntDesign
              name="clockcircleo"
              size={23}
              color={colors.GREEN_OCEAN}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.placeInfoTitle}>Jam Operasi</Text>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1 }}>
                {this.props.route.params?.item.time_op.day.map((data: any) => (
                  <Text style={styles.placeInfoText}>{data}</Text>
                ))}
              </View>
              <View style={{ flex: 2 }}>
                {this.props.route.params?.item.time_op.hour.map((data: any) => (
                  <Text style={styles.placeInfoText}>{data}</Text>
                ))}
              </View>
            </View>
          </View>
        </View>
        <View style={styles.placeInfoContainer}>
          <View style={{ marginRight: 12 }}>
            <Entypo name="ticket" size={24} color={colors.GREEN_OCEAN} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.placeInfoTitle}>Rerata Harga</Text>
            <Text style={styles.placeInfoText}>
              {this.props.route.params?.item.price}
            </Text>
          </View>
        </View>
        <View style={styles.placeInfoContainer}>
          <View style={{ flex: 1 }}>
            <Text style={styles.placeInfoTitle}>Deskripsi</Text>
            <Text numberOfLines={2} style={styles.placeInfoDescriptionTitle}>
              {this.props.route.params?.item.name}
            </Text>
            <Text style={styles.placeInfoText}>
              {this.props.route.params?.item.description}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default PlaceInfoScreen;
