import React from 'react';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import theme from '../styles/theme';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

const styles = () => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    background: 'linear-gradient(to left, rgba(4, 107, 209, 1), #043E77)'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  toolBar: {
    maxWidth: '1170px',
    width: '100%',
    margin: 'auto',
    justifyContent: 'space-between',
  },
  menus: {
    padding: '5px',
    marginRight: '30px',
    right: 0
  },
  title: {
    justifyContent: 'flex-start',
    fontFamily: 'Gothic A1',
    fontSize: '25px',
    fontWeight: 600,
  },
  logo: {
    paddingRight: '10px',
    margin: 'auto',
    verticalAlign: 'middle'
  }
});

class Header extends React.Component {
  state = {
    openMenu: false
  }

  render() {
    const { classes } = this.props
    const { openMenu } = this.state
    return (
      <MuiThemeProvider theme={theme}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            <Button
              variant="text"
              color="inherit"
              className={classes.menus} onClick={() => {
                scroller.scrollTo('동신의원', {
                  duration: 1000,
                  delay: 100,
                  smooth: true,
                  offset: -50
                })
              }}>
              <div className={classes.title}>
                <img src="./DS.png" height="28px" widhth="28px" className={classes.logo} alt="Clinic" />
                동신의원
              </div>
            </Button>
            <Hidden mdUp>
              <Button variant="text" color="inherit" className={classes.title} onClick={() => { this.setState({ openMenu: !openMenu }) }}>
                <MenuIcon />
              </Button>
              <SwipeableDrawer anchor="top" open={openMenu} onClose={() => { this.setState({ openMenu: false }) }} onOpen={() => { this.setState({ openMenu: true }) }}>
                <div
                  tabIndex={0}
                  role="button"
                  onClick={() => { this.setState({ openMenu: false }) }}
                  onKeyDown={() => { this.setState({ openMenu: false }) }}
                >
                  <List>
                    <ListItem button key="Intro" onClick={() => {
                      scroller.scrollTo('병원 소개', {
                        duration: 1000,
                        delay: 100,
                        smooth: true,
                        offset: -50
                      })
                    }}>
                      <Typography variant={"button"}>
                        병원 소개
                      </Typography>
                    </ListItem>
                    <Divider />
                    <ListItem button key="dept" onClick={() => {
                      scroller.scrollTo('진료 과목', {
                        duration: 1000,
                        delay: 100,
                        smooth: true,
                        offset: -50
                      })
                    }}>
                      <Typography variant={"button"}>
                        진료 과목
                      </Typography>
                    </ListItem>
                    <Divider />
                    <ListItem button key="schedule" onClick={() => {
                      scroller.scrollTo('진료 시간', {
                        duration: 1000,
                        delay: 100,
                        smooth: true,
                        offset: -50
                      })
                    }}>
                      <Typography variant={"button"}>
                        진료 시간 및 연락처
                      </Typography>
                    </ListItem>
                    <Divider />
                    <ListItem button key="map" onClick={() => {
                      scroller.scrollTo('오시는 길', {
                        duration: 1000,
                        delay: 100,
                        smooth: true,
                        offset: -50
                      })
                    }}>
                      <Typography variant={"button"}>
                        오시는 길
                      </Typography>
                    </ListItem>
                  </List>
                </div>
              </SwipeableDrawer>
            </Hidden>
            <Hidden smDown={true}>
              <div>
                <Button color="inherit" className={classes.menus} onClick={() => {
                  scroller.scrollTo('병원 소개', {
                    duration: 1000,
                    delay: 100,
                    smooth: true,
                    offset: -50
                  })
                }}>병원 소개</Button>
                <Button color="inherit" className={classes.menus} onClick={() => {
                  scroller.scrollTo('진료 과목', {
                    duration: 1000,
                    delay: 100,
                    smooth: true,
                    offset: -50
                  })
                }}>진료 과목</Button>
                <Button color="inherit" className={classes.menus} onClick={() => {
                  scroller.scrollTo('진료 시간', {
                    duration: 1000,
                    delay: 100,
                    smooth: true,
                    offset: -50
                  })
                }}>진료 안내</Button>
                <Button color="inherit" className={classes.menus} onClick={() => {
                  scroller.scrollTo('오시는 길', {
                    duration: 1000,
                    delay: 100,
                    smooth: true,
                    offset: -50
                  })
                }}>오시는 길</Button>
              </div>
            </Hidden>
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(Header);
