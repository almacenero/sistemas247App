import * as React from "react";
import { Marker } from "react-native-maps";
//import { StyleSheet } from "react-native";
const Sistemas247Marker = ({ latitude, longitude }) => {
  return <Marker coordinate={{ latitude, longitude }} pinColor="#215e97" />;
};

/* const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fff",
    color: "red",
  },
}); */

export default Sistemas247Marker;
