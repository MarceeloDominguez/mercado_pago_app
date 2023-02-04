import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";

export default function Balance() {
  const [hideBalance, setHideBalance] = useState(false);

  return (
    <View style={styles.container}>
      {hideBalance ? (
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.balanceNumber}>$ ***</Text>
          <Icon
            name="eye-off-outline"
            size={20}
            style={styles.iconEye}
            onPress={() => setHideBalance(false)}
          />
        </View>
      ) : (
        <View style={styles.wrapItem}>
          <Text style={styles.balanceNumber}>$10.000</Text>
          <Text style={styles.rest}>99</Text>
          <Icon
            name="eye-outline"
            size={20}
            style={styles.iconEye}
            onPress={() => setHideBalance(true)}
          />
        </View>
      )}
      <View style={styles.wrapItem}>
        <View style={styles.containerPercentage}>
          <Icon
            name="caret-up-outline"
            size={14}
            style={{ paddingRight: 4, top: 1 }}
            color="#379237"
          />
          <Text style={styles.percentage}>62,4%</Text>
        </View>
        <Icon name="chevron-forward-outline" size={16} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  wrapItem: {
    flexDirection: "row",
  },
  containerPercentage: {
    flexDirection: "row",
    backgroundColor: "#e2ece2",
    paddingHorizontal: 10,
    borderRadius: 10,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  percentage: {
    color: "#00a650",
    fontWeight: "bold",
    fontSize: 11,
  },
  balanceNumber: {
    fontSize: 26,
    fontWeight: "bold",
  },
  rest: {
    fontWeight: "bold",
    top: 2,
    marginLeft: 1,
  },
  iconEye: {
    alignSelf: "center",
    marginLeft: 12,
  },
});
