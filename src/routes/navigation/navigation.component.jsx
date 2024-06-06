import "./navigation.component.scss";
import { Outlet } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <div>
        <h1>I am the navigation bar</h1>
      </div>
      <Outlet />
    </div>
  );
};

export default Nav;
