import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
const Options = () => {
  return (
    <View style={styles.container}>
      <Text>opciones</Text>
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

export default Options;
