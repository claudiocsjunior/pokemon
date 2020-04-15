import React from 'react';
import clsx from 'clsx';
import { useTheme, Drawer, AppBar, Toolbar, List, CssBaseline, Typography, Divider, IconButton, ListItem, ListItemIcon, ListItemText, Button} from '@material-ui/core';
import {Menu, ChevronLeft, ChevronRight, SupervisedUserCircle, Adb} from '@material-ui/icons';
import useStyles from './styles';

export default function MiniDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const listDrawer = [
      {title: 'Personagens', icon: <SupervisedUserCircle/>},
      {title: 'Tipos', icon: <Adb/>},
  ]

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
          <Button color="inherit">Login</Button>
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
            <ListItem button key={index}>
              <ListItemIcon>{object.icon}</ListItemIcon>
              <ListItemText primary={object.title} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}