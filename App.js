import React, { Component } from "react";
import { TextInput, Text, View } from "react-native";
import { Header, Button } from "react-native-elements";

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#ddd" }}>
        <Header
          centerComponent={{
            text: "YouTube Searcher",
            style: { color: "white", fontSize: 20 }
          }}
          containerStyle={{ backgroundColor: "#E62117" }}
        />

        <View style={{ flexDirection: "row",
        justifyContent: "space-around",
        height: 30}}>
          <TextInput
            style={{
              flex: 4,
              paddingLeft: "3%",
              backgroundColor: "whitesmoke"
            }}
            placeholder="Enter text"
          />
          <Button
            buttonStyle={{ flex: 2, backgroundColor: "darkgray" }}
            title="Search"
            onPress={() => console.log("Search button pressed")}
          />
        </View>
      </View>
    );
  }
}
