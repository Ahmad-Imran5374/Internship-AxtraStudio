import React from 'react'
import Dashboard from './pages/Dashboard';
import Account from './pages/Account';
import Booking from './pages/Bookings';
import Cabins from './pages/Cabins';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import Setting from './pages/Settings';
import User from './pages/Users';
import GlobalStyles  from './styles/GlobalStyles';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <GlobalStyles/>
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="dashboard"/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='bookings' element={<Booking/>}/>
        <Route path='cabins' element={<Cabins/>}/>
        <Route path='users' element={<User/>}/>
        <Route path='settings' element={<Setting/>}/>
        <Route path='account' element={<Account />}/>
        <Route path='login' element={<Login/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
