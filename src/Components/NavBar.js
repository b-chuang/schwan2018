/* import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const NavBar = () => {


    return <div>
        <AppBar position="static" style={{ backgroundColor: "#d22030" 
        }}>
          <Toolbar>
            <Typography variant="title" color="inherit">
              Highland Community Middle School Project Fund
            </Typography>
          </Toolbar>
        </AppBar>
      </div>;
}
export default NavBar;
 */


import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return <div className={classes.root}>
    <AppBar 
      position="static" style={{ backgroundColor: "#d22030"}}
      >
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
         {/*  <MenuIcon>
            <img src={this.state.pageOne.logo} alt="schwan company logo of a swan"
            className="swanLogo" />
          </MenuIcon>  */}
          <Typography align="center" variant="h6" color="inherit" className={classes.grow}>
            Highland Community Middle School Project Fund
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>;
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);