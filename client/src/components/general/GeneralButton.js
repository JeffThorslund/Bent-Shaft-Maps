import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

/** A button with multiple styles that can be used for any linking or to execute an action. */

const GeneralButton = ({ to, onClick, text, className, style, variant }) => {
  const history = useHistory();

  const handleClick = () => {
    if (onClick) onClick();
    if (to) history.push(to);
  };

  return (
    <Button
      className={className}
      onClick={() => handleClick()}
      style={style}
      variant={variant}
    >
      {text}
    </Button>
  );
};

export default GeneralButton;
