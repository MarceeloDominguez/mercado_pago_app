import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import HeaderHome from "../components/HeaderHome";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009ee3" />
      <HeaderHome />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
