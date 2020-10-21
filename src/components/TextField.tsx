import React, { Component, LegacyRef } from "react";
import {
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputSubmitEditingEventData,
  View,
} from "react-native";
import { styles } from "../resources/styles";

type Props = React.ComponentPropsWithRef<typeof TextInput> & {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  autoCompleteType?: "email" | "name" | "off";
  returnKeyType?: "none" | "done" | "next" | "go"; 
};

class TextField extends Component<Props> {
  state = {
    isFocused: false,
    password: this.props.secureTextEntry,
    secureTextEntry: this.props.secureTextEntry,
    icon: "ios-eye",
  };

  static defaultProps = {
    autoCompleteType: "off",
    returnKeyType: "none",
  };

  showPassword() {
    this.setState((prevState) => {
      return {
        password: !prevState.password,
        icon: prevState.icon === "ios-eye" ? "ios-eye-off" : "ios-eye",
      };
    });
  }

  localRef: TextInput | null | undefined;

  render() {
    return (
      <>
        <View style={styles.textInputContainer}>
          <TextInput
            ref={this.props.ref}
            onSubmitEditing={this.props.onSubmitEditing}
            returnKeyType={this.props.returnKeyType}
            placeholder={this.props.placeholder}
            secureTextEntry={this.state.password}
            onChangeText={this.props.onChangeText}
            value={this.props.value}
            style={styles.textInput}
            onFocus={() => this.setState({ isFocused: true })}
            onBlur={() => this.setState({ isFocused: false })}
            autoCompleteType={this.props.autoCompleteType}
          />
        </View>
      </>
    );
  }
}

export default TextField;
