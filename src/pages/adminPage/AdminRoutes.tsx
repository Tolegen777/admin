import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../../components/layouts/Layout";
import Error from "../Error";
import Home from "./Home";
import Profile from "./Profile";
import Users from "./Users";

const AdminRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Navigate to="home" />} />
          <Route path="home/*" element={<Home />} />
          <Route path="profile/*" element={<Profile />} />
          <Route path="users/*" element={<Users />} />

          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};

export default AdminRoutes;
