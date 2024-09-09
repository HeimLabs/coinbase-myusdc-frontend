import { useAuth } from '@clerk/clerk-react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function AppLayout() {
    const { userId, isLoaded } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (isLoaded && !userId) {
            navigate('/login')
        }
    }, [isLoaded])

    if (!isLoaded) return 'Loading...'

    return <Outlet />
}