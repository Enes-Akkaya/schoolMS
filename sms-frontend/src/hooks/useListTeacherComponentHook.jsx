import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { listTeachers, deleteTeacher } from "../services/TeacherService";
import { listLessons } from "../services/LessonService";

const useListTeacherComponentHook = () => {
  const [teachers, setTeachers] = useState([]);
  const [lessons, setLessons] = useState([]);
  const navigate = useNavigate();

  const fetchTeachers = async () => {
    try {
      const response = await listTeachers();
      setTeachers(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchLessons = async () => {
    const response = await listLessons();
    setLessons(response.data);
  };

  useEffect(() => {
    fetchTeachers();
    fetchLessons();
  }, []);

  const getLessonName = (lessonId) => {
    const lesson = lessons.find((dept) => dept.id === lessonId);
    return lesson ? lesson.lessonName : "Unknown Lesson";
  };

  const updateTeacher = (id) => {
    navigate(`/edit-teacher/${id}`);
  };

  const deleteTeacherById = async (id) => {
    await deleteTeacher(id);
    toast.error("Teacher deleted successfully!");
    fetchTeachers();
  };

  return {
    teachers,
    lessons,
    fetchTeachers,
    fetchLessons,
    getLessonName,
    updateTeacher,
    deleteTeacherById,
  };
};

export default useListTeacherComponentHook;
