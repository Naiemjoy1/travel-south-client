import { useEffect, useState } from "react";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../hooks/useAuth";

const UserDetails = () => {
  const { user } = useAuth();
  const [name, setName] = useState(user?.displayName || "");
  // const [email, setEmail] = useState(user?.email || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  useEffect(() => {
    document.title = "Update";
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  const handlePhotoURLChange = (e) => {
    setPhotoURL(e.target.value);
  };

  const handleUpdateProfile = () => {
    updateProfile(user, { displayName: name, photoURL: photoURL })
      .then(() => {
        console.log("Profile updated successfully");
        toast.success("Profile updated successfully");
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
        toast.error("Failed to update profile");
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-246px)]">
      <div className="avatar mb-4">
        <div className="w-24 rounded-full">
          <img
            src={
              photoURL ||
              "https://i.ibb.co/cFXnHG0/360-F-214746128-31-Jkea-P6r-U0-Nzzzd-FC4kh-Gkmqc8noe6h.jpg"
            }
            alt="User avatar"
          />
        </div>
      </div>
      <div className="text-center grid grid-cols-1">
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          className="mb-2 input input-bordered"
          placeholder="Name"
        />
        {/* <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="mb-2 input input-bordered"
          placeholder="Email"
        /> */}
        <input
          type="text"
          value={photoURL}
          onChange={handlePhotoURLChange}
          className="mb-2 input input-bordered"
          placeholder="Photo URL"
        />
        <button onClick={handleUpdateProfile} className="btn btn-primary">
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
