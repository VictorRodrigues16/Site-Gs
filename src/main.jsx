import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Cadastro from './Routes/Cadastro/Cadastro.jsx'
import Login from './Routes/Login/Login.jsx'
import DashBoard from './Routes/DashBoard/DashBoard.jsx'
import Error from './Routes/Error/Error.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter ([
  {
    path:'/', element:<App />,
    errorElement:<Error />,

    children: [
      {path: '/Login', element: <Login />},
      {path: '/Cadastro', element: <Cadastro />},
      {path: '/Dash', element: <DashBoard />},
      {path: '/Error', element: <Error />},
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
