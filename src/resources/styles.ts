import { Dimensions, StyleSheet } from "react-native";
import { colors } from "./colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: Dimensions.get("screen").width,
  },
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

  loginTitle: {
    color: colors.BITTERSWEET,
    fontSize: 28,
    fontWeight: "bold", 
    marginTop: 12
  },
  textInputContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    alignContent: "center",
    marginTop: 8,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#CDCDCD",
  },
  textInput: {
    flex: 1,
    paddingVertical: 12,
    paddingLeft: 12,
    fontSize: 16,
  },
  
});
