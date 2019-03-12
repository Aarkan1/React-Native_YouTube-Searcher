import React from "react";
import { View, Text, Image } from "react-native";

const VideoListItem = ({ video }) => {
  const {
    title,
    channelTitle,
    description,
    thumbnails: {
      medium: { url }
    }
  } = video.snippet;

  return (
    <View>
      <Image style={styles.imageStyle} source={{ uri: url }} />
      <Text>{title}</Text>
      <Text>{channelTitle}</Text>
      <Text>{description}</Text>
    </View>
  );
};

const styles = {
  imageStyle: {
    alignSelf: "stretch",
    height: 180
  }
};

export default VideoListItem;
