import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">StudentHub</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/projects" className="hover:text-gray-200">Projects</Link>
          <Link to="/community" className="hover:text-gray-200">Community</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
