"use client";

import { useState, useEffect } from "react";
import axios from "axios";

export default function Create() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [users, setUsers] = useState([]);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    console.log("formData updated:", formData); // Debug log
    const fetchUsers = async () => {
      try {
        const res = await axios.get("/api");
        setUsers(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Error in getting all users", error);
      }
    };

    fetchUsers();
  }, [refresh]);

  return (
    <div className="flex h-screen justify-center items-center space-x-10">
      <title>CRUD: Create</title>
      <div className="flex flex-col justify-center bg-gray-300 py-24 px-10 rounded-lg border-2 border-gray-500 relative">
        <label className="p-2">Name</label>
        <input
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <label className="p-2">Email</label>
        <input
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <button
          className="bg-gray-100 hover:bg-gray-700 hover:text-white border-4 border-gray-200 rounded-lg hover:border-gray-300 fixed bottom-10 right-32 px-2 absolute"
          onClick={async () => {
            console.log("Submitting form with data:", formData); // Debug log
            try {
              const res = await axios.post("/api/createUser", formData);
              console.log("User created successfully", res.data);
              setRefresh(refresh + 1);
            } catch (error) {
              console.error("Error creating user", error);
            }
          }}
        >
          Submit
        </button>
      </div>
      <div className="flex flex-col bg-gray-300 p-10 rounded-lg border-2 border-gray-500">
        {users && users.length > 0 ? (
          users.map((user) => (
            <ul
              key={user.id}
              className="bg-gray-200 p-2 rounded-lg mt-2"
            >
              {user.name}
            </ul>
          ))
        ) : (
          <p>No users available</p>
        )}
      </div>
    </div>
  );
}
