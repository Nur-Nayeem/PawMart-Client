import React, { use, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Contexts/Contexts";
import { imageUpload } from "../../lib";
const UpdateProfileForm = ({ setShowUpdateForm }) => {
  const { updateUserProfile, user } = use(AuthContext);
  const [error, setError] = useState("");

  const handleUpdateUserProfile = async (e) => {
    e.preventDefault();
    let name = e.target.name.value.trim();

    let photo = e.target.image.files[0];
    let photourl = await imageUpload(photo);

    if (!name.length && !photourl.length) {
      setError("Enter name or photo url first");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Enter name or photo url first",
      });

      return;
    }
    if (!name.length && photourl.length) {
      name = user?.displayName;
    } else if (name.length && !photourl.length) {
      photourl = user?.photoURL;
    }

    updateUserProfile(name, photourl)
      .then(() => {
        Swal.fire({
          title: "Update profile successfully",
          icon: "success",
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
        });
      });
    setShowUpdateForm(false);
  };

  return (
    <form onSubmit={handleUpdateUserProfile}>
      <div className="mt-10 border-t border-gray-200 pt-8 space-y-6">
        <h2 className="text-3xl dark:text-gray-200 text-gray-700 font-semibold">
          Update Your Profile:
        </h2>
        <div>
          <label className="text-sm font-bold dark:text-gray-200 text-gray-700">
            Full Name
          </label>
          <input
            className="w-full h-12 p-4 rounded-lg border-2 border-primary/50 bg-base-100/50 focus:outline-none"
            type="text"
            name="name"
            placeholder="Enter Name"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2 dark:text-white text-secondary">
            Add New Photo
          </label>
          <div className="relative">
            <input
              type="file"
              name="image"
              id="image"
              accept="image/*"
              className="file-input w-full h-12 pr-4 rounded-lg border-2 border-primary/50  bg-gray-200/10 focus:outline-none"
            />
            <p className="mt-1 text-xs text-gray-400">
              PNG, JPG or JPEG (max 2MB)
            </p>
          </div>

          {/* <input
            className="w-full h-12 p-4 rounded-lg border-2 border-primary/50 bg-base-100/50 focus:outline-none"
            type="text"
            name="photourl"
            placeholder="Enter Photo URL"
          /> */}
        </div>
        <p className="text-red-500">{error}</p>
        <div className="flex justify-center sm:justify-start pt-6 gap-2.5">
          <button
            type="button"
            onClick={() => setShowUpdateForm(false)}
            className="hover:scale-102 transition-transform duration-300 text-white py-2 px-4 rounded-full font-bold cursor-pointer bg-neutral/90 hover:bg-neutral shadow-glow"
          >
            Cancel
          </button>
          <button className="btn-primary shadow-glow hover:scale-102 transition-transform duration-300 text-white py-2 px-4 rounded-full font-bold cursor-pointer">
            Update
          </button>
        </div>
      </div>
    </form>
  );
};

export default UpdateProfileForm;
