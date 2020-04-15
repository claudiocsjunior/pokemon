import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
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
    }
  });

  export default useStyles;