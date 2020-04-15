export const isAuthenticated = () => {

    const userName = localStorage.getItem('appPokemonName');
    return userName !== null ? true : false;
    
};