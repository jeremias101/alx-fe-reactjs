import React from 'react';

function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full mx-auto block w-36 h-36 object-cover"
      />
      <h1 className="text-xl text-blue-800 my-4 text-center font-semibold">
        John Doe
      </h1>
      <p className="text-base text-gray-600 text-center">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
