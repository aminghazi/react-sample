import React from 'react'
import { Link } from 'react-router-dom'

export default function NoPermission() {
    return (
        <div>
            <h1>No Permission</h1>
            <Link to="/permission-root">please login</Link>
        </div>
    )
}
