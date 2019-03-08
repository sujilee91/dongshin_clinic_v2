import React from 'react';
import { withStyles, MuiThemeProvider , Grid, Typography} from '@material-ui/core';
import Title from '../components/Title';
import theme from '../styles/theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Clinic from '../images/ClinicDS.png'
import Divider from '@material-ui/core/Divider'

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    padding: '50px 50px 25px',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
    [theme.breakpoints.down('sm')]:{
      padding: '25px',
      paddingTop: '50px'
    },
    textAlign:'right'
  },
  container: {
    maxWidth: '1170px',
    margin: 'auto',
  },
  times: {
    paddingLeft: theme.typography.pxToRem(30)
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
          <Title value={'진료 시간'}/>
          <Grid container spacing={16}>
            <Grid item xs={12} sm={6}>
              <div className={classes.openHour}>
                <Typography variant={"display4"}>
                  평일
                </Typography>
                <Typography variant={"display3"} className={classes.times}>
                  오전 8:30 ~ 오후 6:00
                </Typography>
              </div>
              <div className={classes.openHour}>
                <Typography variant={"display4"}>
                  토요일
                </Typography>
                <Typography variant={"display3"}  className={classes.times}>
                  오전 8:30 ~ 오후 12:30
                </Typography>
              </div>
              <div className={classes.openHour}>
                <Typography variant={"display4"}>
                  일요일 / 국경일
                </Typography>
                <Typography variant={"display3"} className={classes.times}>
                  휴무
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} className={classes.imgContainer}>
              <img src={Clinic} className={classes.img}/>
            </Grid>
          </Grid>
        </div>
      </div>
    </MuiThemeProvider>
    )}
}

export default withStyles(styles)(Info);
