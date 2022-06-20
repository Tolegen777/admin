//library
import React, { Suspense, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

//components
import Layout from "../../components/layouts";

//pages
import Home from "../Home";
import Error from "../Error";
import Profile from "../Profile";
import Users from "../Users";
import ComplaintsPage from "../Complaints";
import StaffPage from "../Staff";
import ComplaintsUser from "../Complaints/ComplaintsSection/ComplaintsUser";
import Edit from "../Staff/StaffSection/Edit";
import Worker from "../Staff/StaffSection/Worker";
import CreateWorker from "../Staff/StaffSection/CreateWorker";
import Create from "../Staff/StaffSection/Create";
import { useGetRoleQuery } from "../../redux/store/rtk-api/user-rtk/userEndpoints";
import { useDispatch } from "react-redux";
import { setRole } from "../../redux/store/reducers/user/user.slice";
import Management from "../Management";

// import Profile from "./Profile";
// import Users from "./Users";
// import ComplaintsPage from "./ComplaintsPage";
// import ComplaintUserPage from "../../components/pages/complaint/ComplaintUserPage";
// import ComplaintsUser from "./ComplaintsUser";
// import StaffPage from "./StaffPage";
// import Worker from "../../components/pages/staff/Worker";
// import Edit from "../../components/pages/staff/Edit";

const Main = () => {
  const { data: role, isLoading, isError } = useGetRoleQuery("");
  // debugger
  const dispatch = useDispatch();

  if (role) {
    if (
      role.filter((r, ind) => {
        return r.value === "SUPER-ADMIN";
      }).length > 0
    ) {
      dispatch(setRole("SUPER-ADMIN"));
    } else {
      dispatch(setRole("WORKER"));
    }
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="profile/*" element={<Profile />} />
          <Route path="users/*" element={<Users />} />
          <Route path="complaints/" element={<ComplaintsPage />} />
          <Route path="complaints/user" element={<ComplaintsUser />} />
          <Route path="employees/" element={<StaffPage />} />
          <Route path="employees/one-worker" element={<Worker />} />
          <Route path="employees/one-worker/edit" element={<Edit />} />
          <Route path="employees/one-worker/create" element={<Create />} />

          <Route path="management/*" element={<Management />} />
        </Route>
      </Routes>
    </>
  );
};

export default Main;

/* <Route path="complaints/user*" element={<ComplaintsUser />} />
<Route path="employees/one-worker" element={<Worker />} />
<Route path="employees/one-worker/edit" element={<Edit />} /> */
