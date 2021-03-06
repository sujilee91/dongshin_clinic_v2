import React from 'react';
import Title from '../components/Title';
import customTheme from '../styles/theme'
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MapPic from '../images/Map.png'
import Button from '@material-ui/core/Button';

import { Typography } from '@material-ui/core';


const styles = (customTheme) => ({
  root: {
    flexGrow: 1,
    padding: '50px 50px 25px',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
    background: 'linear-gradient(to right, rgba(256,256, 256, 1) 13%, transparent 0)',
    backgroundColor: 'rgba(4, 62, 119, 0.08)',
    [customTheme.breakpoints.down('md')]: {
      padding: '50px 25px',
      background: 'linear-gradient(to right, rgba(4, 62, 119, 0.08) 100%, transparent 0)',
    },
    textAlign: 'center'
  },
  container: {
    maxWidth: '1170px',
    margin: 'auto',
    paddingBottom: customTheme.typography.pxToRem(25)
  },
  map: {
    width: '100%'
  },
  phone: {
    paddingBottom: '20px'
  },
  address: {
    fontFamily: 'Black Han Sans',
    fontSize: 32,
    fontWeight: 500,
    letterSpacing: 0,
    color: '#999797',
    padding: '18px 0px',
    [customTheme.breakpoints.down('md')]: {
      fontSize: 25,
      padding: '20px 0px'
    },
  }
});

const Map = (props) => {
  const { classes } = props
  return (
    <div className={classes.root} name="오시는 길">
      <div className={classes.container}>
        <Title value={'오시는 길'} />
        <MuiThemeProvider theme={customTheme}>
          <Grid container spacing={40} direction={'row-reverse'} >
            <Grid item xs={12} sm={6}>
              <div className={classes.address}>
                <Typography variant={"h5"}>
                  주소
                </Typography>
                <div className={classes.address}>
                  경남 사천시 중앙로 149 (2층)
                </div>
                <div className={classes.address}>
                  경남 사천시 벌리동 495-3
                </div>
              </div>
              <Button variant="contained" color="primary" onClick={() => window.open("https://map.naver.com/?eText=%EB%8F%99%EC%8B%A0%EC%9D%98%EC%9B%90&eType=SITE_1&edid=13261713&elng=8319ca8f33504e9ff745cec556d6bafa&elat=f302fa271f1d581063ca93fe91c5acc9", "_blank")}>
                길 찾기
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} lg={5}>
              <img src={MapPic} className={classes.map} alt="Map" />
            </Grid>
          </Grid>
        </MuiThemeProvider>
      </div>
    </div>
  );
}

export default withStyles(styles)(Map);
