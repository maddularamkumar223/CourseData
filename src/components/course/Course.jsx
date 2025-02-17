import { useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { courseContext } from "../context/CourseContext";
import Style from "./course.module.css";

const Course = () => {
  let { fetchCourse, courses } = useContext(courseContext);
  let navigate = useNavigate();
  console.log(courses);

  let viewCourse = (id) => {
    navigate(`/viewCourse/${id}`);
  };

  useEffect(() => {
    fetchCourse();
  }, [courses?.length]);
  return (
    <section className={Style.courseContainer}>
      <article>
        {courses?.map((value) => {
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
