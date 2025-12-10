import React, { use, useState } from "react";
import Loading from "../../components/Loading";
import { AuthContext, ThemeContext } from "../../Contexts/Contexts";
import ProfileInfo from "../../components/ProfileComponents/ProfileInfo";
import UpdateProfileForm from "../../components/ProfileComponents/UodateProfileForm";

const Profile = () => {
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const { user, authLoading: loading } = use(AuthContext);
  const { theme } = use(ThemeContext);

  if (loading) {
    return <Loading />;
  }

  const { photoURL, displayName, email } = user;

  return (
    <div>
      <title>Profile - PawMart</title>
      <main className="flex-1">
        <section className="py-4 px-4 md:px-10 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-secondary dark:text-white text-center my-6">
              My Profile
            </h1>
            <div
              className={`w-full max-w-4xl ${
                theme == "light" ? "glass-blur" : "glass-blur-dark"
              } rounded-xl p-8 sm:p-12 shadow-2xl`}
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative">
                  <figure
                    className={` ${
                      photoURL && "border-4 shadow-lg"
                    } w-40 h-40 rounded-full border-secondary cursor-pointer`}
                  >
                    <img
                      src={photoURL}
                      alt="Profile"
                      className="w-full h-full rounded-full"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/avatar.png";
                      }}
                    />
                  </figure>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl font-bold dark:text-gray-200 text-gray-700">
                    {displayName}
                  </h2>
                  <p className="mt-2 text-lg dark:text-gray-200 text-gray-700">
                    {email}
                  </p>
                </div>
              </div>

              {showUpdateForm ? (
                <UpdateProfileForm setShowUpdateForm={setShowUpdateForm} />
              ) : (
                <>
                  <div className="w-full flex justify-center sm:justify-end">
                    <button
                      onClick={() => setShowUpdateForm(true)}
                      className="btn-primary shadow-glow hover:scale-102 transition-transform duration-300 text-white py-2 px-4 rounded-full font-bold cursor-pointer "
                    >
                      Update profile
                    </button>
                  </div>
                  <ProfileInfo user={user} />
                </>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Profile;
