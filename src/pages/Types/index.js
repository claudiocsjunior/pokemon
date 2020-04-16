import React, {useState ,useEffect} from 'react';
import { Card, CardContent, ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core';
import { Image } from '@material-ui/icons';
import useStyles from './styles';

import NavBar from '../../components/AppBar';

import pokeApi from '../../services/pokeApi';
import './styles.css';

export default function Types(){
    const classes = useStyles();
    const [types, setTypes] = useState([]);

    useEffect(() => {
        handleGetTypes()
    }, []);

    async function handleGetTypes(){
        try{
            const response = await pokeApi.get('api/v2/type/');
            setTypes(response.data.results);
        }catch(err){
            alert('Erro na requisição a api');
        }
    }

    return(
        <div className={classes.root}>
          <NavBar title="Tipos"/>
          <div className={classes.content}>
            <div className={classes.toolbar} />
              <div className="containerTypes">
              { types.map((obj, index) => {
                  return (
                  <Card>
                    <CardContent>
                        <ListItem key={index}>
                          <ListItemAvatar>
                            <Avatar>
                              <Image />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText className={index % 2 === 0 ? classes.fontPrimary : classes.fontSecondary} primary={obj.name} />
                        </ListItem>
                    </CardContent>
                  </Card>
                );
                })}
              </div>
          </div>
        </div>
    
      );
}
