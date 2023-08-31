import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Home from "./Home";
import NavBar from "./component/common/NavBar";
import AddStudent from "./component/student/AddStudent";
import EditStudent from "./component/student/EditStudent";
import EditStudents from "./component/student/EditStudent";
import StudentPofile from "./component/student/StudentProfile";
import StudentsView from "./component/student/StudentsView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="container mt-5">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view-students" element={<StudentsView />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/edit-student/:id" element={<EditStudent />} />
          <Route path="/student-profile/:id" element={<StudentPofile />} />

        </Routes>
      </Router>
    </main>
  );
}

export default App;
