
import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = ({publisher}) => {


  const heroes = useMemo( () => getHeroesByPublisher (publisher) , [publisher]  );
  return (
 
   


      <div className="col-lg-4 col-md-6 col-sm-12">
       
     
         { heroes.map( hero => (  
         <HeroCard  
            key={hero.id}
            {...hero}
         />



         ))  }
       
            
           
        
         </div>


         
   
  )
}


