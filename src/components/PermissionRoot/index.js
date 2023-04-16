import React from 'react'
import { Link } from 'react-router-dom'

export default function PermissionRoot() {
    return (
        <div className="PermissionRoot-content">
            <Link to="/admin">Go to Admin Panel</Link>
        </div>
    )
}
