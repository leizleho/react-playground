import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
//import Header from '../../fcomponents/Header.jsx';
import Header from '../../components/Header/Header.jsx';
import GridContainer from '../../components/Grid/GridContainer.jsx';
import GridItem from '../../components/Grid/GridItem.jsx';
import Parallax from '../../components/Parallax/Parallax.jsx';
import playgroundStyle from './playgroundStyle.jsx';
import bg4 from '../../images/bg4.jpg';
function Playground() {
  const classes = playgroundStyle();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }, []);

  return (
    <div>
      <Header
        color="primary"
        brand="React Playground"
        links={''}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: 'info'
        }}
      />
      <Parallax image={bg4} className={classes.Parallax}>
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
      </Parallax>

      <div
        className={classNames(classes.main, classes.mainRaised)}
        id="main-panel"
      >
        <GridContainer>
          <GridItem>
            <div className={classes.brand}>
              <h1>
                Playground <span className={classes.proBadge}>PRO</span>
              </h1>
              <h3 className={classes.title}>Components</h3>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

export default Playground;
