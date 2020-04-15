import { makeStyles } from '@material-ui/core';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    table: {
      minWidth: 650,
    },
    card: { 
      marginRight: '3%',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
     marginBottom: 12,
    },
    dividerSecondary: {
     backgroundColor: 'rgb(244, 143, 177)'
    },
    fontSecondary: {
     color: 'rgb(244, 143, 177)'
    },
    dividerPrimary: {
     backgroundColor: "#3f51b5"
    },
    fontPrimary: {
      color: "#3f51b5"
    },
    marginTipografy: {
        marginBottom: 10
    }
  }));

  export default useStyles;