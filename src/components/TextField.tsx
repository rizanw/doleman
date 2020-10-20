import React, { Component } from "react";
import { TextInput, View } from "react-native";
import { styles } from "../resources/styles";

interface Props {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
}

class TextField extends Component<Props> {
  state = {
    isFocused: false,
    password: this.props.secureTextEntry,
    secureTextEntry: this.props.secureTextEntry,
    icon: "ios-eye",
  };

  showPassword() {
    this.setState((prevState) => {
      return {
        password: !prevState.password,
        icon: prevState.icon === "ios-eye" ? "ios-eye-off" : "ios-eye",
      };
    });
  }

  render() {
    return (
      <>
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder={this.props.placeholder}
            secureTextEntry={this.state.password}
            onChangeText={this.props.onChangeText}
            value={this.props.value}
            style={styles.textInput}
            onFocus={() => this.setState({ isFocused: true })}
            onBlur={() => this.setState({ isFocused: false })}
          />
        </View>
      </>
    );
  }
}

export default TextField;
