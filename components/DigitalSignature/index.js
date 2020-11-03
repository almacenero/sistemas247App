import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Signature from "react-native-signature-canvas";
import { SignatureContext } from "./../Contexts/SignatureContext";

export const SignatureScreen = () => {
  const { handleFile, handleClearFile } = useContext(SignatureContext);
  const [signature, setSign] = useState(null);

  const handleSignature = (signature) => {
    console.log(signature);
    setSign(signature);
    handleFile(signature);
  };

  const handleEmpty = () => {
    console.log("Empty");
    handleClearFile();
  };

  const style = `.m-signature-pad--footer
    .button {
      background-color: red;
      color: #FFF;
    }`;
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.preview}>
        {signature ? (
          <Image
            resizeMode={"contain"}
            style={{ width: 335, height: 114 }}
            source={{ uri: signature }}
          />
        ) : null}
      </View>
      <Signature
        onOK={handleSignature}
        onEmpty={handleEmpty}
        descriptionText="Firma"
        clearText="Limpiar"
        confirmText="Guardar"
        webStyle={style}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  preview: {
    width: 235,
    height: 114,
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  previewText: {
    color: "#FFF",
    fontSize: 14,
    height: 40,
    lineHeight: 40,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#69B2FF",
    width: 120,
    textAlign: "center",
    marginTop: 10,
  },
});
