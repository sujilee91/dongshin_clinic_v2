import React from 'react';
import Title from '../components/Title';
import customTheme from '../styles/theme'
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import IntMed from '../images/Internal-Medicine.png'
import Derma from '../images/Derma.png'
import Uro from '../images/urology.png'
import Eye from '../images/eye.png'
import Paed from '../images/Paediatrics.png'
import Fam from '../images/Family-Medicine.png'
import Surg from '../images/surg.png'
import Ent from '../images/ENT.png'

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
    margin: 'auto'
  },
  buttonGrid: {
    textAlign: 'center'
  },
  aboutCard: {
    borderRadius: customTheme.typography.pxToRem(150),
    width: customTheme.typography.pxToRem(150),
    height:  customTheme.typography.pxToRem(150),
    margin: 'auto'
  },
  icons: {
    width: '100%',
    height: '100%'
  }
});

class About extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
     openDialog: false
    }
  };

  handleClose = () => {
    this.setState({
      openDialog: false
    })
  }

  render(){
  const { classes } = this.props
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Title value={'진료 과목'}/>
        <MuiThemeProvider theme={customTheme}>
          <Grid container spacing={24} className={classes.cards}>
            <Grid item md={3} sm={4} xs={6}>
              <Card className={classes.aboutCard}>
                <img src={IntMed} className={classes.icons}/>
              </Card>
              <Typography variant={"display1"}>
                내과
              </Typography>
            </Grid>
            <Grid item md={3} sm={4} xs={6}>
              <Card className={classes.aboutCard}>
                <img src={Surg} className={classes.icons}/>
              </Card>
              <Typography variant={"display1"}>
                외과
              </Typography>
            </Grid>
            <Grid item md={3} sm={4} xs={6}>
              <Card className={classes.aboutCard}>
                <img src={Derma} className={classes.icons}/>
              </Card>
              <Typography variant={"display1"}>
                피부과
              </Typography>
            </Grid>
            <Grid item md={3} sm={4} xs={6}>
              <Card className={classes.aboutCard}>
                <img src={Eye} className={classes.icons}/>
              </Card>
              <Typography variant={"display1"}>
                안과
              </Typography>
            </Grid>
            <Grid item md={3} sm={4} xs={6}>
              <Card className={classes.aboutCard}>
                <img src={Fam} className={classes.icons}/>
              </Card>
              <Typography variant={"display1"}>
                가정의학과
              </Typography>
            </Grid>
            <Grid item md={3} sm={4} xs={6}>
              <Card className={classes.aboutCard}>
                <img src={Uro} className={classes.icons}/>
              </Card>
              <Typography variant={"display1"}>
                비뇨기과
              </Typography>
            </Grid>
            <Grid item md={3} sm={4} xs={6}>
              <Card className={classes.aboutCard}>
                <img src={Paed} className={classes.icons}/>
              </Card>
              <Typography variant={"display1"}>
                소아청소년과
              </Typography>
            </Grid>
            <Grid item md={3} sm={4} xs={6}>
              <Card className={classes.aboutCard}>
                <img src={Ent} className={classes.icons}/>
              </Card>
              <Typography variant={"display1"}>
                이비인후과
              </Typography>
            </Grid>
          </Grid>
        </MuiThemeProvider>
      </div>
    </div>
    );
  }
}

export default withStyles(styles)(About);
