

import React, { useContext, useEffect, useState } from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { clientContext } from '../contexts/ClientContext';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { Button } from '@material-ui/core';
<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400;500;600;700&display=swap');
</style>

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      color: 'white',
      fontFamily: 'Josefin Sans'
    },
  },
  
  search: {
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    '&:hover': {

      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 50,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
    
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'black',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
      color: 'black'
    },
    paddingLeft: "10%"
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function Navbar() {
  const { productsCountInCart, getProducts, productsCountInFavorite} = useContext(clientContext)
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <div className>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <Link to="/sign-in">
          <MenuItem>Войти</MenuItem>
        </Link>
        <Link to="/sign-up">
          <MenuItem>Регистрация</MenuItem>
        </Link>
        <Link className="unset" to="/admin">
        <MenuItem onClick={handleMenuClose}>Admin</MenuItem>
      </Link>
      </Menu>
    </div>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
         <p>Каталог</p>
        {/* <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={productsCountInCart} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton> */}
        <FavoriteIcon/>
        <p>Корзина</p>
      </MenuItem>
     
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"

        // color={purple}
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>

  );
  //поиск start
  //поиск end
  const history = useHistory()
  const [searchValue, setSearchValue] = useState('')

  const filterProducts = (key, value) => {
    let search = new URLSearchParams(history.location.search)
    search.set(key, value)
    let url = `${history.location.pathname}?${search.toString()}`
    history.push(url)
    getProducts()
  }

  let search = new URLSearchParams(history.location.search)
  useEffect(() => {
    setSearchValue(search.get('q') || '')
  }, [history.location])
  return (
    <div className={classes.grow}>
      <AppBar className="AppBar" position="fixed">
        <Toolbar >
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h5" font-family= 'Josefin Sans' noWrap>
     
          Music Shop
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon className="searchIcon"/>
            </div>
            <InputBase className="inputBase"
              value={searchValue}
              // placeholder="Поиск"
              onChange={(e) => filterProducts('q', e.target.value)}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          <div className="favoriteIcon">
          
          <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={productsCountInFavorite} color="secondary">
                <Link to="/favorite">
                <FavoriteIcon/>
                </Link>
              </Badge>
            </IconButton>

          </div>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={productsCountInCart} color="secondary">
                <Link to="/cart">
                  <ShoppingCartIcon />
                </Link>
              </Badge>
            </IconButton>
            {/* <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
       
         

          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}


