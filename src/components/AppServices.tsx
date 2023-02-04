import React from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";

const { width } = Dimensions.get("window");

const items = [
  {
    name: "Recargar celular",
    icon: "phone-portrait-outline",
    size: 28,
    color: "#009ee3",
  },
  {
    name: "Cuentas y servicios",
    icon: "reader-outline",
    size: 29,
    color: "#009ee3",
  },
  { name: "Cargar trasporte", icon: "bus-outline", size: 28, color: "#009ee3" },
  { name: "Descuentos", icon: "bookmark-outline", size: 28, color: "#DC3535" },
  {
    name: "Cobrar con Point",
    icon: "wallet-outline",
    size: 28,
    color: "#6D67E4",
  },
  {
    name: "Cobrar con link de pago",
    icon: "link-outline",
    size: 28,
    color: "#6D67E4",
  },
  {
    name: "Cobrar con QR",
    icon: "qr-code-outline",
    size: 28,
    color: "#6D67E4",
  },
  { name: "Ver más", icon: "add-outline", size: 45, color: "#626462" },
];

export default function AppServices() {
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(_, index) => index.toString()}
        numColumns={4}
        contentContainerStyle={{
          alignItems: "center",
        }}
        renderItem={({ item }) => (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                paddingHorizontal: 5,
                paddingVertical: 10,
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 0.6,
                  marginBottom: 4,
                  borderColor: "#ccc",
                }}
              >
                <Icon
                  name={item.icon as any}
                  size={item.size}
                  color={item.color}
                />
              </View>
              <Text
                style={{
                  width: 80,
                  height: 40,
                  textAlign: "center",
                  textAlignVertical: "center",
                  color: "rgba(0,0,0,.9)",
                }}
              >
                {item.name}
              </Text>
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
    marginBottom: 84,
    elevation: 5,
  },
  containerItems: {
    backgroundColor: "red",
  },
});
