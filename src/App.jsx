import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Home from './Components/Home';
import Start from './Components/Start';
import Login from './Components/Login';
import EmployeeDetail from './Components/EmployeeDetail';
import EmployeeLogin from './Components/EmployeeLogin';
import Dashboard from './Components/Dashboard';
import Employee from './Components/Employee';
import Category from './Components/Category';
import Profile from './Components/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddCategory from './Components/AddCategory';
import AddEmployee from './Components/AddEmployee';


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Start />}></Route>
        <Route path='/adminlogin' element={<Login />}></Route>
        <Route path='/employee_login' element={<EmployeeLogin />}></Route>
        <Route path='/employee_detail/:id' element={<EmployeeDetail />}></Route>
        <Route path='/dashboard' element={
          <PrivateRoute >
            <Dashboard />
          </PrivateRoute>
        }>
          <Route path='' element={<Home />}></Route>
          <Route path='/dashboard/employee' element={<Employee />}></Route>
          <Route path='/dashboard/category' element={<Category />}></Route>
          <Route path='/dashboard/profile' element={<Profile />}></Route>
          <Route path='/dashboard/add_category' element={<AddCategory />}></Route>
          <Route path='/dashboard/add_employee' element={<AddEmployee />}></Route>
          <Route path='/dashboard/edit_employee/:id' element={<EditEmployeee />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
