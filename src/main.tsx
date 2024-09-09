import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.scss'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import RootLayout from './layouts/RootLayout.tsx'
import AppLayout from './layouts/AppLayout.tsx'

import Splash from './pages/Splash'
import Login from './pages/Login'
import Register from './pages/Register'
import Wallet from './pages/Wallet'
import Transfers from './pages/Transfers'
import Profile from './pages/Profile'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <Splash /> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
      {
        element: <AppLayout />,
        path: 'wallet',
        children: [
          { path: '/wallet/', element: <Wallet /> },
          { path: '/wallet/transfers', element: <Transfers /> },
          { path: '/wallet/profile', element: <Profile /> },
        ],
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
