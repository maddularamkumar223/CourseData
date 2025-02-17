import { Outlet } from "react-router-dom";
import Navbar from "./components/nav/Navbar";

const App = () => {
  return (
    <section className="main_container">
      <article>
        <Navbar />
      </article>
      <article>
        {" "}
        <Outlet />
      </article>
    </section>
  );
};

export default App;
