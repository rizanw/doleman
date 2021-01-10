import { NavigationProp, RouteProp } from "@react-navigation/native";
import React from "react";
import { Dimensions, Image, Text, View } from "react-native";
import { styles } from "../../resources/styles";

const DATA = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];

interface Props {
  navigation: NavigationProp<any, any>;
  route: RouteProp<any, any>;
}

class PlaceGalleryScreen extends React.Component<Props> {
  state = {
    bgColor: [
      "red",
      "blue",
      "yellow",
      "green",
      "black",
      "grey",
      "cyan",
      "brown",
      "orange",
      "purple",
      "pink",
    ],
    selectedColor: "",
  };

  componentDidMount() {
    this._getRandomColor();
  }

  _getRandomColor() {
    var item = this.state.bgColor[
      Math.floor(Math.random() * this.state.bgColor.length)
    ];
    return item;
  }

  render() {
    console.log(this.props.route.params?.item.images)
    return (
      <View
        style={[
          styles.container,
          { paddingVertical: 20, flexWrap: "wrap", flexDirection: "row" },
        ]}
      >
        {this.props.route.params?.item.images.map((uri: string) => (
          <Image
            key={uri}
            source={{
              uri: uri,
            }}
            style={{
              margin: 6,
              width: Dimensions.get("screen").width / 2 - 12,
              height: Dimensions.get("screen").width / 2 - 12,
              resizeMode: "cover",
            }}
          />
        ))}
        {DATA.map(({ id }) => {
          return (
            <View
              key={id}
              style={{
                margin: 6,
                width: Dimensions.get("screen").width / 2 - 12,
                height: Dimensions.get("screen").width / 2 - 12,
                backgroundColor: this._getRandomColor(),
              }}
            />
          );
        })}
      </View>
    );
  }
}

export default PlaceGalleryScreen;
