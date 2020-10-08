import * as React from "react";
import { Marker } from "react-native-maps";
//import { StyleSheet } from "react-native";
const ClientMarker = ({ latitude, longitude }) => {
  console.log("creando el cliente maker");
  console.log("laitude: ", latitude);
  console.log("longitud: ", longitude);
  return (
    <Marker
      coordinate={{ latitude: -1.2896366, longitude: -78.59731 }}
      pinColor="red"
    />
  );
};

/* const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fff",
    color: "red",
  },
}); */

export default ClientMarker;
