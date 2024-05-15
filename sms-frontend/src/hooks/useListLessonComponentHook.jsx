import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  listLessons,
  deleteLesson,
} from "../services/LessonService";
import { toast } from "react-toastify";

const useListLessonComponentHook = () => {
  const [lessons, setLessons] = useState([]);
  const navigate = useNavigate();

  const getLessons = async () => {
    try {
      const response = await listLessons();
      setLessons(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const updateLesson = (id) => {
    navigate(`/edit-lesson/${id}`);
  };

  const removeLesson = async (id) => {
    await deleteLesson(id);
    toast.error("Lesson deleted successfully!");
    getLessons();
  };

  useEffect(() => {
    getLessons();
  }, []);

  return {
    lessons,
    getLessons,
    updateLesson,
    removeLesson,
  };
};

export default useListLessonComponentHook;
