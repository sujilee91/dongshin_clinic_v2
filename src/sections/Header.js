import React from 'react';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import theme from '../styles/theme'

const styles = () => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#046BD1'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  toolBar: {
    minWidth: '1170px',
    margin: 'auto',
    justifyContent: 'space-between'
  },
  menus: {
    padding: '5px',
    marginRight: '20px',
    right: 0
  },
  title: {
    justifyContent: 'flex-start',
  }
});

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    const { classes } = this.props
    return (
      <MuiThemeProvider theme={theme}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            <div className={classes.title}>
                동신의원
            </div>
            <Hidden smDown={true}>
              <div>
                <Button color="inherit" className={classes.menus}> 병원 소개 </Button>
                <Button color="inherit" className={classes.menus}> 진료 안내 </Button>
                <Button color="inherit" className={classes.menus}> 진료 문의 </Button>
                <Button color="inherit" className={classes.menus}> 오시는 길</Button>
              </div>
            </Hidden>
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(Header);
