import React, { Component } from "react";
import "./MobileAlert.css";

export class MobileAlert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orientation: null,
    };
  }

  render() {
    var isMobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
      navigator.userAgent
    );

    let flipYourPhone = null;

    if (isMobile && window.screen.height > window.screen.width) {
      flipYourPhone = <div className="flip">Flip ya dam phone</div>;
    }

    window.onresize = () => {
      this.setState({
        orientation: window.screen.orientation.type,
      });
    };

    return <>{flipYourPhone}</>;
  }
}

export default MobileAlert;
