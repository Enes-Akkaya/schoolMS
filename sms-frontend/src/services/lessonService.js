import axios from "axios";

const REST_API_URL = "http://localhost:8080/api/lessons";

export const listLessons = () => {
  return axios.get(REST_API_URL);
};

export const createLesson = (lesson) => {
  return axios.post(REST_API_URL, lesson);
};

export const getLessonById = (id) => {
  return axios.get(REST_API_URL + "/" + id);
};

export const updateDeparment = (id, lesson) => {
  return axios.put(REST_API_URL + "/" + id, lesson);
};

export const deleteLesson = (id) => {
  return axios.delete(REST_API_URL + "/" + id);
};
