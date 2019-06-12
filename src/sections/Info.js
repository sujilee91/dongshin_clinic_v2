import React from 'react';
import { withStyles, MuiThemeProvider, Grid, Typography } from '@material-ui/core';
import Title from '../components/Title';
import theme from '../styles/theme'
import ClinicSketch from '../images/ClinicSketch.png'

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    padding: '50px 50px 25px',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
    [theme.breakpoints.down('sm')]: {
      padding: '25px',
      paddingTop: '50px'
    },
    textAlign: 'right',
  },
  container: {
    maxWidth: '1170px',
    margin: 'auto',
  },
  times: {
    paddingLeft: theme.typography.pxToRem(30)
  },
  openHour: {
    padding: '10px 18px'
  },
  contact: {
    padding: '10px 0px'
  },
  img: {
    width: '100%',
  },
  imgContainer: {
    margin: 'auto'
  },
  subText: {
    fontFamily: 'Black Han Sans',
    fontSize: 32,
    fontWeight: 500,
    letterSpacing: 0,
    color: '#999797',
    [theme.breakpoints.down('md')]: {
      fontSize: 28,
      padding: '20px 0px'
    },
  },
  miniText: {
    fontWeight: 700,
    color: '#999797',
  }
});

const Info = (props) => {
  const { classes } = props
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root} name="진료 시간">
        <div className={classes.container}>
          <Title value={'진료 시간 & 연락처'} />
          <Grid container spacing={16}>
            <Grid item xs={12} sm={3}>
              <div className={classes.contact}>
                <Typography variant={"caption"}>
                  진료 문의
                </Typography>
                <div className={classes.subText}>
                  055-832-9882
                </div>
              </div>
              <div className={classes.contact}>
                <Typography variant={"caption"}>
                  Fax
                </Typography>
                <div className={classes.subText}>
                  055-832-9881
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={5}>
              <div className={classes.openHour}>
                <Typography variant={"h5"}>
                  평일
                </Typography>
                <div className={classes.subText} >
                  오전 8:30 ~ 오후 6:00
                </div>
                <div className={classes.miniText} >
                  *점심시간 오후 12:30 ~ 1:30
                </div>
              </div>
              <div className={classes.openHour}>
                <Typography variant={"h5"}>
                  토요일
                </Typography>
                <div className={classes.subText}  >
                  오전 8:30 ~ 오후 12:30
                </div>
              </div>
              <div className={classes.openHour}>
                <Typography variant={"h5"}>
                  일요일 / 공휴일
                </Typography>
                <div className={classes.subText} >
                  휴무
                </div>
              </div>

            </Grid>
            <Grid item xs={12} sm={4} className={classes.imgContainer}>
              <img src={ClinicSketch} className={classes.img} alt="Sketch" />
            </Grid>
          </Grid>
        </div>
      </div>
    </MuiThemeProvider>
  )
}

export default withStyles(styles)(Info);
