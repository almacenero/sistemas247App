import React from "react";
import MapView, { Marker, Polyline } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const MainMaps = () => {
  const Sistemas247 = {
    latitude: -1.334265,
    longitude: -78.547499,
  };

  const Cliente = {
    latitude: -1.332527,
    longitude: -78.548754,
  };
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: -1.334265,
          longitude: -78.547499,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <Marker
          coordinate={{ latitude: -1.334265, longitude: -78.547499 }}
          pinColor="#215e97"
        >
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
        </Marker>
        <Marker coordinate={{ latitude: -1.332527, longitude: -78.548754 }} />
        <Polyline coordinates={[Sistemas247, Cliente]} />
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
