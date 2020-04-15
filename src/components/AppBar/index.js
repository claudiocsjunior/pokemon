import React from 'react';
import { useHistory } from 'react-router-dom'; 
import clsx from 'clsx';
import { useTheme, Drawer, AppBar, Toolbar, List, CssBaseline, Typography, Divider, IconButton, ListItem, ListItemIcon, ListItemText, Button} from '@material-ui/core';
import {Menu, ChevronLeft, ChevronRight, SupervisedUserCircle, Adb} from '@material-ui/icons';
import useStyles from './styles';
import { isAuthenticated }  from '../../auth';

export default function MiniDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  const userName = localStorage.getItem('appPokemonName');

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const listDrawer = [
      {title: 'Personagens', icon: <SupervisedUserCircle/>, route: '/'},
      {title: 'Tipos', icon: <Adb/>, route: '/types'},
  ]

  function handleLogin() {
    if(!isAuthenticated()){
      history.push('/login');
    }
  }

  function logout(){
    if(isAuthenticated()){
      localStorage.removeItem('appPokemonName');
      history.push('/')
    }
  }

  return (
    <div>  
      <CssBaseline />
      <AppBar position="fixed" className={clsx(classes.appBar, {[classes.appBarShift]: open,})}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" className={clsx(classes.menuButton, {[classes.hide]: open,})}>
            <Menu />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {props.title}
          </Typography>
            <Button onClick={handleLogin} color="inherit">{isAuthenticated() ? userName : 'Login'}</Button>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" className={clsx(classes.drawer, {[classes.drawerOpen]: open, [classes.drawerClose]: !open,})}
        classes={{paper: clsx({[classes.drawerOpen]: open, [classes.drawerClose]: !open,}),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {listDrawer.map((object, index) => (
            <ListItem button onClick={() => history.push(object.route)} key={index}>
              <ListItemIcon>{object.icon}</ListItemIcon>
              <ListItemText primary={object.title} />
            </ListItem>
          ))}
            {isAuthenticated() &&  
            <ListItem button onClick={() => {logout()}}>
              <ListItemIcon><ChevronLeft/></ListItemIcon>
              <ListItemText primary='Logout' />
            </ListItem>
            }
        </List>
      </Drawer>
    </div>
  );
}