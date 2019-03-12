import React, { Component } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

class SearchBar extends Component {
  state = {
    term: ""
  };
  
  handleTextChange = value => {
    this.setState({
      term: value
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.searchBar}
          placeholder="Enter text"
          value={this.state.term}
          onChangeText={this.handleTextChange}
        />
        <Button
          buttonStyle={styles.searchButton}
          title={this.props.loading ? 'Loading...' : 'Search'}
          onPress={() => this.props.onPressSearch(this.state.term)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 45,
    padding: 5
  },
  searchBar: {
    flex: 3,
    paddingLeft: "3%",
    marginRight: 3,
    borderRadius: 3,
    backgroundColor: "whitesmoke"
  },
  searchButton: {
    flex: 2,
    width: 100,
    backgroundColor: "darkgray"
  }
});

export default SearchBar;
