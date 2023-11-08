import { Routes, Route } from 'react-router-dom'
import Login from '../components/Login/Login'
import Home from '../components/Home/Home'
import Register from '../components/Register/Register'

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/Login' element={<Login></Login>}></Route>
            <Route path='/Register' element={<Register></Register>}></Route>

            <Route path='/Home' element={<Home></Home>}></Route>
            <Route path='*' element={<Login></Login>}></Route>
        </Routes>
    )
}
