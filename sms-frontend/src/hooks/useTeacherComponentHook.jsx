import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { listLessons } from "../services/LessonService";
import {
  updateTeacher,
  createTeacher,
  getTeacherById,
} from "../services/TeacherService";

const useTeacherComponentHook = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [lessonId, setLessonId] = useState("");
  const [lessons, setLessons] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchLesson = async () => {
    const response = await listLessons();
    setLessons(response.data);
  };

  useEffect(() => {
    fetchLesson();
  }, []);

  const saveOrUpdateTeacher = async (e) => {
    e.preventDefault();

    const teacher = { firstName, lastName, email, lessonId };

    if (firstName && lastName && email) {
      try {
        if (id) {
          await updateTeacher(id, teacher);
          toast.info("Teacher updated successfully!");
          navigate("/");
        } else {
          await createTeacher(teacher);
          toast.success("Teacher added successfully!");
          navigate("/");
        }
      } catch (error) {
        toast.error("An error occurred. Please try again.");
        console.error("Error saving/updating teacher:", error);
      }
    } else {
      toast.error("Please fill in all the fields!");
    }
  };

  const getTeacherData = async (teacherId) => {
    const response = await getTeacherById(teacherId);
    const teacher = response.data;
    setFirstName(teacher.firstName);
    setLastName(teacher.lastName);
    setEmail(teacher.email);
    setLessonId(teacher.lessonId);
  };

  useEffect(() => {
    if (id) {
      setTitle("Update Teacher");
      getTeacherData(id);
    } else {
      setTitle("Add Teacher");
    }
  }, [id]);

  return {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    lessonId,
    setLessonId,
    lessons,
    saveOrUpdateTeacher,
    title,
  };
};

export default useTeacherComponentHook;
