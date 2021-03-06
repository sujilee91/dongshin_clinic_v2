import React from 'react'
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import theme from '../styles/theme'
import backImage from '../images/med.png'
import ds2 from '../images/DS2.png'
import Sam from '../images/Sam.png'
import GNU from '../images/GNU.png'
import Asan from '../images/Asan.png'

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: '100px',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
    backgroundColor: 'rgba(4, 107, 209, 0.2)',
  },
  container: {
    maxWidth: '1170px',
    margin: 'auto',
    marginTop: '1rem',
    paddingLeft: theme.typography.pxToRem(50),
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.typography.pxToRem(0),
      textAlign: 'center',
    },
    backgroundColor: 'none',
  },
  title1: {
    color: '#08219A',
    [theme.breakpoints.down('md')]: {
      fontSize: theme.typography.pxToRem(80),
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.pxToRem(60),
    },
  },
  title2: {
    textShadow: '0px 0px 30px #08219A',
    paddingTop: '15px',
    marginBottom: '35px',
    paddingLeft: '15px',
    color: theme.palette.primary.contrastText,
    fontSize: '23px',
    lineHeight: '28px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
      paddingLeft: '7px',
      paddingRight: '7px',
    },
  },
  title3: {
    textShadow: '0px 0px 30px #08219A',
    paddingLeft: '15px',
    color: theme.palette.primary.contrastText,
    fontSize: '23px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
      paddingLeft: '7px',
      paddingRight: '7px',
    },
  },
  divider: {
    maxWidth: '80%',
    [theme.breakpoints.down('sm')]: {
      margin: 'auto',
    },
  },
  backImage: {
    position: 'absolute',
    zIndex: '-999',
    right: 0,
    width: theme.typography.pxToRem(500),
    opacity: '0.5',
    [theme.breakpoints.down('xs')]: {
      bottom: '-70px',
      width: theme.typography.pxToRem(450),
    },
  },
  docImg: {
    width: theme.typography.pxToRem(300),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.typography.pxToRem(50),
    },
    display: 'block',
    margin: 'auto',
  },
  titleContainer: {
    paddingTop: theme.typography.pxToRem(65),
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.typography.pxToRem(50),
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.typography.pxToRem(0),
    },
  },
  img: {
    width: '100px',
    height: '27.8px',
    backgroundColor: 'white',
    borderRadius: '25px',
    verticalAlign: 'bottom',
    margin: '10px',
  },
  corp: {
    bottom: '-50px',
    position: 'relative',
    paddingTop: '50px',
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.typography.pxToRem(50),
      bottom: 0,
    },
  },
})

const Main = (props) => {
  const { classes } = props
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.imageWrapper} name="동신의원">
        <img src={backImage} className={classes.backImage} alt="bg" />
      </div>
      <div className={classes.root}>
        <Grid container={true} spacing={0} className={classes.container}>
          <Grid item={true} xs={12} sm={6} className={classes.titleContainer}>
            <Typography variant="h3" className={classes.title3}>
              사랑과 정성을 다합니다.
            </Typography>
            <Typography variant="h3" className={classes.title2}>
              30년 경력의 가정의학과 전문의와 함께하는 -
            </Typography>
            <Typography variant="h1" className={classes.title1}>
              동신의원
            </Typography>
            <div className={classes.corp}>
              <Typography variant="subtitle1">협력 기관</Typography>
              <img src={Asan} className={classes.img} alt="Asan" />
              <img src={GNU} className={classes.img} alt="GNU" />
              <img src={Sam} className={classes.img} alt="Samsung" />
            </div>
          </Grid>
          <Grid item={true} xs={12} sm={6} className={classes.docImgContainer}>
            <img src={ds2} className={classes.docImg} alt="ds" />
          </Grid>
        </Grid>
      </div>
    </MuiThemeProvider>
  )
}

export default withStyles(styles)(Main)
