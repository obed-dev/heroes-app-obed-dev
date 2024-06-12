import { heroes } from "../data/heroes";


export const getHeroesByName = ( name = '') => {

     if (name === 0 ) return [];

     name.toLowerCase().trim();

     return  heroes.filter ( 
        hero  => hero.superhero.toLowerCase().includes(name)
     );

 }