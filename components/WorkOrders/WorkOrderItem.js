import * as React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

const WorkOrderItem = ({ route }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Numero de orden:</Text>
      <Text style={styles.fontContent}>{route.params._id}</Text>
      <Text style={styles.label}>Cliente:</Text>
      <Text style={styles.fontContent}>{route.params.client_id}</Text>
      <Text style={styles.label}>Daño:</Text>
      <Text style={styles.fontContent}>{route.params.productDamage}</Text>
      <Text style={styles.label}>Fecha:</Text>
      <Text style={styles.fontContent}>{route.params.date}</Text>
      <Text style={styles.label}>Precio:</Text>
      <Text style={styles.fontContent}>${route.params.price}</Text>
      <Text style={styles.label}>Estado:</Text>
      <Text style={styles.fontContent}>{route.params.status}</Text>
      <View style={styles.buttonContainer}>
        <View styles={{ width: 50, height: 50 }}>
          <Button color="#fca652" title="Editar" />
        </View>
        <View styles={{ width: 50, height: 50 }}>
          <Button color="red" title="Eliminar" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    //alignItems: "center",
    //justifyContent: "center",
    marginVertical: 10,
    marginHorizontal: 25,
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 35,
  },
  label: {
    marginVertical: 5,
    //marginHorizontal: 15,
    fontSize: 20,
  },
  textConent: {},
  buttonContainer: {
    flex: 2,
    flexDirection: "row",
    //justifyContent: "space-between",
    justifyContent: "space-around",
    marginTop: 30,
  },
});

export default WorkOrderItem;
