import React from 'react';

const useToggle = (initialValue = false) => {
  const [value, setValue] = React.useState(initialValue);
  const toggle = React.useCallback(() => {
    setValue((v) => !v);
  }, []);
  return { value, set: toggle };
};

export default useToggle;
