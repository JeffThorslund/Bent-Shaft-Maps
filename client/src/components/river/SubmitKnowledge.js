import React, { Component } from "react";
import "./SubmitKnowledge.css";
import PropTypes from "prop-types";
const axios = require("axios");

export class SubmitKnowledge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      desc: "",
      selectedFileBase64: null,
      selectedFileName: null,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    axios
      .post("/api/sendMail", {
        img: this.state.selectedFileBase64,
        desc: this.state.desc,
        email: this.state.email,
        river: this.props.name,
        rapid: this.props.rapidName,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    this.props.toggleSetting(this.props.setting);
    e.preventDefault();
  };

  fileChangedHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      this.setState({ selectedFileBase64: reader.result });
    };

    console.log(e.target.files[0]);
    if (e.target.files[0].size < 5000000) {
      this.setState({ selectedFileName: e.target.files[0].name });
      reader.readAsDataURL(e.target.files[0]);
    } else {
      alert("Thats a HUGE file. Try one under 5MB.");
    }
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
                <li>A secret channel opens up at high water?</li>
              </ul>
              <div className="subtitle">
                <b>Submit an Image </b>(Optional)
              </div>
              <div className="subtitle">
                <b>Submit a Description</b>
              </div>
              <div className="body" id="img">
                Take a screen shot of the rapid, use Microsoft Paint to mark the
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
              value={this.state.desc}
              onChange={this.handleChange}
              name="desc"
              id="text-area"
              placeholder={`CLICK HERE TO TYPE

EXAMPLE: Dragon's Tooth Wave is present in the rapid from 2ft to 8ft, not at the levels currently marked. It is especially retentative at 4ft. I have drawn a line called Mouth of the Dragon in the attached picture.`}
            />

            <input
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              id="email"
              name="email"
              placeholder={"Email (Optional)"}
            />
          </div>

          <label for="file-drop" className="custom-file-upload children">
            {this.state.selectedFileName ? (
              <div> {this.state.selectedFileName}</div>
            ) : (
              <div>Click to Upload a Picture</div>
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
  name: PropTypes.string,
};
