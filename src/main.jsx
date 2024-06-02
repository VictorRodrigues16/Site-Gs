import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Cadastro from './Routes/Cadastro/Cadastro.jsx'
import Login from './Routes/Login/Login.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter ([
  {
    path:'/', element:<App />,
    errorElement:<Error />,

    children: [
      {path: '/Login', element: <Login />},
      {path: '/Cadastro', element: <Cadastro />},
      
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
