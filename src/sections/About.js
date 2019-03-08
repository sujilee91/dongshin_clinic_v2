import React from 'react';
import { withStyles, MuiThemeProvider , Grid, Card, CardContent, CardMedia, Typography} from '@material-ui/core';
import Title from '../components/Title';
import theme from '../styles/theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    padding: '50px 50px 25px',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
    [theme.breakpoints.down('sm')]:{
      padding: '25px',
    },
  },
  container: {
    maxWidth: '1170px',
    margin: 'auto',
  },
  resumeButton: {
    fontSize: '1rem',
    padding: '10px 30px',
    justifyContent: 'center'
  },
  imageContianer:{},
  image: {
    width: '100%',
  },
  icon: {
    color: theme.palette.primary.main,
    fontSize: theme.typography.pxToRem(160),
    textAlign: 'center',
    margin: 'auto',
    width: '100%'
  },
  iconWrapper: {
    textAlign: 'center',
    margin: 'auto'
  },
  cards: {
    borderRadius: theme.typography.pxToRem(20),
    width: theme.typography.pxToRem(200),
    height:  theme.typography.pxToRem(200),
    margin: 'auto'
  }
});

class About extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      open: false,
      type: ''
    }
  };

  handleClose = () => {
    this.setState({
      open: false
    })
  }

  render(){
    const { classes } = this.props
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <div className={classes.container}>
          <Title value={'병원 소개'}/>
          <Grid container spacing={40}>
            <Grid item xs={12} sm={6} md={4}>
              <Card elevation={1} className={classes.cards}>
                <CardContent>
                  <div className={classes.iconWrapper}>
                    <FontAwesomeIcon icon={['fa', 'heartbeat']} className={classes.icon}/>
                  </div>
                </CardContent>
              </Card>
              <Typography variant="body1">
                      원장 학력
                  </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card elevation={1}>
                <CardContent>              
                  <div className={this.props.classes.imageContianer}>
                  </div>
                  <Typography variant="body1">
                      원장 학력
                  </Typography>
                  <Typography variant="body2" className={this.props.classes.description}>
                      원쟁
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card elevation={1}>
                <CardContent>              
                  <div className={this.props.classes.imageContianer}>
                  </div>
                  <Typography variant="body1">
                      원장 학력
                  </Typography>
                  <Typography variant="body2" className={this.props.classes.description}>
                      원쟁
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    </MuiThemeProvider>
    )}
}

export default withStyles(styles)(About);
