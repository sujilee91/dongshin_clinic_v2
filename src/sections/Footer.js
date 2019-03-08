import React from 'react';
import { withStyles, MuiThemeProvider , Grid, Typography, Button} from '@material-ui/core';
import Title from '../components/Title';
import theme from '../styles/theme'

const styles = (theme) => ({
  root: {
    backgroundColor: '#046BD1',
    marginTop: theme.typography.pxToRem(100),
    padding: theme.typography.pxToRem(20),
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
          <Typography variant={"body1"}>
            사랑과 정성을 다하는 -
          </Typography>
          <Typography variant={"body1"}>
              동신의원
          </Typography>
          <Button variant={'text'} onClick={()=> window.open("http://www.sujilee.ca", "_blank")}>
            <Typography variant={"overline"}>
              Designed & created by SuJi Lee
            </Typography>
          </Button>
        </div>
      </div>
    </MuiThemeProvider>
    )}
}

export default withStyles(styles)(Info);
