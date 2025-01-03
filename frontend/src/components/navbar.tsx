import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="px-4 py-2 flex gap-4 border-2 border-blue-200 text-blue-400 ">
      <Link className="hover:text-blue-600" to="/">
        home
      </Link>
      <Link className="hover:text-blue-600" to="/posts">
        posts
      </Link>
    </div>
  );
};

export default Navbar;
