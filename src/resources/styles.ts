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
  },
  buttonTextContained: {
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
    marginTop: 12,
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

  buttonMenu: {
    backgroundColor: "#F7F7F7",
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  buttonMenuLabel: {
    marginLeft: 12,
    fontSize: 16,
    fontWeight: "bold",
    color: colors.LIGHT_ORANGE,
  },
  buttonMenuText: {
    fontSize: 16,
    color: colors.LIGHT_ORANGE,
  },

  ticketCard: {
    flex: 1,
    backgroundColor: colors.WHITE,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 8,
    flexDirection: "row",
  },
  ticketCardRightSide: {
    padding: 16,
    flex: 1,
  },
  ticketCardTextTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.CHARCOAL,
  },
  ticketCardTextSubTitle: {
    fontSize: 12,
    color: colors.GREY,
    marginBottom: 2,
  },
  ticketCardLeftSide: {
    backgroundColor: colors.LIGHT_ORANGE,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
  },

  ticketTitle: {
    fontSize: 20,
    color: colors.BLUE_DEEP,
    fontWeight: "bold",
    textAlign: "center",
    margin: 16,
  },
  ticketCode: {
    fontSize: 18,
    color: colors.BLUE_DEEP,
    fontWeight: "bold",
  },
  ticketTitleCode: {
    fontSize: 12,
    color: colors.GREY,
  },
  backgroundGrey: {
    backgroundColor: "#F7F7F7",
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  backgroundGreyText: {
    color: colors.GREY,
    fontSize: 12,
    marginBottom: 4,
  },
});
