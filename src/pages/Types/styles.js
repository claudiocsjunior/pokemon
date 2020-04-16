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
    list: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
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
    }
  }));

  export default useStyles;