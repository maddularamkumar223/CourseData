import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Style from "./course.module.css";

const Course = () => {
  let [courseDetails, setCourseDetails] = useState([]);
  let navigate = useNavigate();

  let viewCourse = (id) => {
    navigate(`/viewCourse/${id}`);
  };
  let fetchData = async () => {
    try {
      let { data } = await axios.get("http://localhost:3000/courses");
      setCourseDetails(data);
    } catch {
      console.log("Error");
    }
  };

  useEffect(() => {
    fetchData();
  }, [courseDetails.length]);
  return (
    <section className={Style.courseContainer}>
      <article>
        {courseDetails.map((value) => {
          return (
            <aside key={value.id}>
              <h2>Course Name : {value.courseName}</h2>
              <p>Description : {value.description}</p>
              <button onClick={() => viewCourse(value.id)}>
                View more ...
              </button>
            </aside>
          );
        })}
        <NavLink to="/createCourse" className={Style.addNav}>
          <p className={Style.addCourse}>+</p>
        </NavLink>
      </article>
    </section>
  );
};

export default Course;
