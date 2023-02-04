import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";

export default function HeaderHome() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapItems}>
        <View style={styles.wrapAvatar}>
          <Icon name="person-outline" size={18} color="#fff" />
          <View style={styles.containerNumber}>
            <Text style={styles.number}>2</Text>
          </View>
        </View>
        <Text style={styles.name}>Hola marcelo</Text>
        <Icon
          name="chevron-forward-outline"
          size={16}
          style={styles.iconArrow}
        />
      </View>
      <View style={styles.wrapItems}>
        <TouchableOpacity style={styles.wrapIconQuestion} activeOpacity={0.8}>
          <Icon name="help-circle-outline" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.wrapCVU} activeOpacity={0.8}>
          <Text style={styles.cvu}>Tu CVU</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#009ee3",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 22,
    paddingHorizontal: 14,
    zIndex: 1,
  },
  wrapItems: {
    flexDirection: "row",
    alignItems: "center",
  },
  wrapAvatar: {
    backgroundColor: "#32b3ff",
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  containerNumber: {
    position: "absolute",
    width: 16,
    height: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    alignItems: "center",
    top: 16,
    left: 16,
  },
  number: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#00a650",
  },
  name: {
    color: "#fff",
    fontWeight: "700",
    letterSpacing: 0.5,
    fontSize: 15,
    marginLeft: 10,
  },
  iconArrow: {
    color: "#fff",
    top: 1,
    marginLeft: 3,
  },
  wrapIconQuestion: {
    backgroundColor: "#32b3ff",
    paddingHorizontal: 6,
    borderRadius: 4,
    marginRight: 10,
    height: 25,
    justifyContent: "center",
  },
  wrapCVU: {
    backgroundColor: "#32b3ff",
    paddingHorizontal: 6,
    borderRadius: 4,
    height: 25,
    justifyContent: "center",
  },
  cvu: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 13,
  },
});
