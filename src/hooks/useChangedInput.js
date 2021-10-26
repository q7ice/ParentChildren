import { useState } from 'react';

function useChangedEmail(initialState, id, fieldName, setChange, mapper) {
  const [value, setValue] = useState(initialState);
  const onChange = (e) => {
    let newValue;
    if (mapper) {
      newValue = mapper(e.target.value);
    } else {
      newValue = e.target.value;
    }
    setValue(newValue);
    setChange(id, fieldName, newValue);
  };
  return {
    value,
    onChange,
    setValue,
  };
}

function createUseChangedInput(id, setChange) {
  return (
    initialState,
    fieldName,
    mapper,
  ) => useChangedEmail(initialState, id, fieldName, setChange, mapper);
}

export default createUseChangedInput;
