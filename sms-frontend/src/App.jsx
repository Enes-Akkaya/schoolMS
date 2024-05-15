import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import ListStudentComponent from "./components/ListStudentComponent";
import ListTeacherComponent from "./components/ListTeacherComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentComponent from "./components/StudentComponent";
import TeacherComponent from "./components/TeacherComponent";
import ListDepartmentComponent from "./components/ListDepartmentComponent";
import DepartmentComponent from "./components/DepartmentComponent";
import ListLessonComponent from "./components/ListLessonComponent";
import LessonComponent from "./components/LessonComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<ListStudentComponent />} />
          <Route path="/students" element={<ListStudentComponent />} />
          <Route path="/add-student" element={<StudentComponent />} />
          <Route path="/edit-student/:id" element={<StudentComponent />} />
          <Route path="/teachers" element={<ListTeacherComponent />} />
          <Route path="/add-teacher" element={<TeacherComponent />} />
          <Route path="/edit-teacher/:id" element={<TeacherComponent />} />
          <Route path="/departments" element={<ListDepartmentComponent />} />
          <Route path="/add-department" element={<DepartmentComponent />} />
          <Route
            path="/edit-department/:id"
            element={<DepartmentComponent />}
          />
          <Route path="/lessons" element={<ListLessonComponent />} />
          <Route path="/add-lesson" element={<LessonComponent />} />
          <Route
            path="/edit-lesson/:id"
            element={<LessonComponent />}
          />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
