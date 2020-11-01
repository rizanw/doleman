import React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import {
  Text,
  View,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity,
  Platform,
} from "react-native";
import BottomSheet from "reanimated-bottom-sheet";
import * as Location from "expo-location";
import { NavigationProp } from "@react-navigation/native";
import { styles } from "../resources/styles";
import { colors } from "../resources/colors";
import {
  AntDesign,
  Ionicons,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import { TouchableOpacity as TouchableOpacityAndroid } from "react-native-gesture-handler";
import { mapStyle } from "../resources/mapStyle";
import * as geolib from "geolib";

const DATA = [
  {
    id: "dsadwea-c1b1-46c2-aed5-3ad53abb28ba",
    img:
      "https://1.bp.blogspot.com/-NHCaArJ9muo/XPf2BmfY7MI/AAAAAAAACtU/_s6jlc34F1AZXcLg0Xe_KkVwcxAgBAfmgCLcBGAs/s1600/jejak-kenzie_jatim-park-1-01.jpg",
    name: "Jawa Timur Park 1",
    address: "Jl. Kartika No.2, Sisir, Kec. Batu, Kota Batu, Jawa Timur 65315",
    day: "Setiap Hari",
    time: "8:30AM–4:30PM",
    telp: "+62341597777",
    price: "Rp. 100.000",
    description:
      "Theme park featuring rides, a food court & exhibits/ performances of traditional Indonesian culture.",
    location: "Kota Batu, Jawa Timur",
    percantage: Math.floor(Math.random() * Math.floor(100)),
    distance: 0,
    LatLng: {
      latitude: -7.884259,
      longitude: 112.524668,
    },
  },
  {
    id: "dsaxas-c1b1-46c2-aed5-3ad53abb28ba",
    img:
      "https://macigo.com/wp-content/uploads/2017/09/jatim_park_1_macigo_3.jpg",
    name: "Predator Fun Park",
    address:
      "Jl. Raya Tlekung No.315, Tlekung, Kec. Junrejo, Kota Batu, Jawa Timur 65327",
    day: "Setiap Hari",
    time: "8:30AM–4:30PM",
    telp: "+62341531999",
    price: "Rp. 50.000",
    description:
      "Reptile-themed amusement park with educational exhibits & shows, rides & pools with water slides.",
    location: "Kota Batu, Jawa Timur",
    percantage: 10,
    distance: 0,
    LatLng: {
      latitude: -7.913006,
      longitude: 112.54896,
    },
  },
  {
    id: "qewqq-c1b1-46c2-aed5-3ad53abb28ba",
    img:
      "https://1.bp.blogspot.com/-EysEc8W7sMg/XPyxff9VkVI/AAAAAAAACws/6l7IRiF5YMoXBn_CovWHuZFJGamvpB0XACLcBGAs/s1600/jejak-kenzie_jatim-park-3-01.jpg",
    name: "Jawa Timur Park 3",
    address:
      "Jl. Ir. Soekarno No.144, Beji, Kec. Junrejo, Kota Batu, Jawa Timur 65236",
    day: "Setiap Hari",
    time: "12:00PM–4:30PM",
    telp: "+623415103030",
    price: "Rp. 40.000 - Rp. 150.000",
    description:
      "Popular amusement park with a dinosaur attraction, wax museum, concessions & technology exhibits.",
    location: "Kota Batu, Jawa Timur",
    percantage: Math.floor(Math.random() * Math.floor(100)),
    distance: 0,
    LatLng: {
      latitude: -7.897144,
      longitude: 112.553632,
    },
  },
  {
    id: "deada-c1b1-46c2-aed5-3ad53abb28ba",
    img: "https://gomuslim.co.id/images/post/218Museum-Brawijaya-Malang.jpg",
    name: "Brawijaya Museum",
    address:
      "Jl. Ijen No.25 A, Gading Kasri, Kec. Klojen, Kota Malang, Jawa Timur 65115",
    day: "Setiap Hari",
    time: "8:00AM–3:00PM",
    telp: "+62341562394",
    price: "Rp. 5.000",
    description:
      "Artifacts & exhibits on Indonesia's war of independence, including military weapons & tanks.",
    location: "Malang, Jawa Timur",
    percantage: Math.floor(Math.random() * Math.floor(100)),
    distance: 0,
    LatLng: {
      latitude: -7.972111,
      longitude: 112.621256,
    },
  },
  {
    id: "deada-c1b1-46c2-aed5-dsadsads",
    img:
      "https://cdns.klimg.com/newshub.id/news/2016/04/16/55114/menguak-asal-usul-penamaan-candi-badut-candi-tertua-di-jawa-timur-160416r.jpg",
    name: "Candi Badut",
    address:
      "Jalan Candi 5D, Karangwidoro, Dau, Doro, Karangwidoro, Kec. Dau, Kota Malang, Jawa Timur 65146",
    day: "Setiap Hari",
    time: "8:00AM–3:00PM",
    telp: "",
    price: "Rp. 10.000",
    description:
      "Artifacts & exhibits on Indonesia's war of independence, including military weapons & tanks.",
    location: "Malang, Jawa Timur",
    percantage: Math.floor(Math.random() * Math.floor(100)),
    distance: 0,
    LatLng: {
      latitude: -7.957781,
      longitude: 112.598634,
    },
  },
  {
    id: "ewqewq-c1b1-46c2-aed5-3ad53abb28ba",
    img:
      "https://www.superradio.id/wp-content/uploads/2019/07/IMG20190622114804.jpg",
    name: "Museum Zoologi Frater Vianney",
    address:
      "Jl. Raya No.7, Doro, Karangwidoro, Kec. Dau, Kota Malang, Jawa Timur 65146",
    day: "Setiap Hari",
    time: "7:00AM–2:00PM",
    telp: "+62341558965",
    price: "Rp. 10.000 - Rp. 20.000",
    description:
      "Artifacts & exhibits on Indonesia's war of independence, including military weapons & tanks.",
    location: "Malang, Jawa Timur",
    percantage: Math.floor(Math.random() * Math.floor(100)),
    distance: 0,
    LatLng: {
      latitude: -7.958649,
      longitude: 112.596248,
    },
  },
  {
    id: "dsadsa-c1b1-46c2-aed5-3ad53abb28ba",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTfMRdKM0basbOlm_qy6EJ9qXaWKs4k_PWctg&usqp=CAU",
    name: "Candi Singosari",
    address:
      "Jl. Kertanegara No.148, Candirenggo, Kec. Singosari, Malang, Jawa Timur 65153",
    day: "Setiap Hari",
    time: "7:00AM–5:00PM",
    telp: "",
    price: "Rp. 5.000",
    description:
      "Candi Singasari merupakan candi Hindu - Buddha peninggalan bersejarah dari Kerajaan Singasari berlokasi di Desa Candirenggo, Kecamatan Singosari, Kabupaten Malang, Jawa Timur, Indonesia, sekitar 10 km dari Kota Malang. Candi ini berada pada lembah di antara Pegunungan Tengger dan Gunung Arjuna pada ketinggian 512m di atas permukaan laut. Cara pembuatan Candi Singasari ini menggunakan sistem menumpuk batu andesit hingga ketinggian tertentu selanjutnya diteruskan dengan mengukir dari atas baru turun ke bawah.",
    location: "Malang, Jawa Timur",
    percantage: Math.floor(Math.random() * Math.floor(100)),
    distance: 0,
    LatLng: {
      latitude: -7.887989,
      longitude: 112.663757,
    },
  },
];

interface Props {
  navigation: NavigationProp<any, any>;
}

export default class DicoverScreen extends React.Component<Props> {
  sheetRef = null;
  state = {
    errorMsg: "",
    mapRegion: undefined,
    destinations: DATA,
  };

  async componentDidMount() {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      this.setState({ errorMsg: "Permission to access location was denied" });
    }

    await this._getCurrentLocation();
  }

  async _getCurrentLocation() {
    let location = await Location.getCurrentPositionAsync({});
    this.setState({
      mapRegion: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.08,
        longitudeDelta: 0.04,
      },
    });

    function updateDistance(loc) {
      return function (obj) {
        return Object.assign(obj, {
          distance:
            geolib.getDistance(
              obj.LatLng,
              {
                latitude: loc.coords.latitude,
                longitude: loc.coords.longitude,
              },
              1
            ) * 0.001,
        });
      };
    }

    this.setState((prevState) => ({
      destinations: prevState.destinations.map(updateDistance(location)),
    }));
  }

  _handleMapRegionChange(mapRegion: any) {
    console.log(mapRegion);
    this.setState({ mapRegion });
  }

  // Render Screen
  render() {
    let text = "Waiting..";
    if (this.state.errorMsg) {
      text = this.state.errorMsg;
    } else if (this.state.mapRegion) {
      text = "";
    }
    return (
      <View style={{ flex: 1 }}>
        <MapView
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          style={styles.mapStyle}
          initialRegion={this.state.mapRegion}
          region={this.state.mapRegion}
          showsCompass={true}
          customMapStyle={mapStyle}
        >
          {this.state.destinations.map((marker, index) => (
            <Marker
              key={index}
              coordinate={marker.LatLng}
              style={{ alignItems: "center" }}
            >
              <Text
                style={{
                  fontSize: 10,
                  textAlign: "center",
                  color: colors.BLUE_NEON,
                }}
              >
                {marker.name}
              </Text>
              <MaterialIcons
                name="location-on"
                size={26}
                color={colors.BLUE_NEON}
              />
            </Marker>
          ))}
        </MapView>
        <View style={{ position: "absolute", top: 24, left: 4 }}>
          <TouchableOpacity onPress={() => this._getCurrentLocation()}>
            <Image
              source={require("../../assets/doleman.png")}
              style={{ width: 100, height: 100, resizeMode: "contain" }}
            />
          </TouchableOpacity>
          <Text>{text}</Text>
        </View>
        <BottomSheet
          ref="BottomSheet"
          initialSnap={2}
          snapPoints={[Dimensions.get("screen").height - 140, 220, 140]}
          borderRadius={14}
          renderContent={this.renderContent.bind(this)}
        />
      </View>
    );
  }

  // Render Content Bottom Sheet
  renderContent = () => (
    <View
      style={{
        backgroundColor: "white",
        padding: 16,
        paddingBottom: 0,
        height: Dimensions.get("screen").height - 140,
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 76,
          height: 8,
          backgroundColor: "#CCCCCC",
          borderRadius: 10,
          marginBottom: 12,
        }}
      />
      <Text style={{ fontSize: 18, fontWeight: "bold", color: "#777777" }}>
        Jelajah sekitar
      </Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA.sort((a, b) => a.distance - b.distance)}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => {
          return Platform.select({
            ios: <Item item={item} navigation={this.props.navigation} />,
            android: (
              <ItemAndroid item={item} navigation={this.props.navigation} />
            ),
          });
        }}
        style={{ width: "100%", marginTop: 24, flex: 1 }}
      />
    </View>
  );
}

interface ItemProps {
  item: any;
  navigation: NavigationProp<any, any>;
}

const Item = ({ item, navigation }: ItemProps) => (
  <View style={styles.ticketCard}>
    <TouchableOpacity
      onPress={() => navigation.navigate("Place", { item: item })}
      style={{ flexDirection: "row", flex: 1 }}
    >
      <Image
        source={{
          uri: item.img,
        }}
        style={{
          width: 130,
          height: 130,
          resizeMode: "cover",
        }}
      />
      <View style={[styles.ticketCardRightSide]}>
        <Text style={styles.ticketCardTextTitle} numberOfLines={1}>
          {item.name}
        </Text>
        <View style={{ marginTop: 6 }}>
          <Text style={styles.ticketCardTextSubTitle}>{item.location}</Text>
        </View>
        <View style={{ marginTop: 6, flexDirection: "row" }}>
          <Ionicons name="md-people" size={16} color={colors.BLUE_DEEP} />
          <Text style={[styles.ticketCardTextSubTitle, { marginLeft: 6 }]}>
            {item.percantage + "% ramai"}
          </Text>
        </View>
        <View style={{ marginTop: 6, flexDirection: "row" }}>
          <FontAwesome5 name="route" size={16} color={colors.BLUE_DEEP} />
          <Text style={[styles.ticketCardTextSubTitle, { marginLeft: 6 }]}>
            {item.distance.toFixed(2) + " km"}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
    <View
      style={{
        right: 12,
        top: 12,
        padding: 4,
      }}
    >
      <AntDesign name="hearto" size={20} color={colors.GREY} />
    </View>
  </View>
);

const ItemAndroid = ({ item, navigation }: ItemProps) => (
  <View style={styles.ticketCard}>
    <TouchableOpacityAndroid
      onPress={() => navigation.navigate("Place", { item: item })}
      style={{ flexDirection: "row", flex: 1 }}
    >
      <Image
        source={{
          uri: item.img,
        }}
        style={{
          width: 130,
          height: 130,
          resizeMode: "cover",
        }}
      />
      <View style={[styles.ticketCardRightSide, {  }]}>
        <Text style={styles.ticketCardTextTitle} numberOfLines={1}>
          {item.name}
        </Text>
        <View style={{ marginTop: 6 }}>
          <Text style={styles.ticketCardTextSubTitle}>{item.location}</Text>
        </View>
        <View style={{ marginTop: 6, flexDirection: "row" }}>
          <Ionicons name="md-people" size={16} color={colors.BLUE_DEEP} />
          <Text style={[styles.ticketCardTextSubTitle, { marginLeft: 6 }]}>
            {item.percantage + "% ramai"}
          </Text>
        </View>
        <View style={{ marginTop: 6, flexDirection: "row" }}>
          <FontAwesome5 name="route" size={16} color={colors.BLUE_DEEP} />
          <Text style={[styles.ticketCardTextSubTitle, { marginLeft: 6 }]}>
            {item.distance.toFixed(2) + " km"}
          </Text>
        </View>
      </View>
    </TouchableOpacityAndroid>
    <View
      style={{
        right: 12,
        top: 12,
        padding: 4, 
      }}
    >
      <AntDesign name="hearto" size={20} color={colors.GREY} />
    </View>
  </View>
);
