import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  ActivityScreen,
  HomeScreen,
  MoreScreen,
  NotificationsScreen,
  QRScreen,
} from "../screens";
import Icon from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
const { width } = Dimensions.get("window");

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        headerTitle: "",
        tabBarActiveTintColor: "#009ee3",
        tabBarInactiveTintColor: "#434242",
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: styles.barStyles,
        tabBarIcon: ({ color }) => {
          let iconName: string | any = "";

          switch (route.name) {
            case "HomeScreen":
              iconName = "home-outline";
              break;
            case "ActivityScreen":
              iconName = "card-outline";
              break;
            case "NotificationsScreen":
              iconName = "notifications-outline";
              break;
            case "MoreScreen":
              iconName = "menu-outline";
              break;
          }

          return <Icon name={iconName} size={26} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: "Inicio" }}
      />
      <Tab.Screen
        name="ActivityScreen"
        component={ActivityScreen}
        options={{
          title: "Actividad",
          tabBarItemStyle: { marginRight: 30 },
        }}
      />
      <Tab.Screen
        name="QRScreen"
        component={QRScreen}
        options={{
          title: "",
          tabBarItemStyle: styles.barItemQR,
          tabBarIconStyle: styles.barIconQR,
          tabBarIcon: () => (
            <Icon color="#fff" size={25} name="qr-code-outline" />
          ),
        }}
      />
      <Tab.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
        options={{
          title: "Notificaciones",
          tabBarItemStyle: { marginLeft: 30 },
          tabBarLabelStyle: { fontSize: width <= 360 ? 11 : 12 },
        }}
      />
      <Tab.Screen
        name="MoreScreen"
        component={MoreScreen}
        options={{ title: "Más" }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  barStyles: {
    elevation: 0,
    borderTopWidth: 0,
    position: "absolute",
    height: 60,
    paddingBottom: 10,
    backgroundColor: "#fff",
  },
  barItemQR: {
    backgroundColor: "#009ee3",
    position: "absolute",
    width: 60,
    height: 60,
    left: width / 2 - 30,
    borderRadius: 30,
    bottom: -3,
    zIndex: 1,
    borderWidth: 5,
    borderColor: "#ECF9FF",
  },
  barIconQR: {
    textAlignVertical: "center",
    top: 8,
  },
});
