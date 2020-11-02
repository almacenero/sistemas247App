import React, {
  Fragment,
  useRef,
  useState,
  useEffect,
  useContext,
} from "react";
import SignatureCanvas from "react-signature-canvas";
//import { SignatureContext } from "./../../../Context/SignatureContext";
import { Button, View, Text } from "react-native";

export const DigitalSignature = () => {
  //const { handleFile, file } = useContext(SignatureContext);
  const signatureRef = useRef({});
  const [imageData, setImageData] = useState("");
  const [error, setError] = useState(false);
  const saveSignature = (signature) => {
    setImageData(signature);
    //handleFile(imageData);
  };
  useEffect(() => {
    //console.log(imageData);
    //handleFile(imageData);
  }, [imageData]);
  return (
    <Fragment>
      <SignatureCanvas
        canvasProps={{
          width: 330,
          height: 200,
          style: { border: "1px solid #000000" },
        }}
        penColor="#405263"
        minWidth={1}
        maxWidth={2}
        ref={signatureRef}
        onEnd={() => {
          saveSignature(
            signatureRef.current.getTrimmedCanvas().toDataURL("image/jpg")
          );
        }}
        onBegin={() => {
          setError(false);
        }}
      />
      <Button
        onClick={() => {
          signatureRef.current.clear();
          saveSignature(null);
        }}
      >
        Borrar
      </Button>
      <View>{error ? <Text>La firma es obligatoria</Text> : false}</View>
    </Fragment>
  );
};
