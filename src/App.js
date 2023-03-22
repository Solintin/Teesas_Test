import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Login from "./pages/auth/login/Login";
import { Login, Signup } from "./pages/Auth";
import Dashbaord from "./pages/Dashboard";

import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <div>
        <Toaster
          toastOptions={{
            duration: 5000,
            position: "top-center",
            success: {
              style: {
                background: "#222",
                color: "#fff",
              },
            },
            error: {
              duration: 5000,
              position: "top-center",
              style: {
                background: "red",
                color: "#fff",
              },
            },
          }}
        />
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard/*" element={<Dashbaord />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
