import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import YTSearch from "youtube-api-search";
import AppHeader from "./src/components/Header";
import SearchBar from "./src/components/SearchBar";
import ListVideos from "./src/components/ListVideos";

const API_KEY = "AIzaSyAKDB96bzWgVpeEGEGMoLc11I_3LsLpqh8";

export default class App extends Component {
  state = {
    loading: false,
    videos: []
  };

  componentWillMount(){
    this.searchYT('pj');
  }

  onPressSearch = value => {
    this.searchYT(value);
  };

  searchYT = term => {
    // term: term === term (ES6)
    this.setState({ loading: true });
    YTSearch({ key: API_KEY, term }, videos => {
      this.setState({ loading: false, videos });
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <AppHeader />
        <SearchBar
          loading={this.state.loading}
          onPressSearch={this.onPressSearch}
        />
        <ListVideos videos={this.state.videos} />
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
