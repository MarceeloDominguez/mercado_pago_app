import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";

const { width } = Dimensions.get("window");
console.log(width);

export default function MyCards() {
  return (
    <View style={styles.container}>
      <View style={styles.cardSecondary}>
        <View style={styles.containerTextCard}>
          <Text style={styles.textCard}>*** ***</Text>
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
    marginRight: width <= 360 ? 10 : 15,
    paddingRight: 15,
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
    fontSize: 13,
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
    width: width <= 360 ? "66%" : "66%",
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  imageMasterCard: {
    width: 26,
    height: 26,
  },
  imageMercadoPago: {
    width: 73,
    height: 73,
    marginRight: width <= 360 ? 10 : 10,
  },
});
