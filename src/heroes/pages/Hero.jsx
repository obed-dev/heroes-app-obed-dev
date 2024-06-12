import { Navigate, useParams , useNavigate } from "react-router-dom";
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const Hero = () => {

  const { id } = useParams();
  const  navigater =  useNavigate(); 

  const hero =  useMemo( () => getHeroById( id ),[ id ] );

const onNavigateBack = () => { 

 navigater(-1);
  

 }


  
  if (!hero) {
    return <Navigate   to="/marvel"/>
  }


  return ( 
    <div className="container mt-5">
    <div className="row">
      <div className="col-12 col-md-4 mb-3" >
        <img src={`/assets/heroes/${id}.jpg`} alt={hero.superhero} className="img-thumbnail w-100 animate__animated animate__fadeInLeft "  />
      </div>
      <div className="col-12 col-md-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter Ego:</b> {hero.alter_ego}</li>
          <li className="list-group-item"><b>Publisher:</b> {hero.publisher}</li>
          <li className="list-group-item"><b>First Appearance:</b> {hero.first_appearance}</li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>
        <button className="btn btn-outline-info " onClick={onNavigateBack}>Back</button>
      </div>
    </div>
  </div>
  )
}
