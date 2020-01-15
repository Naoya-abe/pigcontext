import React from "react";

import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
  renderField = language => {
    return language === "english" ? "Name" : "名前";
  };

  render() {
    return (
      <LanguageContext.Consumer>
        {({ language }) => (
          <div className="field">
            <label>{this.renderField(language)}</label>
            <input type="text" />
          </div>
        )}
      </LanguageContext.Consumer>
    );
  }
}

export default Field;
