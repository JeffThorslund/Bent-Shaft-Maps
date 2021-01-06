import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

const ToolBar = ({ areHandlesVisible, setAreHandlesVisible }) => (
  <ButtonGroup>
    <Button
      onClick={setAreHandlesVisible}
      variant={areHandlesVisible ? "primary" : "outline-primary"}
    >
      Show Handles
    </Button>
  </ButtonGroup>
);

export default ToolBar;
