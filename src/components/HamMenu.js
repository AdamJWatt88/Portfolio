import React, { forwardRef } from "react";

const HamMenu = forwardRef(({ onClick }, ref) => {
  return (
    <button
      ref={ref}
      onClick={onClick}
      className='ham-menu'
      id='ham-menu'
      aria-label='Menu'
      aria-controls='menu'
      aria-expanded='false'>
      <div className='ham-menu__bar'></div>
      <div className='ham-menu__bar'></div>
      <div className='ham-menu__bar'></div>
    </button>
  );
});

export default HamMenu;
