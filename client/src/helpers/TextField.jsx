import React, { Component } from 'react';
import { default as MuiTextField } from 'material-ui/TextField';

const TextField = (props) => {
  let { stateHandler, name } = props;
  let state = stateHandler.get();

  return(
    <MuiTextField
      defaultValue={state[name]}
      onChange={(ev) => stateHandler.set(name, ev.target.value)}
      {...props}
    />
  )
};

export default TextField;
