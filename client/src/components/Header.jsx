// React Router
import { Link } from "react-router-dom";
// React Icons
import { BsHouseAdd } from "react-icons/bs";

const Header = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        {/* LOGO */}
        <Link to={"/"} className="flex items-center gap-4">
          <BsHouseAdd size={24} className="text-indigo-600" />
          <h1 className="font-semibold text-lg hidden sm:block">
            Real Estate App
          </h1>
        </Link>

        {/* Search */}
        <div>
          <input
            type="search"
            className="border text-sm px-3 py-2 rounded md:w-64"
            placeholder="Search property..."
          />
        </div>

        {/* CTA */}
        <div className="flex items-center gap-2">
          <Link to={"/sign-in"} className="btn-secondary hidden sm:block">
            Login
          </Link>
          <Link to={"/sign-up"} className="btn-primary">
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
