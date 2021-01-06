import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

const ToolBar = ({setAreHandlesVisible}) => (
  <ButtonGroup>
    <Button onClick={setAreHandlesVisible} variant="outline-primary">
      Show Handles
    </Button>
  </ButtonGroup>
);

export default ToolBar;
