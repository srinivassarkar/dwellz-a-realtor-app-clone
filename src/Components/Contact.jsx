import { doc, getDoc } from "firebase/firestore";
import React from "react";
import { useEffect } from "react";
import { db } from "../firebase";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Contact({ userRef, listing }) {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState("");
  useEffect(() => {
    async function getLandLord() {
      const docRef = doc(db, "users", userRef);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setLandlord(docSnap.data());
      } else {
        toast.error("Could not get landlord data");
      }
    }
    getLandLord();
  }, [userRef]);

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <>
      {landlord !== null && (
        <div className="flex flex-col w-full">
          <p>
            Contact {landlord.name} for the {listing.name.toLowerCase()}
          </p>
          <div className="mt-3 mb-6">
            <textarea
              name="message"
              id="message"
              rows="2"
              value={message}
              onChange={onChange}
              className="w-full px-4 text-xl text-gray-700 bg-white border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600"
              placeholder="type here..."
            ></textarea>
          </div>
          <a
            href={`mailto:${landlord.email}?Subject=${listing.name}&body=${message}`}
          >
            <button
              className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800 mb-6"
              type="button"
            >
              Send Message
            </button>
          </a>
        </div>
      )}
    </>
  );
}
