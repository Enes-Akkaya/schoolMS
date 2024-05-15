import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  getLessonById,
  createLesson,
  updateDeparment,
} from "../services/LessonService";

const useLessonComponentHook = () => {
  const [lessonName, setLessonName] = useState("");
  const [lessonDescription, setLessonDescription] = useState("");
  const [title, setTitle] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const getLesson = async (id) => {
    const response = await getLessonById(id);
    const lesson = response.data;
    setLessonName(lesson.lessonName);
    setLessonDescription(lesson.lessonDescription);
  };

  useEffect(() => {
    if (id) {
      setTitle("Update Lesson");
      getLesson(id);
    } else {
      setTitle("Add Lesson");
    }
  }, [id]);

  const saveOrUpdateLesson = async (e) => {
    e.preventDefault();
    const lesson = { lessonName, lessonDescription };
    if (lessonName && lessonDescription) {
      if (id) {
        await updateDeparment(id, lesson);
        toast.info("Lesson updated successfully!");
        navigate("/lessons");
        return;
      }
      await createLesson(lesson);
      toast.success("Lesson added successfully!");
      navigate("/lessons");
    } else {
      toast.error("Please fill in all the fields!");
    }
  };

  return {
    lessonName,
    setLessonName,
    lessonDescription,
    setLessonDescription,
    title,
    saveOrUpdateLesson,
  };
};

export default useLessonComponentHook;
