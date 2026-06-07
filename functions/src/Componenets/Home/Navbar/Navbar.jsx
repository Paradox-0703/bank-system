import React from 'react'

const navbar = () => {
  return (
    <div className="flex justify-between items-center mb-6">
     <h1 className="text-2xl font-bold text-blue-900">
          MyBank
        </h1>

        <div className=" text-black flex items-center justify-center">
          <ul className="flex  text-white rounded-full">
            <li className="mx-5  px-2 bg-blue-900 items-center justify-center">Sign up</li>
            <li className="mx-5 px-2  bg-blue-900 items-center justify-center">Log in</li>
            <li className="mx-5  px-2 bg-blue-900 items-center justify-center">Profile</li>
          </ul>
        </div>
    </div>
  )
}

export default navbar
