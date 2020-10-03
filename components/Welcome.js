import * as React from "react";
import ButtonStart from "./ButtonStart";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image } from "react-native";
const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require("./../assets/logo247_blanco.png")}
      />
      <ButtonStart navigation={navigation} />
      <StatusBar style="auto" />
    </View>
  );
};

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
});

export default Welcome;
