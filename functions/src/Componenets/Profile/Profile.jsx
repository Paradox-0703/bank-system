import { useState } from "react";

function Profile() {
  const [customerId, setCustomerId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Customer ID:", customerId);
    console.log("Password:", password);

    alert("Login submitted!");
  };

  return (
    <div className="h-[90vh] flex items-center justify-center bg-black">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl  w-80 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Customer Login
        </h2>

        {/* Customer ID */}
        <input
          type="text"
          placeholder="Customer ID"
          value={customerId}
          onChange={(e) => setCustomerId(e.target.value)}
          className="border border-gray-300 p-2 rounded-lg "
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 p-2 rounded-lg "
        />

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Profile;