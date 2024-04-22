
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './Pages/Auth'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'


function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Auth/>}></Route>
        <Route path='/register' element={<Auth insideRegister />}></Route>
        <Route path='/dash' element={<Dashboard/>}></Route>
      </Routes>
    </>
  )
}

export default App
