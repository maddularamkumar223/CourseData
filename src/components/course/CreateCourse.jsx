import styles from "./CreateCourse.module.css"; // Import the module CSS
// import axios from "axios";
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { courseContext } from "../context/CourseContext";

const CreateCourse = () => {
  let navigate = useNavigate();
  let { state } = useLocation();
  let { createCourse, updateCourse} = useContext(courseContext);
  let [courseDetails, setCourseDetails] = useState({
    courseName: state?.courseName || "",
    description: state?.description || "",
    price: state?.price || 0,
    duration: state?.duration || "",
  });

  let course = () => {
    navigate("/course");
  };

  let { courseName, duration, description, price } = courseDetails;
  let handleChange = (e) => {
    let { name, value } = e.target;
    setCourseDetails({ ...courseDetails, [name]: value });
  };
  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log(courseDetails);

    let payLoad = courseDetails;

    state ? updateCourse(state.id, payLoad) : createCourse(payLoad);

    setCourseDetails({
      courseName: "",
      duration: "",
      description: "",
      price: "",
    });
  };

  return (
    <section className={styles.section}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <article className={styles.article}>
          <label className={styles.label} htmlFor="course">
            Course Name
          </label>
          <input
            type="text"
            id="course"
            name="courseName"
            onChange={handleChange}
            value={courseName}
            className={styles.input}
          />
        </article>
        <article className={styles.article}>
          <label className={styles.label} htmlFor="description">
            Course Description
          </label>
          <textarea
            id="description"
            name="description"
            onChange={handleChange}
            value={description}
            className={styles.textarea}
          ></textarea>
        </article>
        <article className={styles.article}>
          <label className={styles.label} htmlFor="price">
            Course Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            onChange={handleChange}
            value={price}
            className={styles.input}
          />
        </article>
        <article className={styles.article}>
          <label className={styles.label} htmlFor="duration">
            Course Duration
          </label>
          <input
            type="number"
            id="duration"
            name="duration"
            onChange={handleChange}
            value={duration}
            className={`${styles.input} border-red-400 border-2`}
          />
        </article>
        <article className={styles.article}>
          <button className={styles.button} onClick={course}>
            {state ? "Update Course" : "Add Course"}
          </button>
        </article>
      </form>
    </section>
  );
};

export default CreateCourse;
