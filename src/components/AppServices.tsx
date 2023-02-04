import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import { listServices } from "../data/data";
import { LogBox } from "react-native";

export default function AppServices() {
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={listServices}
        keyExtractor={(_, index) => index.toString()}
        numColumns={4}
        renderItem={({ item }) => (
          <View style={styles.containerItems}>
            <View style={styles.wrapItems}>
              <TouchableOpacity
                style={{ alignItems: "center" }}
                activeOpacity={0.8}
              >
                <View style={styles.containerIcons}>
                  <Icon name={item.icon} size={item.size} color={item.color} />
                </View>
                <Text style={styles.nameIcons}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingVertical: 16,
    marginBottom: 28,
    elevation: 5,
  },
  containerItems: {
    flex: 1,
  },
  wrapItems: {
    paddingVertical: 10,
    alignItems: "center",
  },
  containerIcons: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.6,
    marginBottom: 4,
    borderColor: "#ccc",
  },
  nameIcons: {
    width: 65,
    height: 40,
    textAlign: "center",
    textAlignVertical: "center",
    color: "rgba(0,0,0,.9)",
    fontSize: 12,
  },
});
