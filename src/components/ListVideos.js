import React from "react";
import { View, Text, FlatList, ScrollView } from "react-native";
import VideoListItem from "./VideoListItem";

const ListVideos = ({ videos }) => {
  const videoItems = videos.map(video => (
    <VideoListItem key={video.etag} video={video} />
  ));

  return (
    <ScrollView>
      <View style={{
          paddingLeft: 5,
          paddingRight: 5
      }}>{videoItems}</View>
    </ScrollView>
  );
};

export default ListVideos;
