import './App.css'
import Home from './routers/home/Home'
import { Routes, Route } from 'react-router'
import Employees from './routers/employees/Employees'
import Menu from './routers/menu/Menu'
import Recipes from './routers/recipes/Recipes'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='/employees' element={<Employees />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/recipes' element={<Recipes />} />
      </Route>  
      
    </Routes>
    </>
  )
}

export default App
