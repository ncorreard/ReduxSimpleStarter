import React, { Component } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default (props) => {
  return (
    <Sparklines height={120} width={120} data={props.data} >
      <SparklinesLine color={props.color} />
    </Sparklines>
  );
}
