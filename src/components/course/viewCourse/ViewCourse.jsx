import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Style from "./viewCourse.module.css";

const ViewCourse = () => {
  let [singleData, setSingleData] = useState([]);
  let [userData, setUserData] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();
  console.log(id);
  let viewCourse = () => {
    navigate("/course");
  };

  let fetchUser = async () => {
    let { data } = await axios.get("http://localhost:3000/users");
    setUserData(data);
  };
  let deleteData = async (deleteID) => {
    await axios.delete("http://localhost:3000/courses/" + deleteID);
    console.log("delete");
  };
  let fetchSingleData = async (userId) => {
    let { data } = await axios.get("http://localhost:3000/courses/" + userId);
    console.log(data);
    setSingleData(data);
  };
  useEffect(() => {
    fetchSingleData(id);
    fetchUser();
    console.log(singleData);
  }, []);
  console.log(userData);
  return (
    <section className={Style.container}>
      <article>
        <aside>
          <p>Course Nameeee: {singleData.courseName}</p>
          <p>Description: {singleData.description}</p>
          <p>Price: {singleData.price}</p>
          <p>Duration: {singleData.duration}days</p>
        </aside>
        {userData[1]?.role === "admin" && (
          <aside className={Style.button}>
            <button>
              <NavLink to="/createCourse" state={singleData}>
                Updateeee
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
        )}
      </article>
    </section>
  );
};

export default ViewCourse;
