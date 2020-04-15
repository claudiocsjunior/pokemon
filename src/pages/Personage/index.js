import React, {useState ,useEffect} from 'react';
import useStyles from './styles';

import NavBar from '../../components/AppBar';
import Card from '../../components/Card';

import pokeApi from '../../services/pokeApi';

import './style.css';

export default function Personage(){
  const classes = useStyles();
  const [personages, setPersonage] = useState([]);

  useEffect(() => {
    handleGetPersonage()
  }, []);

  async function handleGetPersonage(){
    try{
      const response = await pokeApi.get('api/v2/pokemon');
      setPersonage(response.data.results);
    }catch(err){
      alert('Erro na requisição a api');
    }
  } 
  
  return(
    <div className={classes.root}>
      <NavBar title="Personagens"/>
      <div className={classes.content}>
        <div className={classes.toolbar} />
          <div className="containerCards">
          {personages.map((row, index) => (
            <Card key={index} name={row.name} color={index % 2 === 0 ? 'primary' : 'secondary'} url={row.url}/>
          ))}
          </div>
      </div>
    </div>
  );
}