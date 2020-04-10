import React from "react";
import domtoimage from "dom-to-image";

function DomToImage() {
  const handleClick = () => {
    domtoimage
      .toJpeg(document.getElementById("domtoimage"), { quality: 0.95 })
      .then(function (img) {
        document.body.appendChild(img);
      });
  };

  const style = {
    position: "absolute",
    top: "10vh",
    left: "10vw",
  };

  return (
    <div style={style} onClick={handleClick} id="domtoimage">
        button
      <img src="http://i.imgur.com/eQxoG0h.jpg" alt="a test" />
    </div>
  );
}

export default DomToImage;
