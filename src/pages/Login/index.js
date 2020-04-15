import React, {useState} from 'react';
import {makeStyles, Grid, Card, CardContent, CardActions, Button, TextField, Divider} from '@material-ui/core';
import { ChevronLeft } from '@material-ui/icons';
import {useHistory} from 'react-router-dom';
import useStyles from './styles';


export default function Login(){
    const classes = useStyles();
    const history = useHistory();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(){
        if(name === '' || name !== 'admin' || password === '' || password !== 'admin'){
            alert('Usuário e/ou senha inválido(s)')
        }

        localStorage.setItem('appPokemonName', name);
        history.push('/');
    }

    return (
        <Grid
            container
            direction="row"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
        >
            <Grid item xs={12} sm={4}>
                <Card>
                    <CardContent>
                    <form className={classes.root} noValidate autoComplete="off">
                        <div>
                            <TextField id="name" label="Nome" value={name} onChange={e => setName(e.target.value)}/>
                            <TextField id="password" label="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                        </div>
                    </form>
                    </CardContent>
                    <CardActions>
                        <Grid container justify="space-between" style={{marginRight: '5%', marginLeft: '4%', marginTop: '4%'}}>
                            <Button 
                                onClick={() => {history.push('/')}}
                                variant="contained"
                                color="secondary"
                                >
                                <ChevronLeft/>
                            </Button>
                            <Button 
                                onClick={() => {handleLogin()}}
                                variant="contained"
                                color="primary"
                                >
                                Login
                            </Button>
                        </Grid>   
                    </CardActions>
                </Card>
            </Grid>
      </Grid>
    );
}

