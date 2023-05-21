import React from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import "./index.css"

export default function OutletRoot() {

  let navigate = useNavigate()

  let location = useLocation()
  // gets some properties from url (hash, key, pathname, search, ...)
  console.log("location", location)

  return (
        <div className="Outlet-content">
          <h1>Outlet</h1>
          <button onClick={() => {
            navigate(-2)
          }}>
            back 2 navigate
          </button>
          <button onClick={() => {
            // no save navigate to the browser => replace:true
            navigate('/admin', {replace:true})
          }}>
            go to admin
          </button>
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
