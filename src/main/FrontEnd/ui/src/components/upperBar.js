import { MegaMenu, Navbar, Button, Dropdown, Carousel } from "flowbite-react";
import { HiArrowRight, HiChevronDown } from "react-icons/hi";
import adidasLogo from "/Users/mohamedelshaarawy/Desktop/Jumia e-commerce/src/main/FrontEnd/ui/src/Assets/ADIDAS LOGO.jpg";
import { useState } from "react";

function UpperBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  const toggleMegaMenu = () => {
    setIsMegaMenuOpen(!isMegaMenuOpen);
  };
  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    console.log(isDropdownOpen);
  };
  return (
    <div style={{ position: "relative" }}>
      <div
        className={`${
          isDropdownOpen ? "block" : "hidden"
        } absolute left-0 right-0 bg-gray-800 text-white z-10`} // Use absolute positioning
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: "black",
          color: "white",
          padding: "5px",
        }}
        onMouseEnter={handleMouseEnter} // Show dropdown on hover
        onMouseLeave={handleMouseLeave} // Hide dropdown on mouse leave
      >
        <p>UP TO 40% OFF </p>
        <HiChevronDown onClick={toggleDropdown} style={{ cursor: "pointer" }} />
      </div>

      {/* Sliding dropdown panel */}
      <div
        className={`${
          isDropdownOpen ? "block" : "hidden"
        } absolute left-0 right-0 bg-gray-800 text-white z-10`} // Use absolute positioning
        style={{
          transition: "opacity 0.3s ease-in-out",
          backgroundColor: "white",
          // Optional fade effect
          maxHeight: "30vh",
          paddingBottom: "200px",
          color: "black",
        }}
        onMouseEnter={handleMouseEnter} // Show dropdown on hover
        onMouseLeave={handleMouseLeave} // Hide dropdown on mouse leave
      >
        <div className="py-4 text-black">
          <ul className="space-y-4 text-center">
            <li>
              <a href="#">Online Stores</a>
            </li>
            <li>
              <a href="#">Segmentation</a>
            </li>
            <li>
              <a href="#">Marketing CRM</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
          </ul>
        </div>
      </div>
      <div style={{ paddingTop: "25px" }}>
        <MegaMenu>
          <Navbar.Brand href="/">
            <img
              alt="ADIDAS Logo"
              src={adidasLogo}
              className="mr-3 h-6 sm:h-9"
              style={{ width: "75px", height: "65px", marginLeft: "10px" }}
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              ADIDAS
            </span>
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-center">
            <Navbar.Link href="/"> SCHUHE</Navbar.Link>

            <Navbar.Link href="/">MANNER</Navbar.Link>

            <Navbar.Link href="/">FRAUEN</Navbar.Link>

            <Navbar.Link href="/">KINDER</Navbar.Link>

            <div
              onClick={toggleMegaMenu}
              className="cursor-pointer"
              style={{ display: "flex" }}
            >
              SALE
              <HiChevronDown className="ml-2" />
            </div>
          </Navbar.Collapse>
          <div className="order-2 hidden items-center md:flex">
            <a
              href="#"
              className="mr-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:mr-2 md:px-5 md:py-2.5"
            >
              Login
            </a>
            <Button href="#" color="black">
              Sign up
            </Button>
          </div>
          {isMegaMenuOpen && (
            <MegaMenu.Dropdown>
              <div className="mt-6 border-y border-gray-200 bg-white shadow-sm dark:border-gray-600 dark:bg-gray-800">
                <div className="mx-auto grid max-w-screen-xl px-4 py-5 text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6">
                  <ul
                    className="mb-4 hidden space-y-4 md:mb-0 md:block"
                    aria-labelledby="mega-menu-full-image-button"
                  >
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Online Stores
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Segmentation
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Marketing CRM
                      </a>
                    </li>
                  </ul>
                  <ul className="mb-4 space-y-4 md:mb-0">
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Our Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        License
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Resources
                      </a>
                    </li>
                  </ul>
                  <a href="#" className="rounded-lg bg-gray-500 p-8 text-left">
                    <p className="mb-5 max-w-xl font-extrabold leading-tight tracking-tight text-white">
                      Preview the new Flowbite dashboard navigation.
                    </p>
                    <button
                      type="button"
                      className="inline-flex items-center rounded-lg border border-white px-2.5 py-1.5 text-center text-xs font-medium text-white hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-700"
                    >
                      Get started
                      <HiArrowRight className="ml-2" />
                    </button>
                  </a>
                </div>
              </div>
            </MegaMenu.Dropdown>
          )}
        </MegaMenu>
      </div>
    </div>
  );
}

export default UpperBar;
