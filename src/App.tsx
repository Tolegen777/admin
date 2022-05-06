import { Navigate, Route, Routes } from "react-router-dom";
import AdminRoutes from "./pages/adminPage/AdminRoutes";
import LoginPaper from "./pages/authPage/LoginPaper";
import Error from "./pages/Error";
import { useTypedSelector } from "./store";

function App() {
  const { isAuth } = useTypedSelector((state) => state.auth);

  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={<Navigate to={isAuth ? "/app" : "/auth"} />}
        />

        <Route path="/app" element={<AdminRoutes />} />
        <Route path="/auth" element={<LoginPaper />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
