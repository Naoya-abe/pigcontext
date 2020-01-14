import React from "react";

import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class App extends React.Component {
  state = { language: "english", buttonColor: "primary" };

  onLanguageChange = (language, color) => {
    this.setState({ language: language });
    this.setState({ buttonColor: color });
  };

  render() {
    return (
      <div className="ui container">
        Select a language:
        <i
          className="flag us"
          onClick={() => this.onLanguageChange("english", "primary")}
        />
        <i
          className="flag jp"
          onClick={() => this.onLanguageChange("japanese", "red")}
        />
        <ColorContext.Provider value={this.state.buttonColor}>
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;
