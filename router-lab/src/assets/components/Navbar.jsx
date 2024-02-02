import React from 'react'
import { Link } from 'react-router-dom'

export default function () {
  return (
    <div className='main-container'>
        <div>
            <Link id='kalvium' to="/home" >Kalvium💕</Link>
        </div>
       <div className='container-2'>
            <Link id='contact' to="/contact">contact</Link>
            <Link id='about' to="/about">About</Link>
            <Link id='help' to="/help">Help</Link>
        </div>
    </div>
  )
}
