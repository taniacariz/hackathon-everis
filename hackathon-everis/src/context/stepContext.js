import React from 'react'

const stepContext = React.createContext({
  step: 'null',
  updateStep: () =>{}
});

export default stepContext
