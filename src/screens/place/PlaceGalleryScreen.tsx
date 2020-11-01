import React from "react";
import { Dimensions, Text, View } from "react-native";
import { styles } from "../../resources/styles";

const DATA = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];

class PlaceGalleryScreen extends React.Component {
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
    return (
      <View
        style={[
          styles.container,
          { paddingVertical: 20, flexWrap: "wrap", flexDirection: "row" },
        ]}
      >
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
