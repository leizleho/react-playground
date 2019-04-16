import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header.jsx';
import GridContainer from '../../components/Grid/GridContainer.jsx';
import GridItem from '../../components/Grid/GridItem.jsx';
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
      <div className={classes.container}>
        <GridContainer>
          <GridItem>
            <div className={classes.brand}>
              <h1>
                Playground <span className={classes.proBadge}>PRO</span>
              </h1>
              <h3 className={classes.title}>All Components</h3>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

export default Playground;
