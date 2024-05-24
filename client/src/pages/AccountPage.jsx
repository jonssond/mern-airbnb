import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";

export default function AccountPage() {
  const [redirect, setRedirect] = useState(false);
  let { subpage } = useParams();
  const { ready, user } = useContext(UserContext);

  if (ready && !user) {
    return <Navigate to={"/user/login"} />;
  }

  if (!ready) {
    return "Loading...";
  }

  if (subpage === undefined) {
    subpage = "profile";
  }

  function linkClasses(type = null) {
    let classes = "py-2 px-6";
    if (type === subpage) {
      classes += " bg-primary text-white rounded-full";
    }
    return classes;
  }

  async function logout() {
    await axios.post("/user/logout");
    setRedirect(true);
  }

  if (redirect) {
    <Navigate to={"/"} />;
  }

  return (
    <div>
      <nav className="w-full flex mt-8 justify-center gap-2 mb-8">
        <Link className={linkClasses("profile")} to={"/user/account/"}>
          My profile
        </Link>
        <Link className={linkClasses("bookings")} to={"/user/account/bookings"}>
          My bookings
        </Link>
        <Link className={linkClasses("places")} to={"/user/account/places"}>
          My accommodations
        </Link>
      </nav>
      {subpage === "profile" && (
        <div className="text-center max-w-lg mx-auto">
          Logged in as {user.name} ({user.email})<br />
          <button onClick={logout} className="primary max-w-sm mt-2">
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
