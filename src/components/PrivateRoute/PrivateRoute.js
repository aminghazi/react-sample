import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isAuthenticated } from '../../utils/isAuthenticated'

export default function PrivateRoute({ children }) {
    
    let isUserAuthenticated = isAuthenticated("amin")
    return (
        <div>
            {isUserAuthenticated ? <Outlet/> : <Navigate to="no-permission" />}       
        </div>
    )
}
