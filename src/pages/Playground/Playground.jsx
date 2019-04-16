import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header.jsx';
import playgroundStyle from './playgroundStyle.jsx';

function Playground() {
  const classes = playgroundStyle();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }, []);

  return (
    <div>
      <Header
        color="transparent"
        brand="React Playground"
        links={''}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: 'info'
        }}
      />
      <h1>Hello H1</h1>
      <h2>Hello H2</h2>
    </div>
  );
}

export default Playground;
