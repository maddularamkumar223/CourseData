import { NavLink } from "react-router-dom";
import Style from './navbar.module.css'
const Navbar = () => {
  return (
    <section className={Style.navbar}>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/course'>Course</NavLink>
        </li>
        <li>
          <NavLink to='/login'>Login</NavLink>
        </li>
        <li>
          <NavLink to='/register'>Sign Up</NavLink>
        </li>
      </ul>
    </section>
  );
};

export default Navbar;
