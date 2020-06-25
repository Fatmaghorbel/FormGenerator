import React, { Fragment } from 'react';
import Text from './Text';
import Integer from './Integer';

const Widget = (props) => {
  const { type } = props
  switch (type) {
    case "INTEGER": {
      return <Integer {...props} />
      break;
    }
    case "TEXT": {
      return <Text {...props} />
      break;
    }
  }
  return <Fragment />
};

export default Widget