import React from "react";
const ClientSearchContext = React.createContext();

class ClientSearchProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      client_id: null,
      client_name: null,
    };
  }

  handleClient = (client_id, client_name) => {
    if (client_id !== this.state.client_id) {
      this.setState({ client_id });
      this.setState({ client_name });
    }
  };
  handleClearClient = () => {
    console.log("ssssss");
    const client_id = null;
    const client_name = null;
    if (client_id !== this.state.client_id) {
      this.setState({ client_id });
      this.setState({ client_name });
    }
  };

  render() {
    return (
      <ClientSearchContext.Provider
        value={{
          client_name: this.state.client_name,
          handleClient: this.handleClient,
          client_id: this.state.client_id,
          handleClearClient: this.handleClearClient,
        }}
      >
        {this.props.children}
      </ClientSearchContext.Provider>
    );
  }
}

export { ClientSearchProvider, ClientSearchContext };
