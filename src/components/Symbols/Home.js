import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Home = () => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  let dark = "#232020";
  let light = "honeydew";

  return (
    <Link to="/">
      <svg
        width="53"
        height="51"
        viewBox="0 0 53 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ cursor: "pointer" }}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        <ellipse
          cx="26.7451"
          cy="25.4708"
          rx="25.8216"
          ry="25"
          style={{ fill: `${!hovered ? dark : light}`, transition: "0.3s" }}
        />
        <path
          d="M10.2461 24.4101C9.66028 24.9959 9.66028 25.9456 10.2461 26.5314L19.792 36.0774C20.3778 36.6632 21.3275 36.6632 21.9133 36.0774C22.4991 35.4916 22.4991 34.5418 21.9133 33.956L13.428 25.4708L21.9133 16.9855C22.4991 16.3997 22.4991 15.4499 21.9133 14.8642C21.3275 14.2784 20.3778 14.2784 19.792 14.8642L10.2461 24.4101ZM42.1833 23.9708L11.3067 23.9708V26.9708L42.1833 26.9708V23.9708Z"
          style={{ fill: `${hovered ? dark : light}`, transition: "0.3s" }}
        />
      </svg>
    </Link>
  );
};

export default Home;
