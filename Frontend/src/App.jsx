import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./assets/login/Login";
import StudentSignup from "./assets/login/StudentSignup";
import InstitutionSignup from "./assets/login/InstitutionSignup";
import AcademicianSignup from "./assets/login/AcademicianSignup";
import IndustrySignup from "./assets/login/IndustrySignup";
import Home from "./assets/login/Home";
import ForgotPassword from "./assets/login/ForgotPassword";
import Signup from "./assets/login/Signup";
import StudentDashboard from "./assets/components/Dashboard/StudentDashboard";
import Acad from "./assets/components/Dashboard/Acad";
import Instit from "./assets/components/Dashboard/Instit";
import Indus from "./assets/components/Dashboard/Indus";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/StudentSignup" element={<StudentSignup />} />
        <Route path="/AcademicianSignup" element={<AcademicianSignup />} />
        <Route path="/InstitutionSignup" element={<InstitutionSignup />} />
        <Route path="/IndustrySignup" element={<IndustrySignup />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/StudentDashboard" element={<StudentDashboard />} />
        <Route path="/Acad" element={<Acad />} />
        <Route path="/Instit" element={<Instit />} />
        <Route path="/Indus" element={<Indus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;