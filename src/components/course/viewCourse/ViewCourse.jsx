import { useContext, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Style from "./viewCourse.module.css";
import { courseContext } from "../../context/CourseContext";

const ViewCourse = () => {
  let { fetchSingleCourse, deleteData, singleCourse } =
    useContext(courseContext);
  let { id } = useParams();
  let navigate = useNavigate();
  console.log(id);
  let viewCourse = () => {
    navigate("/course");
  };

  useEffect(() => {
    fetchSingleCourse(id);
  }, []);

  return (
    <section className={Style.container}>
      <article>
        <aside>
          <p>Course Name: {singleCourse?.courseName}</p>
          <p>Description: {singleCourse?.description}</p>
          <p>Price: {singleCourse?.price}</p>
          <p>Duration: {singleCourse?.duration}days</p>
        </aside>
        <aside className={Style.button}>
          <button>
            <NavLink to="/createCourse" state={singleCourse}>
              Update
            </NavLink>
          </button>
          <button
            onClick={() => {
              deleteData(id);
              viewCourse();
            }}
          >
            Delete
          </button>
        </aside>
      </article>
    </section>
  );
};

export default ViewCourse;
