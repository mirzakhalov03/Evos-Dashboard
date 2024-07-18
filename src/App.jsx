import './App.css'
import Admin from './routers/admin/Admin'
import { Routes, Route } from 'react-router'
import Employees from './routers/employees/Employees'
import Menu from './routers/menu/Menu'
import Recipes from './routers/recipes/Recipes'
import Home from './routers/home/Home'
import Login from './routers/auth/Login'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/admin' element={<Admin />}>
        <Route path='/admin/employees' element={<Employees />} />
        <Route path='/admin/menu' element={<Menu />} />
        <Route path='/admin/recipes' element={<Recipes />} />
      </Route> 
      <Route path='/login' element={<Login />} />
      
    </Routes>
    </>
  )
}

export default App
