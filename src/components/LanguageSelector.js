import React from "react";

import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;
  render() {
    return (
      <React.Fragment>
        Select a language:
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange("english", "primary")}
        />
        <i
          className="flag jp"
          onClick={() => this.context.onLanguageChange("japanese", "red")}
        />
      </React.Fragment>
    );
  }
}

export default LanguageSelector;
