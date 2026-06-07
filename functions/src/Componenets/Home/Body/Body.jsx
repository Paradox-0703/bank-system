import React from 'react'

const Body = () => {
  return (
    <div>
       <h2 className="text-lg font-semibold mb-3">
        Banking Services
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-11 rounded-xl shadow text-center">
          
          <p className="mt-2 justify-center items-center">Savings</p>
        </div>

        <div className="bg-white p-11 rounded-xl shadow text-center">
          
          <p className="mt-2 justify-center items-center">Loans</p>
        </div>

        <div className="bg-white p-11 rounded-xl shadow text-center">
          
          <p className="mt-2 justify-center items-center">Cards</p>
        </div>

        <div className="bg-white p-11 rounded-xl shadow text-center">
          
          <p className="mt-2 justify-center items-center">Investments</p>
        </div>
      </div>
    </div>
  )
}

export default Body
