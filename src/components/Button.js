import React from "react";

import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  renderSubmit = language => {
    return language === "english" ? "Submit" : "送信";
  };

  renderButton = color => {
    return (
      <LanguageContext.Consumer>
        {language => (
          <button className={`ui button ${color}`} type="submit">
            {this.renderSubmit(language)}
          </button>
        )}
      </LanguageContext.Consumer>
    );
  };

  render() {
    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
