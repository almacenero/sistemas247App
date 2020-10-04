import * as React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import { useMutation, gql } from "@apollo/client";
const Welcome = () => {
  const [client, onChangeClient] = React.useState("");
  const [address, onChangeAddress] = React.useState("");
  const [price, onChangePrice] = React.useState();
  const [productDamage, onChangeProductDamage] = React.useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Cliente: </Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => onChangeClient(text)}
        value={client}
      />
      <Text style={styles.label}>Dirección: </Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => onChangeAddress(text)}
        value={address}
      />
      <Text style={styles.label}>Precio: </Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => onChangePrice(text)}
        value={price}
      />
      <Text style={styles.label}>Daño: </Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => onChangeProductDamage(text)}
        value={productDamage}
      />
      <Button
        style={styles.saveButton}
        //color="black"
        color="#215e97"
        title="Guardar"
        // onPress={() => navigation.navigate("Options")}
      />
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
  label: { marginVertical: 5, marginHorizontal: 15 },
  saveButton: { padding: 10 },
});

export default Welcome;
