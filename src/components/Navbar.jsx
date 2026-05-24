import logo from "../assets/logu.png";
import Auth from "./Auth";
import { useState } from "react";
import { logout } from "../firebase/firebase";

function Navbar({ user, setUser }) {

  const [showAuth, setShowAuth] = useState(false);
  // const user = JSON.parse(localStorage.getItem("user"));

  // Scroll Function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>

      <nav className="w-full px-8 md:px-16 py-5 flex items-center justify-between bg-white shadow-sm sticky top-0 z-50">

        {/* Logo */}
        <div className="flex items-center justify-center">

          <img
            src={logo}
            alt="Klinixy Logo"
            className="h-12 hover:opacity-90 transition-opacity cursor-pointer"
            onClick={() => scrollToSection("hero")}
          />

        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8 text-gray-600 font-medium">

          <li
            onClick={() => scrollToSection("hero")}
            className="hover:text-blue-600 cursor-pointer transition"
          >
            Home
          </li>

          <li
            onClick={() => scrollToSection("features")}
            className="hover:text-blue-600 cursor-pointer transition"
          >
            Features
          </li>

          <li
            onClick={() => scrollToSection("reviews")}
            className="hover:text-blue-600 cursor-pointer transition"
          >
            Reviews
          </li>

          <li
            onClick={() => scrollToSection("cta")}
            className="hover:text-blue-600 cursor-pointer transition"
          >
            About
          </li>

          <li
            onClick={() => scrollToSection("skin")}
            className="hover:text-blue-600 cursor-pointer transition"
          >
           Skin Care
          </li>

        </ul>

        {/* Button */}



       {
  user ? (

    <div className="flex items-center gap-4">

  <img
    src={user.photo}
    alt={user.name}
    className="w-11 h-11 rounded-full"
  />

  <p className="font-medium text-gray-700 hidden md:block">
    {user.name}
  </p>
  <label className="mt-1 inline-flex items-center justify-center bg-blue-50 hover:bg-blue-100 text-blue-600 text-xs px-3 py-1.5 rounded-full cursor-pointer transition duration-300 border border-blue-200 w-fit">

  Change Photo

  <input
    type="file"
    accept="image/*"
    hidden
    onChange={(e) => {

      const file = e.target.files[0];

      if(!file) return;

      const imageUrl =
        URL.createObjectURL(file);

      const updatedUser = {
        ...user,
        photo: imageUrl,
      };

      localStorage.setItem(
        "user",
        JSON.stringify(updatedUser)
      );

      setUser(updatedUser);
    }}
  />

</label>

  <button
    onClick={async () => {

      await logout();

      setUser(null);

      window.location.reload();
    }}
    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl text-sm"
  >
    Logout
  </button>

</div>

  ) : (

    <button
      onClick={() => setShowAuth(true)}
      className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl transition duration-300"
    >
      Sign In
    </button>

  )
}

      </nav>

      {/* Auth Popup */}
      {showAuth && (
        <Auth
  setShowAuth={setShowAuth}
  setUser={setUser}
/>
      )}

    </>
  );
}

export default Navbar;