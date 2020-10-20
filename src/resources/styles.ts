import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const styles = StyleSheet.create({
  button: {
    margin: 4,
    flex: 1,
    paddingVertical: 12,
    alignContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonContained: {
    backgroundColor: colors.BITTERSWEET,
    color: colors.WHITE,
  },
  buttonOutlined: {
    borderWidth: 1,
    borderColor: colors.BITTERSWEET,
  },
  buttonTextOutlined: {
    color: colors.BITTERSWEET,
  },
  buttonText: {
    textTransform: "uppercase",
    letterSpacing: 2,
    fontSize: 11,
  },
});
