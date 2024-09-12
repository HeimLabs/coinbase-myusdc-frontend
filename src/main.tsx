import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.scss'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import RootLayout from './layouts/RootLayout.tsx'
import AppLayout from './layouts/AppLayout.tsx'

import Onboarding from './pages/Onboarding/index.tsx'
import Login from './pages/Login'
import Register from './pages/Register'
import Wallet from './pages/Wallet'
import Transfers from './pages/Transfers'
import Profile from './pages/Profile'
import Send from './pages/Send'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <Onboarding /> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
      {
        element: <AppLayout />,
        path: 'wallet',
        children: [
          { path: '/wallet/', element: <Wallet /> },
          { path: '/wallet/transfers', element: <Transfers /> },
          { path: '/wallet/profile', element: <Profile /> },
          { path: '/wallet/send', element: <Send /> },
        ],
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <SkeletonTheme baseColor='rgba(0,0,0,0.2)' highlightColor='rgba(255,255,255,0.3)'>
        <RouterProvider router={router} />
        <ToastContainer theme='dark' />
      </SkeletonTheme>
    </QueryClientProvider>
  </StrictMode>,
)
