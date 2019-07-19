import React, { Component } from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";
import { createStackNavigator, NavigationActions } from "react-navigation";
import styles from "../styles/Style";
import LinearGradient from "react-native-linear-gradient";
import Boxes from "../components/boxes";

export default class ReadBook extends Component {
  state = {
    boxes: ["1", "2", "3"],
    active: 1
  };
  render() {
    return (
      <LinearGradient
        location={[0, -56.86, 126.39]}
        colors={["#F0F4FD", "#FFFFFF"]}
      >
        <View style={styles.container}>
          <Image
            source={require("../images/Ellipse-1.png")}
            style={styles.topCircle}
          />
          <View style={styles.miniContainer}>
            <Image
              source={require("../images/Ellipse-2.png")}
              style={styles.rightCircle}
            />
            <View>
              <Image source={require("../images/icons.png")} />
              <Text style={styles.headingText}>Read Books</Text>
            </View>

            <View style={{ width: "70%" }}>
              <Text style={styles.subTitleText}>
                Create your account to get started. After that, you can share
                books and make friends.
              </Text>
            </View>
          </View>

          <View style={styles.statusProgress}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Boxes boxesArr={this.state.boxes} active={this.state.active} />
            </View>
            <TouchableHighlight
              underlayColor="white"
              onPress={() => this.props.navigation.navigate("ReviewBook")}
            >
              <Image
                source={require("../images/nextIcon.png")}
                style={{ position: "relative" }}
              />
            </TouchableHighlight>
          </View>
          {/* skip content */}
          <View style={styles.skipIntroContainer}>
            <TouchableHighlight
              underlayColor="white"
              onPress={() => this.props.navigation.navigate("ReviewBook")}
            >
              <Text style={styles.skipIntro}>Skip Intro</Text>
            </TouchableHighlight>
          </View>
        </View>
        {/*  bottom image*/}
        <Image
          source={require("../images/Ellipse-3.png")}
          style={{ position: "absolute", bottom: 0 }}
        />
      </LinearGradient>
    );
  }
}
