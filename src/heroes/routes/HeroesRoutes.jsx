import { Navigate , Routes , Route } from 'react-router-dom'
import { Navbar } from "../../ui/components/index";
import { DcPage, Hero, MarvelPage, Search } from '../pages';




export const HeroesRoutes = () => {
  return (
    <>
    <Navbar/> 

   <div  className='container'>
    <Routes>

        <Route  path='/Marvel'  element={<MarvelPage/>} /> 
        <Route  path='/DcPage'  element={<DcPage/>} /> 
        <Route  path='/Search'  element={<Search/>} /> 
        <Route  path='hero/:id'  element={<Hero/>} /> 

       
        <Route  path='/'  element={<Navigate to='/Marvel '/>} /> 
             
      

     </Routes>

     </div>
    </>
  )
}
