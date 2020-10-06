import * as React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import { Picker } from "@react-native-community/picker";
import { useMutation, gql } from "@apollo/client";

const UPDATE_WORK_ORDER = gql`
  mutation UpdateWorkOrder(
    $_id: String
    $client_id: String
    $productDamage: String
    $address: String
    $price: Float
    $status: String
  ) {
    updateWorkOrder(
      _id: $_id
      client_id: $client_id
      productDamage: $productDamage
      address: $address
      price: $price
      status: $status
    ) {
      _id
    }
  }
`;

const EditWorkOrder = ({ route, navigation }) => {
  const [_id, set_Id] = React.useState(route.params._id);
  const [client, onChangeClient] = React.useState(route.params.client);
  const [address, onChangeAddress] = React.useState(route.params.address);
  const [price, onChangePrice] = React.useState(route.params.price);
  // const [status, onChangeStatus] = React.useState(route.params.status);
  const [selectedValue, setSelectedValue] = React.useState(route.params.status);
  const [productDamage, onChangeProductDamage] = React.useState(
    route.params.productDamage
  );
  const [updateWorkOrder, { error, loading }] = useMutation(UPDATE_WORK_ORDER);
  const handleCreateWorkOrder = () => {
    updateWorkOrder({
      variables: {
        _id: _id,
        client_id: client,
        productDamage: productDamage,
        address: address,
        price: parseFloat(price),
        status: selectedValue,
      },
    });
    onChangeClient("");
    onChangeAddress("");
    onChangePrice();
    onChangeProductDamage("");
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
      <Text style={styles.label}>Daño: </Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => onChangeProductDamage(text)}
        value={productDamage}
      />
      <Text style={styles.label}>Estado: </Text>
      <Picker
        selectedValue={selectedValue}
        style={{
          height: 50,
          width: 150,
          borderRadius: 5,
          marginBottom: 15,
          paddingLeft: 10,
        }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="En proceso.." value="en proceso.." />
        <Picker.Item label="Terminado" value="terminado" />
        <Picker.Item label="Pendiente" value="pendiente" />
      </Picker>
      <Button
        style={styles.saveButton}
        //color="black"
        color="#215e97"
        title="Guardar"
        onPress={() => {
          navigation.navigate("WorkOrderList");
          handleCreateWorkOrder();
        }}
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

export default EditWorkOrder;
