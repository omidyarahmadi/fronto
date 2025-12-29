import { useState } from "react";
import { BsCart } from "react-icons/bs";
import { FaBars, FaRegUser } from "react-icons/fa";
import { IoClose, IoSearch } from "react-icons/io5";
import logo from "../assets/images/logo-fronto.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="site-header w-full">
      <header className="site-header__bar flex items-center justify-between w-full max-w-7xl p-4 relative mx-auto">
        <div className="site-header__brand flex justify-center items-center w-30 h-full">
          <img
            src={logo}
            alt="fronto logo"
            className="site-header__logo w-full object-cover"
          />
        </div>

        <div className="site-header__toggle md:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-2xl text-black block cursor-pointer"
          >
            <FaBars />
          </button>
        </div>

        <nav className="site-header__nav hidden md:flex items-center justify-start gap-4">
          <ul className="site-header__list flex items-center justify-center gap-6">
            <li className="site-header__item flex items-center justify-center">
              <a href="#" className="site-header__link font-medium text-black">
                Home
              </a>
            </li>
            <li className="site-header__item flex items-center justify-center">
              <a href="#" className="site-header__link font-medium text-black">
                Blogs
              </a>
            </li>
            <li className="site-header__item flex items-center justify-center">
              <a href="#" className="site-header__link font-medium text-black">
                Courses
              </a>
            </li>
            <li className="site-header__item flex items-center justify-center">
              <a href="#" className="site-header__link font-medium text-black">
                Services
              </a>
            </li>
            <li className="site-header__item flex items-center justify-center">
              <a href="#" className="site-header__link font-medium text-black">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="site-header__actions hidden md:flex items-center justify-center gap-4">
          <button className="site-header__action-btn site-header__action-btn--search flex items-center justify-center bg-cyan-700 text-white rounded-md p-2">
            <IoSearch style={{ fontSize: "20px" }} />
          </button>

          <button className="site-header__action-btn site-header__action-btn--cart flex items-center justify-center bg-cyan-700 text-white rounded-md p-2">
            <BsCart style={{ fontSize: "20px" }} />
          </button>

          <button className="site-header__profile-btn flex items-center justify-center border border-cyan-700 rounded-md px-4 py-2 gap-2 text-cyan-800 font-medium cursor-pointer hover:bg-cyan-700 hover:text-white transition-all duration-300 ease-in-out">
            Omid Yarahmadi
            <FaRegUser />
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="site-header__mobile site-header__mobile--open flex flex-col bg-cyan-800 w-full h-full fixed top-0 left-0 z-50 py-6 px-4 transition-all duration-300 ease-in-out">
          <div className="site-header__mobile-close">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="float-right text-3xl text-white cursor-pointer"
            >
              <IoClose />
            </button>
          </div>

          <ul className="site-header__mobile-list flex flex-col gap-4 text-white mt-4">
            <li className="site-header__item text-lg font-medium flex items-center">
              <a href="#" className="site-header__link">
                Home
              </a>
            </li>
            <li className="site-header__item text-lg font-medium flex items-center">
              <a href="#" className="site-header__link">
                Blogs
              </a>
            </li>
            <li className="site-header__item text-lg font-medium flex items-center">
              <a href="#" className="site-header__link">
                Courses
              </a>
            </li>
            <li className="site-header__item text-lg font-medium flex items-center">
              <a href="#" className="site-header__link">
                Services
              </a>
            </li>
            <li className="site-header__item text-lg font-medium flex items-center">
              <a href="#" className="site-header__link">
                Contact
              </a>
            </li>
          </ul>

          <div className="site-header__mobile-profile flex items-center justify-center mt-8">
            <button className="site-header__profile-btn flex items-center justify-center gap-2 text-white border border-white rounded-md px-4 py-2">
              <span className="text-sm">Omid Yarahmadi</span>
              <FaRegUser />
            </button>
          </div>
        </div>
      )}
    </section>

    // <section className="w-full">
    //   <header className="flex items-center justify-between w-full max-w-7xl p-4 relative mx-auto ">
    //     <div className="logo-box flex justify-center items-center w-30 h-full  ">
    //       <img src={logo} alt="fronto logo" className="w-full object-cover" />
    //     </div>
    //     <div className="mobile-toggle-menu md:hidden ">
    //       <button
    //         onClick={() => setIsMenuOpen(true)}
    //         className="text-2xl text-black  block cursor-pointer "
    //       >
    //         <FaBars />
    //       </button>
    //     </div>
    //     <nav className="nav-menu hidden md:flex items-center justify-start gap-4 ">
    //       <ul className=" flex items-center justify-center gap-6  ">
    //         <li className="flex items-center  justify-center">
    //           <a href="#" className="font-medium text-black">
    //             Home
    //           </a>
    //         </li>
    //         <li className="flex items-center  justify-center">
    //           <a href="#" className="font-medium text-black">
    //             Blogs
    //           </a>
    //         </li>
    //         <li className="flex items-center  justify-center">
    //           <a href="#" className="font-medium text-black">
    //             Courses
    //           </a>
    //         </li>
    //         <li className="flex items-center  justify-center">
    //           <a href="#" className="font-medium text-black">
    //             Services
    //           </a>
    //         </li>
    //         <li className="flex items-center  justify-center">
    //           <a href="#" className="font-medium text-black">
    //             Contact
    //           </a>
    //         </li>
    //       </ul>
    //     </nav>
    //     <div className="actions-box hidden  md:flex items-center justify-center gap-4 ">
    //       <button className="serach-btn flex items-center justify-center bg-cyan-700 text-white rounded-md p-2">
    //         <IoSearch style={{ fontSize: "20px" }} />
    //       </button>
    //       <button className="cart-btn flex items-center justify-center bg-cyan-700 text-white rounded-md p-2  ">
    //         <BsCart style={{ fontSize: "20px" }} />
    //       </button>
    //       <button className="profile-btn flex items-center justify-center border border-cyan-700 rounded-md px-4 py-2 gap-2 text-cyan-800 font-medium cursor-pointer hover:bg-cyan-700 hover:text-white transition-all duration-300 ease-in-out ">
    //         Omid Yarahmadi
    //         <FaRegUser />
    //       </button>
    //     </div>
    //   </header>

    //   {isMenuOpen && (
    //     <div className="mobile-menu flex flex-col bg-cyan-800 w-full h-full fixed top-0 left-0 z-50 py-6 px-4 transition-all duration-300 ease-in-out ">
    //       <div className="close-btn">
    //         <button
    //           onClick={() => setIsMenuOpen(false)}
    //           className="float-right text-3xl text-white cursor-pointer "
    //         >
    //           <IoClose />
    //         </button>
    //       </div>
    //       <ul className="flex flex-col gap-4 text-white mt-4">
    //         <li className="text-lg font-medium flex items-center ">
    //           <a href="#">Home</a>
    //         </li>
    //         <li className="text-lg font-medium flex items-center">
    //           <a href="#">Blogs</a>
    //         </li>
    //         <li className="text-lg font-medium flex items-center">
    //           <a href="#">Courses</a>
    //         </li>
    //         <li className="text-lg font-medium flex items-center">
    //           <a href="#">Services</a>
    //         </li>
    //         <li className="text-lg font-medium flex items-center">
    //           <a href="#">Contact</a>
    //         </li>
    //       </ul>
    //       <div className="profile-btn flex items-center justify-center mt-8 ">
    //         <button className="profile-btn flex items-center justify-center gap-2 text-white border border-white rounded-md px-4 py-2 ">
    //           <span className="text-sm">Omid Yarahmadi</span>
    //           <FaRegUser />
    //         </button>
    //       </div>
    //     </div>
    //   )}
    // </section>
  );
}

export default Header;
