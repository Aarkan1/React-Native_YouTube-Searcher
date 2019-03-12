import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import AppHeader from "./src/components/Header";
import SearchBar from "./src/components/SearchBar";

export default class App extends Component {
  state = {
    term: ""
  };

  onPressSearch = value => {
    console.log(value);
  };

  render() {
    return (
      <View style={styles.container}>
        <AppHeader />
        <SearchBar onPressSearch={this.onPressSearch} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd"
  }
});
