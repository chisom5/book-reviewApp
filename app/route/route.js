import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import ReadBook from "../screens/ReadBook";
import ReviewBook from "../screens/ReviewBook";
import HomeScreen from "../screens/home";

class Screens extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>First Screen</Text>
      </View>
    );
  }
}
const AppNavigator = createStackNavigator(
  {
    ReadBook: {
      screen: ReadBook
    },
    ReviewBook: {
      screen: ReviewBook
    },
    Home: {
      screen: HomeScreen
    }
  },
  { headerMode: "none" }
);

export default createAppContainer(AppNavigator);
