import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "@expo/vector-icons/Ionicons";

interface Props {
  title: string;
}

export default function SuscribeCard({ title }: Props) {
  return (
    <LinearGradient
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      colors={["#a90f90", "#0c1a51"]}
      style={styles.cardGradient}
    >
      <View style={styles.containerInfo}>
        <Text style={styles.title}>{title}</Text>
        <Icon name="chevron-forward-outline" size={16} color="#fff" />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  cardGradient: {
    height: 40,
    justifyContent: "center",
    marginHorizontal: 16,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 28,
  },
  containerInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 13,
    color: "#fff",
    fontWeight: "500",
    letterSpacing: 0.2,
  },
});
