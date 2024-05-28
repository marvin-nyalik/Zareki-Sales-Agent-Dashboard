import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const SideNav= () => {
  return (
    <div>
      <Link to='/'>
        <div className='flex flex-row justify-between h-10 items-center border-b border-b-1 max-w-[70%] mx-auto'>
          <i class='bx bxs-dashboard'></i>
          Dashboard
        </div>
      </Link>

      <Link to='/schools'>
        <div className='flex flex-row justify-between h-10 items-center max-w-[70%] mx-auto'>
          <i class='bx bxs-school'></i>
          Schools
        </div>
      </Link>
    </div>
  )
}

export default SideNav;
