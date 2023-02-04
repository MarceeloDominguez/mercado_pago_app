import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import { FontAwesome5 } from "@expo/vector-icons";

interface Props {
  title: string;
  description: string;
}

export default function CardInfo({ title, description }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={styles.wrapHeaderLeft}>
          <FontAwesome5
            name="hand-holding-usd"
            size={16}
            color="rgba(0,0,0,.9)"
          />
          <Text style={styles.title}>{title}</Text>
        </View>
        <Icon name="chevron-forward-outline" size={16} />
      </View>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 14,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 5,
    marginBottom: 28,
  },
  containerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  wrapHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 13,
    fontWeight: "bold",
    letterSpacing: 0.5,
    marginLeft: 10,
    color: "rgba(0,0,0,.9)",
  },
  description: {
    width: 300,
    fontWeight: "400",
    letterSpacing: 0.5,
    fontSize: 13,
    color: "rgba(0,0,0,.9)",
    opacity: 0.8,
    marginTop: 10,
  },
});
