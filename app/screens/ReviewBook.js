import React, { Component } from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";
import styles from "../styles/Style";
import LinearGradient from "react-native-linear-gradient";
import Boxes from "../components/boxes";

export default class ReviewBook extends Component {
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
            source={require("../images/Ellipse-review.png")}
            style={styles.reviewTopCircle}
          />
          <View style={styles.rightCircleReview}>
            <Image source={require("../images/Ellipse-2-review.png")} />
          </View>

          <View style={styles.miniContainer}>
            <View>
              {/* Review Icon */}
              <LinearGradient
                location={[0, -3.59, 118.04]}
                colors={["#FFF17C", "#FF8B8E"]}
                style={styles.icon}
              >
                <Image source={require("../images/star-review.png")} />
              </LinearGradient>

              <Text style={styles.headingText}>Review Them</Text>
            </View>
            {/* Review subTitle */}
            <View style={{ width: "70%" }}>
              <Text style={styles.subTitleText}>
                Create your account to get started. After that, you can share
                books and make friends.
              </Text>
            </View>
          </View>
          {/* Progress bar */}
          <View style={styles.statusProgress}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Boxes boxesArr={this.state.boxes} active={this.state.active} />
            </View>
            {/* next arrow */}
            <TouchableHighlight
              underlayColor="white"
              onPress={() => this.props.navigation.navigate("Home")}
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
              onPress={() => this.props.navigation.navigate("Home")}
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
