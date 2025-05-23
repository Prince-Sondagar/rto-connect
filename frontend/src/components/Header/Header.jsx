import { useEffect, useRef } from "react";
import logo from "../../assets/images/logo.png";
import userImg from "../../assets/images/avatar-icon.png";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";

// Navigation Links
import { useNavigate } from "react-router-dom";
const navLinks = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/apply-dllicense',
    display: 'Apply for DL'
  },
  {
    path: '/services',
    display: 'Services'
  },
  {
    path: '/contact',
    display: 'Contact'
  },
];

const Header = () => {
  const navigate = useNavigate();

  const headerRef = useRef(null);
  const menuRef = useRef(null);


  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    })
  };

  useEffect(() => {
    handleStickyHeader();

    return () => window.removeEventListener("scroll", handleStickyHeader);

  });

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu');

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ====== Logo ===== */}
          <div>
            <img src={logo} alt="Logo" />
          </div>

          {/* ====== Navigation ===== */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            {localStorage.getItem('role') !== "admin" ? (
              <ul className="menu flex items-center gap-[2.7rem]">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    {<NavLink
                      to={link.path}
                      className={navClass =>
                        navClass.isActive
                          ? "text-primaryColor text-[16px] leading-7 font-[600]"
                          : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                      }
                    >
                      {link.display}
                    </NavLink>}
                  </li>
                ))}
              </ul>
            ) : (
              <h1 className="text-4xl font-extrabold text-center text-gray-900">Admin Dashboard</h1>
            )}
          </div>

          {/* ====== nav right ===== */}
          <div className="flex items-center gap-4">
            <div className="hidden">
              <Link to="/" >
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <img src={userImg} className="w-full rounded-full" alt="User" />
                </figure>
              </Link>
            </div>
            {/*===========Login Button================*/}
            {!localStorage.getItem("token") ? (
              <Link to="/login">
                <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center rounded-[50px]">
                  Login
                </button>
              </Link>
            ) : (
              <button
                className="bg-red-500 py-2 px-6 text-white font-[600] h-[44px] flex items-center rounded-[50px]"
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("role");
                  navigate("/home");
                }}>
                Logout
              </button>
            )}
            {/*===========Login Button End================*/}
            {/*<Link to='/login'>
            <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center rounded-[50px]">
              Login
            </button>
          </Link>
          */}
            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;