import React from "react";
import { View, StyleSheet, StatusBar, ScrollView } from "react-native";
import AppServices from "../components/AppServices";
import CardInfo from "../components/CardInfo";
import HeaderHome from "../components/HeaderHome";
import MainCard from "../components/MainCard";
import SuscribeCard from "../components/SuscribeCard";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009ee3" />
      <HeaderHome />
      <ScrollView showsVerticalScrollIndicator={false}>
        <MainCard />
        <CardInfo
          title="Préstamos"
          description="Consultá las opciones de financiamiento disponibles para vos o tu negocio."
        />
        <SuscribeCard title="Suscribite al nivel 6 por $ 499/mes" />
        <AppServices />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
