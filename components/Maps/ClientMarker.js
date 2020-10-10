import * as React from "react";
import { Marker } from "react-native-maps";
//import { StyleSheet } from "react-native";
const ClientMarker = ({ latitude, longitude }) => {
  console.log("creando el cliente maker");
  console.log("laitude: ", latitude);
  console.log("longitud: ", longitude);
  return (
    <Marker
      coordinate={{ latitude: latitude, longitude: longitude }}
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
