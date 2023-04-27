import React from 'react'
import { createBrowserRouter,RouterProvider  } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login';
import Register from './components/Register';
import Main from './components/Layout/Main';
import ErrorPage from './components/ErrorPage';
import Profile from './components/Profile';
import Wallet from './components/Wallet';



 
const router = createBrowserRouter([

     {

      path : '/',
      element : <Main></Main>,
      errorElement : <ErrorPage></ErrorPage>,
      children : [

        
                {
                  path : '/',
                  element : <Home/>
                },

                {
                  path : '/home',
                  element : <Home/>
                },
                {
                  path : '/profile',
                  element : <Profile/>
                },
                {
                  path : '/wallet',
                  element : <Wallet/>
                },

                {
                  path : '/login',
                  element : <Login/>
                },

                {
                  path : '/register',
                  element : <Register/>
                },
      ]
     }

])



function App() {
  return  <RouterProvider   router={router} ></RouterProvider>
}

export default App
