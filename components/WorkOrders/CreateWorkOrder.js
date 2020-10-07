import * as React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import { CheckBox } from "react-native-elements";
import { useMutation, gql } from "@apollo/client";

const CREATE_WORK_ORDER = gql`
  mutation CreateWorkOrder(
    $client_id: String
    $productDamage: String
    $address: String
    $price: Float
    $past: String
    $redCar: Boolean
    $van: Boolean
  ) {
    createWorkOrder(
      client_id: $client_id
      productDamage: $productDamage
      address: $address
      price: $price
      past: $past
      redCar: $redCar
      van: $van
    ) {
      _id
    }
  }
`;

const CreateWorkOrder = () => {
  const [client, onChangeClient] = React.useState("");
  const [address, onChangeAddress] = React.useState("");
  const [price, onChangePrice] = React.useState();
  const [productDamage, onChangeProductDamage] = React.useState("");
  const [pastInput, setpastInput] = React.useState("");
  const [redCarInput, setredCarInput] = React.useState(false);
  const [vanInput, setvanInput] = React.useState(false);
  const [createWorkOrder, { error, loading }] = useMutation(CREATE_WORK_ORDER);
  const handleCreateWorkOrder = () => {
    createWorkOrder({
      variables: {
        client_id: client,
        productDamage: productDamage,
        address: address,
        price: parseFloat(price),
        past: pastInput,
        van: vanInput,
        redCar: redCarInput,
      },
    });
    onChangeClient("");
    onChangeAddress("");
    onChangePrice();
    onChangeProductDamage("");
    setpastInput("");
    setredCarInput(false);
    setvanInput(false);
  };

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;

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
      <Text style={styles.label}>Antecedentes: </Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setpastInput(text)}
        value={pastInput}
      />
      <Text style={styles.label}>Transporte: </Text>
      <CheckBox
        title="Rojo"
        checked={redCarInput}
        onPress={() => setredCarInput(!redCarInput)}
      />
      <CheckBox
        title="Blanco"
        checked={vanInput}
        onPress={() => setvanInput(!vanInput)}
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
        onPress={() => handleCreateWorkOrder()}
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
});

export default CreateWorkOrder;
