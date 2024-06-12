import { Routes , Route } from 'react-router-dom'


import { LoginPage } from "../auth/index";
import { HeroesRoutes } from "../heroes/index";



export const AppRouter = () => {



  return (
   <> 

   
     <Routes>

       
        <Route  path='/Login'  element={<LoginPage/>} /> 
        <Route  path='/*'  element={<HeroesRoutes/>} /> 
        
             
      

     </Routes>
   </>
  )
}
