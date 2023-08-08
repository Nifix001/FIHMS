import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Patients = () => {
  return (
    <React.Fragment>
     <div className='w-281 h-142.5 bg-white border-l  relative top-20 left-60 -ml-0.5 py-4 px-6 patients'>
        <header>Add New Patient (Students)</header>
        <div className="flex">
          <NavLink to="personal">Personal information</NavLink>
          <NavLink to="info">Medical information</NavLink>
          <NavLink to="test">Medical Test</NavLink>
        </div>
        <Outlet />
     </div>
    </React.Fragment>
  )
}

export default Patients
