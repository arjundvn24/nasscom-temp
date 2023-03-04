import { NavLink } from "react-router-dom";
import logo from "../../../frontend/android-chrome-192x192.png"

const Navbar = () => {
  return (
    <div
      className="flex justify-between py-5 px-20 items-center text-white
    bg-gradient-to-r from-green-300 to-blue-400
    "
    >
      <div>
      
          <NavLink to="/">
        <h1 className="text-3xl font-bold">SWAस्थम</h1></NavLink>
      </div>
      <div className="flex gap-10 items-center">
        <span>
          <NavLink to="/working" className="hover:underline">
            How we did it?
          </NavLink>
        </span>
        <span>Made 🔥 by BitLock</span>
        <span>
          <a
            href="https://github.com/iamneo-production/92685f75-03e3-441a-b099-a6a541da9e7d"
            target="_blank"
            rel="noopener"
          >
            <img src="/github.svg" alt="github" width={20} />
          </a>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
