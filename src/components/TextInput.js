import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "styles/UIKit.css";

function TextInput(props) {
  function handleTextChange(e) {
    props.dispatch({
      type: props.ReducerType,
      payload: e.target.value
    });
  }

  return (
    <div className="Text-Input-Container">
      <div
        className="Text-Input-Icon-Container"
        style={{ borderColor: props.Color }}
      >
        <FontAwesomeIcon
          className="Text-Input-Icon"
          icon={props.Icon}
          size="lg"
          color={props.Color}
        />
      </div>
      <input
        type={props.Type}
        className="Text-Input"
        id={props.ID}
        placeholder={props.Placeholder}
        value={props.Value}
        style={{ borderColor: props.Color }}
        onChange={e => handleTextChange(e)}
      />
    </div>
  );
}
export default connect()(TextInput);
