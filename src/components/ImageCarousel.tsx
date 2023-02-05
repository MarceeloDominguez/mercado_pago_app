import React, { useEffect, useState } from "react";
import {
  View,
  Dimensions,
  Image,
  Animated,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { imageCarousel } from "../data/data";

const { width } = Dimensions.get("window");

export default function ImageCarousel() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setInterval(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Animated.FlatList
      data={imageCarousel}
      keyExtractor={(_, index) => index.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={width - 32}
      decelerationRate="fast"
      contentContainerStyle={styles.containerFlatlist}
      renderItem={({ item, index }) => {
        return (
          <View>
            {loading ? (
              <ActivityIndicator
                size="large"
                color="#009ee3"
                style={styles.image}
              />
            ) : (
              <Image
                source={{ uri: item }}
                resizeMode="center"
                style={[
                  styles.image,
                  { marginRight: index === imageCarousel.length - 1 ? 32 : 0 },
                ]}
              />
            )}
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  containerFlatlist: {
    height: 90,
    marginBottom: 28,
  },
  image: {
    borderRadius: 8,
    width: width - 48,
    height: 80,
    marginLeft: 16,
  },
});
