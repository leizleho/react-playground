import React, { useState, useEffect } from 'react';

function Playground() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }, []);

  return (
    <div>
      <h1>Hello H1</h1>
      <h2>Hello H2</h2>
    </div>
  );
}

export default Playground;
