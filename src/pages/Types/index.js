import React, {useState ,useEffect} from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton} from '@material-ui/core';
import { DoubleArrow } from '@material-ui/icons';
import useStyles from './styles';

import NavBar from '../../components/AppBar';

import pokeApi from '../../services/pokeApi';

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
              <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {types.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
          </div>
        </div>
    
      );
}
