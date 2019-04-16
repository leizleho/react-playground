import React from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';

// @material-ui/core components
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  grid: {
    marginRight: '-15px',
    marginLeft: '-15px',
    width: 'auto'
  }
});

function GridContainer({ ...props }) {
  const classes = useStyles();
  const { children, className, ...rest } = props;
  return (
    <Grid container {...rest} className={classes.grid + ' ' + className}>
      {children}
    </Grid>
  );
}

GridContainer.defaultProps = {
  className: ''
};

GridContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default GridContainer;
