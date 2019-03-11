import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "react-native-elements";

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#ddd" }}>
        <Header
          centerComponent={{
            text: "YouTube Searcher",
            style: { color: "white" }
          }}
          containerStyle={{ backgroundColor: "#E62117" }}
        />
        <Text>TEST</Text>
      </View>
    );
  }
}
