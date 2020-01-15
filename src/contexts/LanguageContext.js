import React from "react";

const Context = React.createContext("english");

export class LanguageStore extends React.Component {
  state = { language: "english", buttonColor: "primary" };

  onLanguageChange = (language, color) => {
    this.setState({ language: language });
    this.setState({ buttonColor: color });
  };

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
