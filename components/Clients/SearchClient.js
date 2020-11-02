import React, { useState, useContext } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import { useMutation, gql } from "@apollo/client";
import { ClientSearchContext } from "./../Contexts/ClientSearchContext";

const FIND_CLIENT_BY_CI = gql`
  mutation FindClientByCi($ci: String) {
    findClientByCi(ci: $ci) {
      _id
      name
    }
  }
`;

function SearchClient() {
  const [ciInput, setciInput] = useState("");
  const [findClientByCi, { data, loading }] = useMutation(FIND_CLIENT_BY_CI);
  const { handleClient, handleClearClient, client_name } = useContext(
    ClientSearchContext
  );

  const handleCreateWorkOrder = () => {
    findClientByCi({
      variables: {
        ci: ciInput,
      },
    });
    setciInput("");
  };
  if (loading) return <Text style={styles.LoadingStyle}>Cargando....</Text>;
  //if (error) return <p>Error :(</p>;
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Buscar cliente: </Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setciInput(text)}
        value={ciInput}
      />
      <Button
        style={styles.saveButton}
        //color="black"
        color="#215e97"
        title="Buscar"
        onPress={() => handleCreateWorkOrder()}
      />
      {data && data.findClientByCi !== null && (
        <View style={styles.successMessage}>
          {handleClient(data.findClientByCi._id, data.findClientByCi.name)}
          <Text style={styles.successMessageText}>
            Hemos encontrado a: {client_name}
          </Text>
        </View>
      )}
      {data && data.findClientByCi === null && (
        <View style={styles.successError}>
          {handleClearClient()}
          <Text style={styles.successErrorText}>No se encuentra!</Text>
        </View>
      )}
    </View>
  );
}

export default SearchClient;

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
  LoadingStyle: {
    fontSize: 45,
    textAlign: "center",
    paddingTop: 20,
    color: "#aa3a3a",
  },
  successMessage: {
    backgroundColor: "#81b214",
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
  },
  successMessageText: {
    color: "white",
    fontSize: 19,
  },
  successError: {
    backgroundColor: "#ec524b",
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
  },
  successErrorText: {
    color: "white",
    fontSize: 19,
  },
});
