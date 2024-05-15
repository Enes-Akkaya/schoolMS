import axios from "axios";

const REST_API_URL = "http://localhost:8080/api/teachers";

export const listTeachers = () => {
  return axios.get(REST_API_URL);
};

export const createTeacher = (teacher) => {
  return axios.post(REST_API_URL, teacher);
};

export const deleteTeacher = (id) => {
  return axios.delete(`${REST_API_URL}/${id}`);
};

export const getTeacherById = (id) => {
  return axios.get(`${REST_API_URL}/${id}`);
};

export const updateTeacher = (id, teacher) => {
  return axios.put(`${REST_API_URL}/${id}`, teacher);
};
