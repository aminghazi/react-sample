import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "./index.css"

export default function OutletRoot() {
  return (
        <div className="Outlet-content">
          <h1>Outlet</h1>
          <ul className="Outlet-links">
              <li>
                  <Link to="outlet-root1">Root 1</Link>
              </li>
              <li>
                  <Link to="outlet-root2">Root 2</Link>
              </li>
          </ul>
          <div>
              <Outlet/>
          </div>
        </div>
  )
}
