import { Link, NavLink } from "react-router-dom";
import Logo from "../Assets/DRAGONFRUITLOGO.svg";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <div className="fixed top-0 w-full z-50 font-mono text-gray-600">
      <div className="relative flex max-w-screen justify-between h-16 mx-auto z-40 bg-white">
        <Link to="/" class="flex items-center ml-4 space-x-4">
          <img src={Logo} class=" h-12" alt="DragonFruit Logo" />
          <p className="text-2xl font-semibold">DragonFruit</p>
        </Link>
        <button onClick={toggleNavbar} className="inline md:hidden mr-4">
          <Menu />
        </button>
        <ul
          className={
            "hidden items-center space-x-8 mr-4 font-semibold md:flex md:flex-row"
          }
        >
          <li className="hover:text-green-500 h-full">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-green-500" : "inactive"
              }
            >
              <button className="h-full">Home</button>
            </NavLink>
          </li>

          <li className="hover:text-green-500 h-full">
            <NavLink
              to="/business"
              className={({ isActive }) =>
                isActive ? "text-green-500" : "inactive"
              }
            >
              <button className="h-full">Business</button>
            </NavLink>
          </li>
          <li className="hover:text-green-500 h-full">
            <NavLink
              to="/sdg"
              className={({ isActive }) =>
                isActive ? "text-green-500" : "inactive"
              }
            >
              <button className="h-full">SDG</button>
            </NavLink>
          </li>
          <li className="hover:text-green-500 h-full">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-green-500" : "inactive"
              }
            >
              <button className="h-full">About Us</button>
            </NavLink>
          </li>
        </ul>
      </div>
      <ul
        onClick={toggleNavbar}
        className={`
          absolute flex-col justify-center items-center text-center w-full top-16 pb-2 bg-white z-10 mx-auto font-semibold md:hidden ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          } ease-in-out duration-300`}
      >
        <li className="hover:text-green-500 items-center ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-green-500" : "inactive"
            }
          >
            <button className="w-full h-full py-2 hover:bg-slate-100">
              Home
            </button>
          </NavLink>
        </li>
        <li className="hover:text-green-500">
          <NavLink
            to="/sdg"
            className={({ isActive }) =>
              isActive ? "text-green-500 w-full" : "hover:text-green-500 w-full"
            }
          >
            <button className="w-full h-full py-2 hover:bg-slate-100">
              SDG
            </button>
          </NavLink>
        </li>
        <li className="hover:text-green-500 hover:bg-gray-100">
          <NavLink
            to="/business"
            className={({ isActive }) =>
              isActive ? "text-green-500" : "inactive"
            }
          >
            <button className="w-full h-full py-2 hover:bg-slate-100">
              Business
            </button>
          </NavLink>
        </li>
        <li className="hover:text-green-500 h-9">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-green-500" : "inactive"
            }
          >
            <button className="w-full h-full py-2 hover:bg-slate-100">
              About Us
            </button>{" "}
          </NavLink>{" "}
        </li>
      </ul>
    </div>
  );
}
