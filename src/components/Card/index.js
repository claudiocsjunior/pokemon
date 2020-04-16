import React from 'react';
import { Card, CardActions, CardContent, Button, Typography, Divider} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { ChevronRight } from '@material-ui/icons';

import useStyles from './styles';

export default function SimpleCard(props) {
  const classes = useStyles();
  const history = useHistory();

  function handleDetails(){
    const url = props.url;
    console.log(url);
    const array = url.split('/');
    history.push(`personage_details/${array[array.length - 2]}`);
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Nome do personagem
        </Typography>
        <Typography variant="h5" component="h2">
          {props.name}
        </Typography>
        <Divider className={classes.cardBlue}/>
      </CardContent>
      <CardActions>
          <Button 
            size="small" 
            className={props.color === 'primary' ? classes.fontPrimary : classes.fontSecondary}
            onClick={() => handleDetails()}>
              Detalhes <ChevronRight fontSize="small"/>
          </Button>
      </CardActions>
    </Card>
  );
}
