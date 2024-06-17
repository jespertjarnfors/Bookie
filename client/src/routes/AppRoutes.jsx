import { Routes, Route } from 'react-router-dom'
import Login from '../components/Login/Login'
import Home from '../../pages/Home'
import Register from '../components/Register/Register'
import AddProduct from '../../pages/AddProduct'
import Account from '../../pages/Account'
import ContactUs from '../../pages/ContactUs'

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/Login' element={<Login></Login>}></Route>
            <Route path='/Register' element={<Register></Register>}></Route>

            <Route path='/Home' element={<Home></Home>}></Route>
            <Route path='/Add-product' element={<AddProduct></AddProduct>}></Route>
            <Route path='/Account' element={<Account></Account>}></Route>
            <Route path='/Contact-us' element={<ContactUs></ContactUs>}></Route>

            <Route path='*' element={<Login></Login>}></Route>
        </Routes>
    )
}
