
import { heroes } from "../data/heroes";


export const getHeroesByPublisher = (publisher) => {



    const  validPublishers = ['DC Comics', 'Marvel Comics' ];


    if ( !validPublishers.includes (publisher) ) {
        throw new Error (`${ publisher } doesn't exist`)
    }

    return heroes.filter(heroe =>  heroe.publisher === publisher);
}




