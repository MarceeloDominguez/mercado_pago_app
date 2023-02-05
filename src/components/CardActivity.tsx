import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  nameUser: string;
  description: string;
  service: string;
  price: string;
  date: string;
}

export default function CardActivity({
  nameUser,
  description,
  service,
  price,
  date,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.containerUserName}>
        <Text style={styles.nameUser}>{nameUser}</Text>
      </View>
      <View style={styles.containerDescription}>
        <Text style={styles.description} numberOfLines={1}>
          {description}
        </Text>
        <Text style={styles.textSecondary} numberOfLines={1}>
          {service}
        </Text>
      </View>
      <View style={styles.containerPrice}>
        <Text style={styles.price} numberOfLines={1}>
          {price}
        </Text>
        <Text style={styles.textSecondary} numberOfLines={1}>
          {date}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 14,
    paddingVertical: 16,
  },
  containerUserName: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.6,
    borderColor: "#ccc",
    marginRight: 14,
  },
  nameUser: {
    fontSize: 20,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  containerDescription: {
    justifyContent: "center",
    flex: 2,
  },
  containerPrice: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  price: {
    fontSize: 14,
    color: "#00a650",
    fontWeight: "700",
  },
  description: {
    fontSize: 15,
    fontWeight: "500",
    letterSpacing: 0.2,
    color: "rgba(0,0,0,.9)",
  },
  textSecondary: {
    fontSize: 12,
    color: "rgba(0,0,0,.9)",
    opacity: 0.7,
  },
});
