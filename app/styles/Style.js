import { StyleSheet } from "react-native";
import color from "./Color";

export default StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    position: "relative"
  },

  topCircle: {
    position: "absolute",
    left: "-5.6%",
    right: "85.84%",
    top: "3%",
    bottom: "85.84%",
    backgroundColor: "transparent"
  },
  reviewTopCircle: {
    position: "absolute",
    left: "9.87%",
    right: "80%",
    top: "11.95%",
    bottom: "83.37%"
  },
  miniContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 130
  },

  imageContainer: {
    width: "40%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  rightCircle: {
    position: "absolute",
    right: -10,
    top: -40
  },
  rightCircleReview: {
    position: "absolute",
    left: "54.67%",
    right: "10.06%",
    top: "-4.03%",
    bottom: "89.74%"
  },
  icon: {
    position: "relative",
    width: 212,
    height: 212,
    borderRadius: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  headingText: {
    color: color.textColor,
    fontSize: 32,
    textAlign: "center",
    lineHeight: 40,
    fontWeight: "bold",
    marginTop: 24
  },
  homeContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: -260,
    marginRight: "auto",
    marginLeft: "auto"
  },
  homeTop: {
    position: "relative",
    width: 299,
    height: 299,
    left: -57,
    top: -130,
    borderRadius: 200
  },
  homeIcon: {
    width: 200,
    height: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100
  },
  subTitleText: {
    color: "rgba(56, 79, 125, 0.8)",
    fontSize: 14,
    lineHeight: 22,
    textAlign: "center",
    marginTop: 8
  },
  statusProgress: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    marginLeft: 70,
    marginRight: 70,
    marginBottom: 20,
    justifyContent: "space-between"
  },

  skipIntroContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,

    position: "relative",
    left: -20,
    zIndex: 1

    // top: "20%"
  },
  skipIntro: {
    color: "#445984",
    fontSize: 16,
    lineHeight: 25,
    fontWeight: "bold",
    textDecorationLine: "underline"
  }
});
