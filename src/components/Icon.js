// How this would work with SVG. 
// More info on:
// https://css-tricks.com/creating-svg-icon-system-react/


import React from 'react';

const icons = {
  trash: 'M192 1024h640l64-704h-768zM640 128v-128h-256v128h-320v192l64-64h768l64 64v-192h-320zM576 128h-128v-64h128v64z',
  add: 'M16.5 8H.5M8.5 0v16',
};

let Icon = props => (
  // <svg className=" icon" 
  // viewBox="0 0 1024 1024">
  //   <path d={icons[props.icon]}></path>
  // </svg>

  <i   className={props.icon +'-icon icon'}
  ></i>
);

export default Icon;