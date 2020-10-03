import * as React from "react";
import { StyleSheet, View, Text, SafeAreaView, FlatList } from "react-native";
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Ordenes de servicio",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Crear nueva Orden de servicio",
  },
];

const Item = ({ title, navigation }) => (
  <View style={styles.item}>
    <Text
      style={styles.title}
      onPress={() => navigation.navigate("WorkOrderList", {})}
    >
      {title}
    </Text>
  </View>
);

const Options = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <Item title={item.title} navigation={navigation} />
  );
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 120,
  },
  tinyLogo: {
    width: 350,
    height: 350,
  },
  item: {
    backgroundColor: "#215e97",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    color: "white",
  },
});

export default Options;
