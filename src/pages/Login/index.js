import React, {useState} from 'react';
import {Grid, Card, CardContent, CardActions, Button, TextField} from '@material-ui/core';
import { Alert} from '@material-ui/lab'
import { Home } from '@material-ui/icons';
import {useHistory} from 'react-router-dom';
import useStyles from './styles';


export default function Login(){
    const classes = useStyles();
    const history = useHistory();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({msg: '', value: false});

    function handleLogin(){
        if(name === '' || name !== 'admin' || password === '' || password !== 'admin'){
            setErrors({msg: 'Usuário e/ou senha inválidos.', value: true});
            return;
        }

        localStorage.setItem('appPokemonName', name);
        history.push('/');
    }

    function closeErrors(){
        setErrors({msg: '', value: false})
    }

    return (
        <div>
            {errors.value && <Alert severity="error" onClose={closeErrors}>
                {errors.msg}
            </Alert>}

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
                                    <Home/> 
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
      </div>
    );
}

