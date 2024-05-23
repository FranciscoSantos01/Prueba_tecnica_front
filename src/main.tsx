import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { AppProvider } from './context/context.tsx'
import Locations from './pages/Location.tsx'
import Favorites from './pages/Favorites.tsx'
import SignIn from './pages/SignIn.tsx'
import ProtectedRoute from './components/ProtectedRoute.tsx'


const Router = createBrowserRouter([
  {
    path:'/',
    element: <App/>
  },
  {
    path:'/locations',
    element: <Locations />
  },
  {
    path:'/favorites',
    element:(
    <ProtectedRoute>
        <Favorites />
    </ProtectedRoute>)
  },
  {
    path:'/signIn',
    element: <SignIn />
  }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <AppProvider>
    <RouterProvider router={Router} />
  </AppProvider>

  </React.StrictMode>,
)
