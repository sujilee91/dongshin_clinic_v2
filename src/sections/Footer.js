import React from 'react';
import { withStyles, MuiThemeProvider , Grid, Typography} from '@material-ui/core';
import Title from '../components/Title';
import theme from '../styles/theme'

const styles = (theme) => ({
  root: {
    backgroundColor: '#046BD1',
    marginTop: theme.typography.pxToRem(100)
  },
  container: {
    maxWidth: '1170px',
    margin: 'auto',
  },
  openHour: {
    padding: '10px 25px'
  },
  img: {
    width: '100%',
  },
  imgContainer: {
    margin: 'auto'
  }
});

class Info extends React.Component{

  render(){
    const { classes } = this.props
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <div className={classes.container}>
          <Typography variant={"display4"}>
            평일
          </Typography>
        </div>
      </div>
    </MuiThemeProvider>
    )}
}

export default withStyles(styles)(Info);
