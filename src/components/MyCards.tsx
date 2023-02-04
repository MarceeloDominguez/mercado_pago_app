import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";

export default function MyCards() {
  return (
    <View style={styles.container}>
      <View style={styles.cardSecondary}>
        <View style={styles.containerTextCard}>
          <Text style={styles.textCard}>***</Text>
          <Text style={styles.numberCard}>6589</Text>
        </View>
      </View>
      <View style={styles.cardPrimary}>
        <Image
          source={require("../../assets/card/master-logo.png")}
          style={styles.imageMasterCard}
          resizeMode="contain"
        />
        <Image
          source={require("../../assets/card/logo-large.png")}
          style={styles.imageMercadoPago}
          resizeMode="contain"
        />
      </View>
      <Icon name="chevron-forward-outline" size={12} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 18,
    alignItems: "center",
    marginBottom: 12,
  },
  cardSecondary: {
    backgroundColor: "#A7727D",
    height: 45,
    justifyContent: "center",
    alignItems: "flex-end",
    borderRadius: 8,
    flex: 1,
    marginRight: 16,
    paddingRight: 20,
  },
  containerTextCard: {
    flexDirection: "row",
  },
  textCard: {
    top: 2,
    letterSpacing: 1,
    fontWeight: "bold",
    marginRight: 6,
    color: "#fff",
  },
  numberCard: {
    color: "#fff",
    fontSize: 15,
    letterSpacing: 1,
    fontWeight: "bold",
  },
  cardPrimary: {
    backgroundColor: "#32b3ff",
    height: 45,
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    width: "70%",
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  imageMasterCard: {
    width: 30,
    height: 30,
  },
  imageMercadoPago: {
    width: 80,
    height: 80,
  },
});
