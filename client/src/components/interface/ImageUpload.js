import React from "react";

class ImageUpload extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedFile: null,
    };
  }

  onFileChange = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  onFileUpload = () => {
    const formData = new FormData();
    formData.append("file", this.state.selectedFile);

    fetch("/api/upload", {
      method: "POST",
      body: formData, // post body

      headers: {
        Accept: "multipart/form-data",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.text);
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div>
        <h1>Mongo File Upload Center</h1>
        <input type="file" name="file" id="file" onChange={this.onFileChange} />
        <button onClick={this.onFileUpload}>Upload!</button>
      </div>
    );
  }

  // if (files) {
  //   files.forEach(function (file) {
  //     if (file.isImage) {
  //       return <img src={`image/${file.filename}`} alt="" />;
  //     }
  //   });
  // }
}

export default ImageUpload;
