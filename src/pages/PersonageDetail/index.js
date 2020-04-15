import React, { useEffect, useState } from 'react';
import { useParams, useHistory} from 'react-router-dom';
import NavBar from '../../components/AppBar';
import { Card, CardContent, Typography, CardActions, Button, List, ListItem, ListItemAvatar, 
  Avatar, ListItemText, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton} from '@material-ui/core';
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
    const [move, setMoves] = useState([]);

    async function handleDetails(){
      try{  
        const response = await pokeApi.get(`api/v2/pokemon/${id}`);
        
        const {name, weight, base_experience, height, order, abilities, forms, species, moves} =  response.data;

        setPersonage({name, weight, base_experience, height, order});
        setAbility(abilities);
        setForms(forms);
        setSpecie(species);
        setMoves(moves);

        console.log(response.data);
      }catch(err){
        alert('Erro na requisição');
      }
    }

    useEffect( () => {
      handleDetails();
    });

    return(
        <div className={classes.root}>
          <NavBar title="Detalhes do Personagem"/>
          <div className={classes.content}>
            <div className={classes.toolbar} />
              <div>
                <Card className={classes.marginCard}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Nome do personagem
                        </Typography>
                        <Typography className={classes.marginTipografy}>
                        {personage.name}
                        </Typography>

                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Experiência para derrotá-lo
                        </Typography>
                        <Typography className={classes.marginTipografy}>
                        {personage.base_experience}
                        </Typography>
                        
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Altura (decímetros)
                        </Typography>
                        <Typography className={classes.marginTipografy}>
                        {`${personage.height} decímetros`}
                        </Typography>
                        
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Peso
                        </Typography>
                        <Typography className={classes.marginTipografy}>
                        {`${personage.weight} hectogramas`} 
                        </Typography>

                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Ordem para Classificação
                        </Typography>
                        <Typography className={classes.marginTipografy}>
                        {personage.order} 
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button 
                        size="small" 
                        onClick={() => {history.goBack()}}>
                            <ChevronLeft/>
                            Voltar a listagem de personagens
                        </Button>
                    </CardActions>
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
                              <ListItemText primary={obj.ability.name} secondary={obj.is_hidden ? 'Habilidade Oculta' : 'Habilidade não Oculta'}/>
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
              <div >
                <TableContainer component={Paper}>
                  <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Movimentos</TableCell>
                        <TableCell align="right">Detalhes</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {move.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell component="th" scope="row">
                            {row.move.name}
                          </TableCell>
                          <TableCell align="right">
                            <IconButton color="primary" onClick={() => {}}>
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
          </div>
        </div>
      );
}