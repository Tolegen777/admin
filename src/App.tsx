import { Navigate, Route, Routes } from "react-router-dom";
import AdminRoutes from "./pages/adminPage/AdminRoutes";
import Error from "./pages/Error";

function App() {
  // const { isAuth } = useTypedSelector((state) => state.auth);

  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Navigate to={isAuth ? "/app" : "/auth"} />} />

        <Route
          path="/app/*"
          element={isAuth ? <AdminPage /> : <Navigate to="/" />}
        />
        <Route path="/auth" element={<LoginPage />} />

        <Route path="*" element={<Error />} />
      </Routes> */}

      <Routes>
        <Route path="/*" element={<AdminRoutes />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
