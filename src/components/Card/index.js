import React from 'react';
import { Card, CardActions, CardContent, Button, Typography, Divider } from '@material-ui/core';

import useStyles from './styles';

export default function SimpleCard(props) {
  const classes = useStyles();

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
        <Button size="small" className={props.color === 'primary' ? classes.fontPrimary : classes.fontSecondary}>Acessar Detalhes do Personagem</Button>
      </CardActions>
    </Card>
  );
}
