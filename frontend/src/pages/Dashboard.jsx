import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "../firebaseConfig"; 
import { useNavigate } from "react-router-dom";

const auth = getAuth(app); 

const Dashboard = () => {
  const [user, setUser] = useState(null); 
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); 
      } else {
        setUser(null); 
        navigate("/login");
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("You have been logged out!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  // If the user is not logged in, return null to render nothing
  if (!user) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <p className="text-lg mb-4">Welcome, {user.email}!</p>
      <button
        onClick={handleLogout}
        className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
