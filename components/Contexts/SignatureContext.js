import React from "react";
const SignatureContext = React.createContext();

class SignatureProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
  }

  handleFile = (file) => {
    if (file !== this.state.file) {
      this.setState({ file });
    }
  };

  render() {
    return (
      <SignatureContext.Provider
        value={{
          handleFile: this.handleFile,
          file: this.state.file,
        }}
      >
        {this.props.children}
      </SignatureContext.Provider>
    );
  }
}

export { SignatureProvider, SignatureContext };
