import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab'
import logo from '../../assets/logo.svg'
import Button from '@material-ui/core/Button'
import { Link } from "react-router-dom"
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

function ElevationScroll(props) {
  const { children } = props;

  //**useScrollTrigger is a hook from Material UI, event listener for when user is scrolling */
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em"
  },
  logo: {
    height: "8em",

  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimates,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "50px",
    height: "45px",
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor:"transparent"
    }
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: "0px",

  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1
    }
  }
}))

export default function Header(props) {

  // HOOKS
  const classes = useStyles();
  const [value, setValue] = useState(0);
  // this is the state which will store whatever 
  //  component we click on and where we want the
  //  menu to be rendered
  const [anchorEl, setAnchorEl] = useState(null);

  // This will determine the visibility of the Menu
  //  and whether or not the menu will be displayed on
  //  the screen or not.
  const [open, setOpen] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState(0);

  // Helper Functions

  // Takes click event containing info about where we just
  //  clicked on the screen. Tell our menu where we want it
  //  to be rendered
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
    setOpen(true)
  }

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpen(false);
    setSelectedIndex(i)
  }

  // For when menu closes. 
  const handleClose = (e) => {
    setAnchorEl(null)
    setOpen(false)
  }

  const menuOptions = [
    {name: "Services", link: "/services"}, 
    {name: "Custom Software Development", link: "/customsoftware"},
    {name: "Mobile App Development", link: "/mobileapps"},
    {name: "Website Development", link: "/websites"},
  ]

  const handleChange = (e, value) => {
    setValue(value)
  }

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0)
    } else if (window.location.pathname === "/services" && value !== 1) {
      setValue(1)
    } else if (window.location.pathname === "/revolution" && value !== 2) {
      setValue(2)
    } else if (window.location.pathname === "/about" && value !== 3) {
      setValue(3)
    } else if (window.location.pathname === "/contact" && value !== 4) {
      setValue(4)
    } else if (window.location.pathname === "/estimate" && value !== 5) {
      setValue(5)
    }
  }, [value]);

  return (
    <>
      <ElevationScroll>
        <AppBar position='fixed'>
          <Toolbar disableGutters>
            <Button 
              component={Link} to="/" 
              onClick={() => setValue(0)} 
              className={classes.logoContainer}
              disableRipple
              >
              <img 
                alt="company logo" 
                src={logo} 
                className={classes.logo}
              />
            </Button>
            <Tabs 
              value={value} 
              onChange={handleChange} 
              className={classes.tabContainer}
              indicatorColor="primary"
            >
              <Tab 
                aria-owns={ anchorEl ? "simple-menu" : undefined }
                aria-haspopup={anchorEl ? "true" : undefined }
                onMouseOver={event => handleClick(event)}
                className={classes.tab}
                component={Link}
                to="/"
                label="Home"
              />
              <Tab
                aria-owns={ anchorEl ? "simple-menu" : undefined }
                aria-haspopup={anchorEl ? "true" : undefined }
                onMouseOver={event => handleClick(event)}
                className={classes.tab} 
                component={Link} 
                to="/services" 
                label="Services" 
              />
              <Tab 
                className={classes.tab} 
                component={Link} 
                to="/revolution" 
                label="The Revolution" 
              />
              <Tab 
                className={classes.tab} 
                component={Link} 
                to="/about" 
                label="About Us" 
              />
              <Tab 
                className={classes.tab} 
                component={Link} 
                to="/contact" 
                label="Contact Us" 
              />
            </Tabs>
            <Button 
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Free Estimate
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              classes={{paper: classes.menu}}
              MenuListProps={{ onMouseLeave: handleClose }}
              elevation={0}
            >
              {menuOptions.map((option, i) => (
                <MenuItem
                  key={option}
                  component={Link}
                  to={option.link}
                  classes={{root: classes.menuItem}}
                  onClick={(event) => {handleMenuItemClick(event, i); 
                                      setValue(1);
                                      handleClose()}} 
                                      selected={i === selectedIndex}
                  >
                  {option.name}
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
}