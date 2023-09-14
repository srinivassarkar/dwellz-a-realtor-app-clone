import { getAuth } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();

  const [formData, setformData] = useState({
    name: "Srinivas Sarkar",
    email: "srinivassarkar07@gmail.com",
  });

  const { name, email } = formData;

  function onLogOut() {
    auth.signOut();
    navigate("/");
  }

  return (
    <>
      <section className="max-w-6xl mx-auto flex items-center flex-col">
        <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>

        <div className="w-full md:w-[50%] mt-6 px-3">
          <form>
            {/* Name input*/}
            <input
              type="text"
              id="name"
              value={name}
              disabled
              className="mb-6 w-full px-4 py-2p text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
            />
          </form>
          <form>
            {/* email input*/}
            <input
              type="email"
              id="email"
              value={email}
              disabled
              className="mb-6 w-full px-4 py-2p text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
            />

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
              <p className="flex items-center ">
                Do you want to change your name?
                <span className="text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer">
                  Edit
                </span>
              </p>
              <p
                onClick={onLogOut}
                className="text-blue-600 hover:text-blue-800 cursor-pointer"
              >
                Sign out
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
