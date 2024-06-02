import Footer from "./Components/Footer/Footer"
import Nav from "./Components/Nav/Nav"
import Cadastro from "./Routes/Cadastro/Cadastro"
import Login from "./Routes/Login/Login"
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <>
      <Outlet/>
    </>
  )
}

export default App
