
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  return (
    <>
      <main className="flex-1 overflow-y-auto px-2 md:px-4 py-6 pb-20">
        {/* Profile Header */}
        <section className="mb-8">
          <div className="rounded-xl bg-white p-6 shadow-md flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center text-3xl font-bold text-gray-600">
              U
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Unknown
              </h2>
              <p className="text-gray-600">example@email.com</p>
              <p className="text-sm text-gray-500">
                Role: User
              </p>
            </div>
          </div>
        </section>

        {/* Account Info */}
        <section className="mb-8">
          <h2 className="mb-3 text-lg font-semibold text-gray-800">
            Account Information
          </h2>
          <div className="rounded-xl bg-white p-4 shadow-md space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-700">Full Name</span>
              <span className="font-medium">unknown user</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Role</span>
              <span className="font-medium">
                User
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Phone</span>
              <span className="font-medium">
                9999999999
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Email</span>
              <span className="font-medium">example@email.com</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Locality</span>
              <span className="font-medium">unknown</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Joined At</span>
              <span className="font-medium">
                null
              </span>
            </div>
          </div>
        </section>

        {/* Settings */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-gray-800">Settings</h2>
          <div className="rounded-xl bg-white p-4 shadow-md space-y-3">
            <button
              onClick={() => setShowLogoutModal(true)}
              className="w-full text-left rounded-lg px-4 py-3 bg-gray-50 hover:bg-gray-100 font-medium text-red-600"
            >
              Logout
            </button>
          </div>
        </section>
      </main>

      
    </>
  );
}

export default Profile;
