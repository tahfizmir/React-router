/* eslint-disable no-unused-vars */
import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const {userid} =useParams();
  return (
    

    <>
    <div className='bg-gray-700 text-white p-4 text-center'>User: {userid}</div></>
    
  )
}

