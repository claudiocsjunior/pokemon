import React, { useEffect, useState } from 'react';
import { useParams, useHistory} from 'react-router-dom';
import NavBar from '../../components/AppBar';
import { Card, CardContent, Typography, CardActions, Button, List, ListItem, ListItemAvatar, Avatar, ListItemText, CircularProgress} from '@material-ui/core';
import { ChevronLeft, Image } from '@material-ui/icons';
import useStyles from './styles';
import './styles.css';

import pokeApi from '../../services/pokeApi';

export default function PersonageDetail(){ 
    const classes = useStyles();
    const {id} = useParams();
    const history = useHistory();
    const [personage, setPersonage] = useState({});
    const [ability, setAbility] = useState([]);
    const [forms, setForms] = useState([]);
    const [specie, setSpecie] = useState({});
    const [loading, setLoading] = useState(false);

    async function handleDetails(){
      try{  
        setLoading(true);

        const response = await pokeApi.get(`api/v2/pokemon/${id}`);
        
        const {name, weight, base_experience, height, order, abilities, forms, species} =  response.data;

        setPersonage({name, weight, base_experience, height, order});
        setAbility(abilities);
        setForms(forms);
        setSpecie(species);

        setLoading(false);
      }catch(err){
        alert('Erro na requisição');
      }
    }

    useEffect( () => {
      handleDetails();
    }, [id]);

    return(
        <div className={classes.root}>
          <NavBar title="Detalhes do Personagem"/>
          <div className={classes.content}>
            <div className={classes.toolbar} />
              {loading && <CircularProgress color="secondary" />}
              {!loading && <div>
                <div>
                  <Card className={classes.marginCard}>
                      <CardContent>
                          <Typography className={classes.title} color="textSecondary" gutterBottom>
                          Nome do personagem
                          </Typography>
                          <Typography className={classes.marginTipografy} color="primary">
                          {personage.name}
                          </Typography>

                          <Typography className={classes.title} color="textSecondary" gutterBottom>
                          Experiência para derrotá-lo
                          </Typography>
                          <Typography className={classes.marginTipografy} color="primary">
                          {personage.base_experience}
                          </Typography>
                          
                          <Typography className={classes.title} color="textSecondary" gutterBottom>
                          Altura
                          </Typography>
                          <Typography className={classes.marginTipografy} color="primary">
                          {`${personage.height} decímetros`}
                          </Typography>
                          
                          <Typography className={classes.title} color="textSecondary" gutterBottom>
                          Peso
                          </Typography>
                          <Typography className={classes.marginTipografy} color="primary">
                          {`${personage.weight} hectogramas`} 
                          </Typography>

                          <Typography className={classes.title} color="textSecondary" gutterBottom>
                          Ordem para Classificação
                          </Typography>
                          <Typography className={classes.marginTipografy} color="primary">
                          {personage.order} 
                          </Typography>
                      </CardContent>
                  </Card>
                </div>
                <div className={classes.marginCard}>
                  <div className="containerCards">
                    <Card>
                      <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Habilidades
                        </Typography>
                        <List className={classes.list}>
                          { ability.map((obj, index) => {
                            return (
                              <ListItem key={index}>
                                <ListItemAvatar>
                                  <Avatar>
                                    <Image />
                                  </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={obj.ability.name} secondary={<Typography style={{ color: '#f50057', fontSize: 12 }}> {obj.is_hidden ? 'Habilidade Oculta' : 'Habilidade não Oculta'}</Typography>}/>
                              </ListItem>
                            );
                          })}
                        </List>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Formas
                        </Typography>
                        <List className={classes.list}>
                          { forms.map((obj, index) => {
                            return (
                              <ListItem key={index}>
                                <ListItemAvatar>
                                  <Avatar>
                                    <Image />
                                  </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={obj.name} />
                              </ListItem>
                            );
                          })}
                        </List>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Espécie
                        </Typography>
                        <List className={classes.list}>
                          <ListItem>
                            <ListItemAvatar>
                              <Avatar>
                                <Image />
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={specie.name}/>
                          </ListItem>
                        </List>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div>
                <Card>
                  <CardActions>
                      <Button 
                      size="small" 
                      color="secondary"
                      onClick={() => {history.goBack()}}>
                          <ChevronLeft/>
                          Voltar
                      </Button>
                  </CardActions>
                </Card>
              </div>
                </div>}         
          </div>
        </div>
      );
}