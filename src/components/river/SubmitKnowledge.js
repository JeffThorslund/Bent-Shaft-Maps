import React, { Component } from "react";
import "./SubmitKnowledge.css";
import Sender from "../../tools/serverless/Sender.js";
import PropTypes from "prop-types";

export class SubmitKnowledge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      selectedFile: null,
    };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      Sender(
        reader.result,
        this.state.value,
        this.props.riverName,
        this.props.rapidName
      );
    };
    reader.readAsDataURL(this.state.selectedFile);

    this.props.toggleSetting(this.props.setting);
    e.preventDefault();
  };

  fileChangedHandler = (e) => {
    console.log(e.target.files[0]);
    if (e.target.files[0].size < 209700) {
      this.setState({ selectedFile: e.target.files[0] });
    } else {
      alert("TOO00OO big dude.");
    }
    console.log(this.props.riverName, this.props.rapidName);
    e.preventDefault();
  };

  render() {
    return (
      <div className="SubmitKnowledge">
        <div
          className="fade"
          onClick={() => {
            this.props.toggleSetting(this.props.setting);
          }}
        ></div>

        <form onSubmit={this.handleSubmit} className="form-wrapper">
          <div id="instructions" className="children">
            <div className="instructions-wrapper">
              <div id="title">Share Your River Knowledge</div>
              <ul id="prompt-list">
                <li>Wave missing?</li>
                <li>Hole not appearing at the right level?</li>
                <li>Eddy the wrong shape?</li>
              </ul>
              <ul id="prompt-list">
                <li>Line is not quite right?</li>
                <li>A description could be better?</li>
                <li>Stellar lunch spot not indicated?</li>
              </ul>
              <div className="subtitle">Submit an Image</div>
              <div className="subtitle">Submit an Description</div>
              <div className="body" id="img">
                Take a screen shot of the rapid,use Microsoft Paint to mark the
                location of any feature, eddy, line or hazard.
              </div>
              <div className="body" id="txt">
                Describe what the change that needs to be made. It can
                absolutely anything! Try to be as specific as possible.
              </div>
            </div>
          </div>
          <div id="text-area-wrapper" className="children">
            <textarea
              value={this.state.value}
              onChange={this.handleChange}
              id="text-area"
              placeholder={`CLICK HERE TO TYPE

EXAMPLE: Dragon's Tooth is present from 2ft to 8ft, with
best surfing at 6ft. It is especially retentative at 4ft. I have drawn a line called Mouth of the Dragon in the attached
picture.`}
            />
          </div>

          <label for="file-drop" className="custom-file-upload children">
            {this.state.selectedFile ? (
              <div> {this.state.selectedFile.name}</div>
            ) : (
              <div>Click to Upload a Picture or Drag'n'Drop</div>
            )}
            <input
              id="file-drop"
              type="file"
              accept="image/*"
              onChange={this.fileChangedHandler}
            />
          </label>

          <input
            type="submit"
            value="Submit"
            id="submit-button"
            className="children"
          />
        </form>
      </div>
    );
  }
}

export default SubmitKnowledge;

SubmitKnowledge.propTypes = {
  toggleSetting: PropTypes.func,
  setting: PropTypes.string,
  rapidName: PropTypes.string,
  riverName: PropTypes.string,
};