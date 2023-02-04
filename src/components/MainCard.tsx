import React from "react";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Balance from "./Balance";
import TypeOfOperations from "./TypeOfOperations";
import MyCards from "./MyCards";

export default function MainCard() {
  return (
    <View>
      <LinearGradient
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#009ee3", "transparent"]}
        style={styles.viewGradient}
      />
      <View style={styles.card}>
        <Balance />
        <View style={styles.wrapComponentsTypeOfOperations}>
          <TypeOfOperations title="Ingresar dinero" />
          <View style={{ width: 10 }} />
          <TypeOfOperations title="Transferir dinero" />
          <View style={{ width: 10 }} />
          <TypeOfOperations title="Sacar efectivo" />
        </View>
        <MyCards />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    marginHorizontal: 14,
    borderRadius: 10,
    padding: 16,
    elevation: 10,
    marginBottom: 28,
  },
  wrapComponentsTypeOfOperations: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 18,
  },
  viewGradient: {
    height: 175,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
