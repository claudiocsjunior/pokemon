import React from 'react';
import { useParams, useHistory} from 'react-router-dom';
import NavBar from '../../components/AppBar';
import { Card, CardContent, Typography, Divider, CardActions, Button} from '@material-ui/core';
import { ChevronLeft } from '@material-ui/icons';
import useStyles from './styles';

export default function PersonageDetail(){ 
    const classes = useStyles();
    const {id} = useParams();
    const history = useHistory();

    return(
        <div className={classes.root}>
          <NavBar title="Detalhes do Personagem"/>
          <div className={classes.content}>
            <div className={classes.toolbar} />
              <div>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Nome do personagem
                        </Typography>
                        <Typography className={classes.marginTipografy}>
                            Teste
                        </Typography>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Experiência
                        </Typography>
                        <Typography className={classes.marginTipografy}>
                          askdjaskldj l
                        </Typography>
                    </CardContent>
                    <Divider/>
                    <CardActions>
                        <Button 
                        size="small" 
                        onClick={() => {history.goBack()}}>
                            <ChevronLeft/>
                            Voltar a listagem de personages
                        </Button>
                    </CardActions>
                </Card>
              </div>
          </div>
        </div>
      );
}