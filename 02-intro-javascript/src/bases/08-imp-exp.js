//import { heroes } from './data/heroes'
//import {heroes} from './data/heroes'

import  heroes, {owners}  from "../data/heroes";

//import  {heroes, owners}  from "./data/heroes";

//heroes exportacion por defecto
// {owners} desecturatu exportacion individual

console.log(owners)

export const getHeroesById = (id) => heroes.find(heroe => heroe.id === id);



console.log(getHeroesById(3));


export const getHeroByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);


console.log(getHeroByOwner('DC'))
