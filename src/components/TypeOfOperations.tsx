import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

interface Props {
  title: string;
}

export default function TypeOfOperations({ title }: Props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: "rgba(71,154,209,.15)",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  title: {
    maxWidth: 70,
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: 0.2,
    fontSize: 11,
    color: "#009ee3",
  },
});
