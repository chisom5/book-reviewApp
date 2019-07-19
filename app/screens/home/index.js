import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import styles from "../../styles/Style";
import LinearGradient from "react-native-linear-gradient";

export default class HomeScreen extends Component {
  render() {
    return (
      <LinearGradient
        location={[0, -56.86, 126.39]}
        colors={["#F0F4FD", "#FFFFFF"]}
      >
        <View style={styles.container}>
          <LinearGradient
            location={[0, 3.5, 93.61, 147.83]}
            colors={[
              "rgba(255, 255, 255, 0.7)",
              "rgba(121, 171, 252, 0.7)",
              "rgba(96, 108, 255, 0.7)"
            ]}
            style={styles.homeTop}
          />

          <View style={styles.homeContainer}>
            <View>
              <LinearGradient
                location={[0, -3.59, 118.04]}
                colors={["#FFF17C", "#FF8B8E"]}
                style={styles.homeIcon}
              >
                <Image source={require("../../images/bulbIcon.png")} />
              </LinearGradient>
              <Text style={styles.headingText}>Welcome !</Text>
            </View>
            <View style={{ width: "70%" }}>
              <Text style={styles.subTitleText}>
                Create your account to get started. After that, you can share
                books and make friends.
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    );
  }
}
