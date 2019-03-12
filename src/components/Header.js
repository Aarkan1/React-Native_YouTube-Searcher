import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Header } from "react-native-elements";

const AppHeader = props => (
  <Header
    centerComponent={{
      text: "YouTube Searcher",
      style: styles.centerStyle
    }}
    containerStyle={{ backgroundColor: "#E62117" }}
  />
);

const styles = StyleSheet.create({
  centerStyle: {
    color: "white",
    fontSize: 20
  }
});

export default AppHeader;
