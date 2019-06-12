import React from 'react';
import Title from '../components/Title';
import customTheme from '../styles/theme'
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IntMed from '../images/Internal-Medicine.png'
import Derma from '../images/Derma.png'
import Uro from '../images/urology.png'
import Eye from '../images/eye.png'
import Paed from '../images/Paediatrics.png'
import Fam from '../images/Family-Medicine.png'
import Surg from '../images/surg.png'
import Ent from '../images/ENT.png'
import Hidden from '@material-ui/core/Hidden';
import { Typography } from '@material-ui/core';


const styles = (customTheme) => ({
  root: {
    flexGrow: 1,
    padding: '50px 50px 25px',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
    background: 'linear-gradient(to right, rgba(4, 62, 119, 0.08) 85%, transparent 0)',
    [customTheme.breakpoints.down('md')]:{
      padding: '50px 25px',
      background: 'linear-gradient(to right, rgba(4, 62, 119, 0.08) 95%, transparent 0)',
    },
    [customTheme.breakpoints.down('sm')]:{
      padding: '50px 25px',
      background: 'linear-gradient(to right, rgba(4, 62, 119, 0.08) 100%, transparent 0)',
    },
  },
  container: {
    maxWidth: '1170px',
    margin: 'auto'
  },
  cards: {
    marginTop: '2.5rem',
    marginBottom: '2.5rem',
    textAlign: 'center',
    maxWidth:customTheme.typography.pxToRem(1000),
    margin: 'auto',
    [customTheme.breakpoints.down('sm')]:{
      textAlign: 'left',
    }
  },
  buttonGrid: {
    textAlign: 'center'
  },
  icons: {
    borderRadius: customTheme.typography.pxToRem(150),
    width: customTheme.typography.pxToRem(150),
    height:  customTheme.typography.pxToRem(150),
    margin: 'auto',
    [customTheme.breakpoints.down('sm')]:{
      width: customTheme.typography.pxToRem(80),
      height:  customTheme.typography.pxToRem(80),
      verticalAlign: 'middle',
    },
    [customTheme.breakpoints.down('xs')]:{
      width: customTheme.typography.pxToRem(50),
      height:  customTheme.typography.pxToRem(50),
      verticalAlign: 'middle',
    },
  },
  smallText: {
    paddingLeft: '15px',
    verticalAlign: 'middle',
    fontFamily: 'Do Hyeon',
    fontSize: '18px',
    fontWeight: 500,
    lineHeight: 1.04,
    letterSpacing: 0,
    paddingTop: '20px'
  }
});

const Department = (props) =>{
  const { classes } = props
  return (
    <div className={classes.root}  name="진료 과목">
      <div className={classes.container}>
        <Title value={'진료 과목'}/>
        <MuiThemeProvider theme={customTheme}>
          <Grid container spacing={24} className={classes.cards}>
            <Grid item md={3} sm={4} xs={6}>
              <img src={IntMed} className={classes.icons} alt="int"/>
              <Hidden mdUp>
                <span  className={classes.smallText}>
                  내과
                </span>
              </Hidden>
              <Hidden smDown>
                <Typography variant={"subtitle2"}>
                  내과
                </Typography>              
              </Hidden>
            </Grid>
            <Grid item md={3} sm={4} xs={6}>
              <img src={Surg} className={classes.icons} alt="surg"/>
              <Hidden mdUp>
                <span  className={classes.smallText}>
                  외과
                </span>
              </Hidden>
              <Hidden smDown>
                <Typography variant={"subtitle2"}>
                  외과
                </Typography>              
              </Hidden>
            </Grid>
            <Grid item md={3} sm={4} xs={6}>
              <img src={Derma} className={classes.icons} alt="Derm"/>
              <Hidden mdUp>
                <span  className={classes.smallText}>
                  피부과
                </span>
              </Hidden>
              <Hidden smDown>
                <Typography variant={"subtitle2"}>
                  피부과
                </Typography>              
              </Hidden>
            </Grid>
            <Grid item md={3} sm={4} xs={6}>
              <img src={Eye} className={classes.icons} alt="eye"/>
              <Hidden mdUp>
                <span  className={classes.smallText}>
                  안과
                </span>
              </Hidden>
              <Hidden smDown>
                <Typography variant={"subtitle2"}>
                  안과
                </Typography>              
              </Hidden>
            </Grid>
            <Grid item md={3} sm={4} xs={6}>
              <img src={Fam} className={classes.icons} alt="Fam"/>
              <Hidden mdUp>
                <span  className={classes.smallText}>
                  가정의학과
                </span>
              </Hidden>
              <Hidden smDown>
                <Typography variant={"subtitle2"}>
                  가정의학과
                </Typography>              
              </Hidden>
            </Grid>
            <Grid item md={3} sm={4} xs={6}>
              <img src={Uro} className={classes.icons} alt="Uro"/>
              <Hidden mdUp>
                <span  className={classes.smallText}>
                  비뇨기과
                </span>
              </Hidden>
              <Hidden smDown>
                <Typography variant={"subtitle2"}>
                  비뇨기과
                </Typography>              
              </Hidden>
            </Grid>
            <Grid item md={3} sm={4} xs={6}>
              <img src={Paed} className={classes.icons} alt="Paed"/>
              <Hidden mdUp>
                <span  className={classes.smallText}>
                  소아청소년과
                </span>
              </Hidden>
              <Hidden smDown>
                <Typography variant={"subtitle2"}>
                  소아청소년과
                </Typography>              
              </Hidden>
            </Grid>
            <Grid item md={3} sm={4} xs={6}>
              <img src={Ent} className={classes.icons} alt="Ent"/>
              <Hidden mdUp>
                <span  className={classes.smallText}>
                  이비인후과
                </span>
              </Hidden>
              <Hidden smDown>
                <Typography variant={"subtitle2"}>
                  이비인후과
                </Typography>              
              </Hidden>
            </Grid>
          </Grid>
        </MuiThemeProvider>
      </div>
    </div>
    );
}

export default withStyles(styles)(Department);
