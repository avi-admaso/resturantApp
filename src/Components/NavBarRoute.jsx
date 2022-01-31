import { Link } from "react-router-dom";

function NavBarRoute() {
  return (
    <section>
      <nav className="navBar">
        <Link to={"/"}>
          <button>Home</button>
        </Link>
        <Link to={"/Orders"}>
          <button>ORDER</button>
        </Link>
        <Link to={"/Menu"}>
          <button>MENU</button>
        </Link>
      </nav>
    </section>
  );
}
export default NavBarRoute;
