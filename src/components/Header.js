import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { useHistory } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'fixed',
    width: '100%',
    zIndex: 10,
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {
    // flexGrow: 1,
    cursor: 'pointer',
    fontWeight: '700',
  },
  appbar: {
    background: 'white',
    color: '#b4b4b4',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuItem: {
    color: '#b4b4b4',
    margin: '0 10px',
    fontSize: 15,
  },
  arrowIcon: {
    marginLeft: theme.spacing(1),
    width: 15,
  },
}));

const menuItems = [
  {
    title: 'Đang chiếu',
    path: '/#dang-chieu',
  },
  {
    title: 'Sắp chiếu',
    path: '/#sap-chieu',
  },
  {
    title: 'Cụm rạp',
    path: '/cum-rap',
  },
];

export default function Header() {
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            className={classes.title}
            onClick={() => history.push('/')}
          >
            HD08
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleClick}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem
                  component="button"
                  underline="none"
                  className={classes.menuItem}
                  onClick={() => history.push('/signin')}
                >
                  Đăng nhập
                  <ArrowForwardIosIcon className={classes.arrowIcon} />
                </MenuItem>
                {menuItems.map((item, index) => (
                  <MenuItem
                    key={index}
                    component="button"
                    underline="none"
                    className={classes.menuItem}
                    onClick={() => history.push(item.path)}
                  >
                    {item.title}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <>
              <div>
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    component="button"
                    underline="none"
                    className={classes.menuItem}
                    onClick={() => history.push(item.path)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
              <Button color="inherit" onClick={() => history.push('/signin')}>
                Đăng nhập
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
