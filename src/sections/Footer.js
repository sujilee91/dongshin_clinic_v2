import React from 'react';
import { withStyles, MuiThemeProvider , Grid} from '@material-ui/core';
import theme from '../styles/theme'
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

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
  title: {
    fontFamily: 'Gothic A1',
    fontSize: '20px',
    fontWeight: 600,
    color: 'white',
    marginBottom: '20px',
    textDecoration: 'none',
    cursor: 'pointer'
  },
  logo: {
    paddingRight: '10px',
    margin: 'auto',
    verticalAlign: 'middle'
  },
  dev: {
    textAlign: 'right',
    verticalAlign: 'bottom'
  },
  tag: {
    color: 'white',
    fontFamily: 'Nanum Myeongjo',
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 1.04,
    letterSpacing: 0,
    textDecoration: 'none',
  },
  dir: {
    fontFamily: 'Gothic A1',
    fontSize: '13px',
    fontWeight: 500,
    color: 'white',
    marginTop: '10px',
    marginLeft: '40px',
    textDecoration: 'none',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]:{
      display: 'block'
    },
  }
});

class Info extends React.Component{

  render(){
    const { classes } = this.props
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Grid container className={classes.container} justify={"flex-end"}>
          <Grid item sm={6} xs={12} >
            <span onClick={()=>{scroller.scrollTo('동신의원', {
              duration: 1000,
              delay: 100,
              smooth: true,
              offset: -50
            })}} className={classes.title}>
              <img src="./DS.png" height="28px" widhth="28px" className={classes.logo} alt="Clinic"/> 
              <span>동신의원</span> 
            </span>
            <span  onClick={()=>{scroller.scrollTo('병원 소개', {
              duration: 1000,
              delay: 100,
              smooth: true,
              offset: -50
            })}}className={classes.dir}>
              병원 소개
            </span>
            <span  onClick={()=>{scroller.scrollTo('진료 과목', {
              duration: 1000,
              delay: 100,
              smooth: true,
              offset: -50
            })}}className={classes.dir}>
              진료 과목
            </span>
            <span  onClick={()=>{scroller.scrollTo('진료 시간', {
              duration: 1000,
              delay: 100,
              smooth: true,
              offset: -50
            })}}className={classes.dir}>
              진료 안내
            </span>
            <span  onClick={()=>{scroller.scrollTo('오시는 길', {
              duration: 1000,
              delay: 100,
              smooth: true,
              offset: -50
            })}}className={classes.dir}>
              오시는 길
            </span>
          </Grid>
          <Grid item sm={6} xs={12} className={classes.dev}>
            <div href="http://www.sujilee.ca" target="_blank" className={classes.tag}>
              2019, Designed & Created by SuJi Lee
            </div>
          </Grid>
        </Grid>
      </div>
    </MuiThemeProvider>
    )}
}

export default withStyles(styles)(Info);
