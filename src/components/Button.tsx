import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";
import { colors } from "../resources/colors";
import { styles } from "../resources/styles";

interface Props {
  label: string;
  type?: "contained" | "outline" | "text";
  onPress?: () => void;
  color?: "primary" | "secondary";
}

class Button extends Component<Props> {
  state = {};
  render() {
    return (
      <>
        <TouchableOpacity
          activeOpacity={0.7}
          style={[
            styles.button,
            this.props.type === "outline"
              ? styles.buttonOutlined
              : styles.buttonContained,
            this.props.color == "secondary"
              ? { backgroundColor: colors.LIGHT_ORANGE }
              : {},
          ]}
          onPress={this.props.onPress}
        >
          <Text
            style={[
              styles.buttonText,
              this.props.type === "outline"
                ? styles.buttonTextOutlined
                : styles.buttonTextContained,
            ]}
          >
            {this.props.label}
          </Text>
        </TouchableOpacity>
      </>
    );
  }
}

export default Button;
