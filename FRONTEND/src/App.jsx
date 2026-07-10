import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Feed from "./pages/Feed";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <Router>
      <Routes>

        {/* Default Route */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes with Navbar */}
        <Route element={<Layout />}>

          <Route
            path="/feed"
            element={
              <ProtectedRoute>
                <Feed />
              </ProtectedRoute>
            }
          />

          <Route
            path="/create-post"
            element={
              <ProtectedRoute>
                <CreatePost />
              </ProtectedRoute>
            }
          />

        </Route>

      </Routes>
    </Router>
  );
}

export default App;