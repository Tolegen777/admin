import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../../components/layouts/Layout";
import Error from "../Error";
import Home from "./Home";
import Profile from "./Profile";
import Users from "./Users";
import ComplaintsPage from "./ComplaintsPage";
import ComplaintUserPage from "../../components/pages/complaint/ComplaintUserPage";
import ComplaintsUser from "./ComplaintsUser";
import StaffPage from "./StaffPage";
import Worker from "../../components/pages/staff/Worker";

const AdminRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Navigate to="home" />} />
          <Route path="home/*" element={<Home />} />
          <Route path="profile/*" element={<Profile />} />
          <Route path="users/*" element={<Users />} />
          <Route path="complaints/*" element={<ComplaintsPage />} />
          <Route path="complaints/user*" element={<ComplaintsUser />} />
          <Route path="employees/*" element={<StaffPage/>} />
          <Route path="employees/user" element={<Worker/>} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};

export default AdminRoutes;
