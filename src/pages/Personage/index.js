import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton} from '@material-ui/core';
import { DoubleArrow } from '@material-ui/icons';
import useStyles from './styles';

import NavBar from '../../components/AppBar';


function createData(name, base_experience, height, id) {
  return { name, base_experience, height, id};
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 1),
  createData('Ice cream sandwich', 237, 43, 2),
  createData('Eclair', 262, 16.0, 3),
  createData('Cupcake', 305, 3.7, 4),
  createData('Gingerbread', 356, 16.0,5),
];

export default function Personage(){
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <NavBar title="Personagens"/>
      <div className={classes.content}>
        <div className={classes.toolbar} />
          <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="center">Experiência</TableCell>
                  <TableCell align="center">Altura</TableCell>
                  <TableCell align="right">Acessar Personagem</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.base_experience}</TableCell>
                    <TableCell align="center">{row.height}</TableCell>
                    <TableCell align="right">
                      <IconButton color="primary">
                        <DoubleArrow />
                      </IconButton>
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