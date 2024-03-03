import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import HomePage from "./pages/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import PublicRoute from "./components/Routes/PublicRoute";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Donar from "./pages/Dashboard/Donar";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/donar"
          element={
            <ProtectedRoute>
              <Donar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            // <PublicRoute>
              <Login />
            // </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            // <PublicRoute>
              <Register />
        //    </PublicRoute>
          }
        />
      </Routes>
    </>
  );
  // <h1 className="text-danger fs-5">Blood Bank App</h1>;
}

export default App;
