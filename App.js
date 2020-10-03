import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require("./assets/logo247_blanco.png")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tinyLogo: {
    width: 350,
    height: 350,
  },
  /* logo: {
    width: 66,
    height: 58,
  }, */
});
