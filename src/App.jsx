
import { AppRouter } from "../src/router/AppRouter";

import './App.css'
import { AuthProvider } from "./auth";

function App() {
  


  return (
    <AuthProvider>
      <AppRouter />
      
    
    </AuthProvider>
  )
}

export default App
