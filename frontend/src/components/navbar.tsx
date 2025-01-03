import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex">
      <Link to="/posts">posts</Link>
    </div>
  );
};

export default Navbar;
