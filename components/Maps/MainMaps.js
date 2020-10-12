import React from "react";
import MapView, { Marker } from "react-native-maps";
import Sistemas247Marker from "./Sistemas247Marker";
import ClientMarker from "./ClientMarker";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapViewDirections from "react-native-maps-directions";

const MainMaps = ({ route }) => {
  const [latitude, setLatitude] = React.useState(route.params.latitude);
  const [longitude, setLongitude] = React.useState(route.params.longitude);

  const Sistemas247 = {
    latitude: -1.334265,
    longitude: -78.547499,
  };

  const Cliente = {
    latitude: latitude,
    longitude: longitude,
  };

  const origin = Sistemas247;
  const destination = Cliente;
  const GOOGLE_MAPS_APIKEY = "AIzaSyDcWj-_ljO_BPY7nf1sCRik081fkXj7IMc";
  return (
    <View style={styles.container}>
      <MapView
        provider="google"
        style={styles.mapStyle}
        initialRegion={{
          latitude: -1.334265,
          longitude: -78.547499,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="#215e97"
        />
        <Sistemas247Marker latitude={-1.334539} longitude={-78.547557} />
        {/* <View
              style={{
                paddingVertical: 10,
                paddingHorizontal: 30,
                backgroundColor: "#007bff",
                borderColor: "#eee",
                borderRadius: 5,
                elevation: 10,
              }}
            >
              <Text style={{ color: "#fff" }}>Sistemas 24/7</Text>
            </View> */}
        {latitude && longitude ? (
          <ClientMarker latitude={latitude} longitude={longitude} />
        ) : null}
      </MapView>
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
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default MainMaps;
