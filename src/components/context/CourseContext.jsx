/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useState } from "react";

export let courseContext = createContext();

let CourseContextProvider = ({ children }) => {
  let [data, setData] = useState({
    courses: null,
    singleCourse: [],
  });
  let { courses, singleCourse } = data;

  // ! To fetch all the courses

  let fetchCourse = async () => {
    try {
      let { data } = await axios.get("http://localhost:3000/courses");
      setData({ ...data, courses: data });
    } catch (error) {
      console.log(error);
    }
  };

  // ! To fetch single courses

  let fetchSingleCourse = async (id) => {
    try {
      let { data } = await axios.get(`http://localhost:3000/courses/${id}`);
      setData({ ...data, singleCourse: data });
    } catch (error) {
      console.log(error);
    }
  };

  // ! To create a course

  let createCourse = async (payload) => {
    try {
      await axios.post("http://localhost:3000/courses", payload);
    } catch (error) {
      console.log(error);
    }
  };

  // ! To update the course

  let updateCourse = async (id, payload) => {
    try {
      await axios.put(`http://localhost:3000/courses/${id}`, payload);
    } catch (error) {
      console.log(error);
    }
  };

  // ! To delete the course

  let deleteData = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/courses/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <courseContext.Provider
      value={{
        courses,
        singleCourse,
        fetchSingleCourse,
        fetchCourse,
        createCourse,
        updateCourse,
        deleteData,
      }}
    >
      {children}
    </courseContext.Provider>
  );
};

export default CourseContextProvider;
