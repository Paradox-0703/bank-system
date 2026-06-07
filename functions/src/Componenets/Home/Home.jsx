import React from 'react'

import Navbar from "./Navbar/Navbar"
import Welcome from "./Welcome/Welcome"
import Body from "./Body/Body"
const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      
     <Navbar />

     <Welcome />
     
      <div className="bg-blue-900 text-white p-6 rounded-2xl mb-6">
        <p className="text-sm">Available Balance</p>

        <h1 className="text-3xl font-bold mt-2">
          Balance
        </h1>

        <button className="mt-4 bg-white text-blue-900 px-4 py-2 rounded-lg font-medium">
          Check Balance
        </button>
      </div>

      

     <Body />
     
    </div>
  );
};

export default Home;



