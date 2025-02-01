import React from "react";
import DashboardLayout from "./DashboardLayout"; // Assuming it's in the same directory

const ProfileEditPage = () => {
  const [profileData, setProfileData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
  });

  const [passwordData, setPasswordData] = React.useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({ ...passwordData, [name]: value });
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    console.log("Profile data submitted:", profileData);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("New password and confirm password do not match!");
      return;
    }
    console.log("Password data submitted:", passwordData);
  };

  return (
    <DashboardLayout>
      <div className="mx-auto bg-white p-8 rounded-[1rem]">
        <h2 className="text-2xl font-bold mb-6">Edit Profile</h2>

        {/* Profile Edit Form */}
        <form onSubmit={handleProfileSubmit} className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="input-container mb-0">
              <label className="block text-sm font-semibold mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={profileData.firstName}
                onChange={handleProfileChange}
                className="w-full p-3 border border-gray-300 rounded-[0.5rem]"
                required
              />
            </div>

            <div className="input-container mb-0">
              <label className="block text-sm font-semibold mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={profileData.lastName}
                onChange={handleProfileChange}
                className="w-full p-3 border border-gray-300 rounded-[0.5rem]"
                required
              />
            </div>

            <div className="input-container mb-6">
              <label className="block text-sm font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={profileData.email}
                onChange={handleProfileChange}
                className="w-full p-3 border border-gray-300 rounded-[0.5rem]"
                required
              />
            </div>

            <div className="input-container mb-6">
              <label className="block text-sm font-semibold mb-2">
                Phone Number
              </label>
              <div className="flex">
                <select
                  id="countryCode"
                  name="countryCode"
                  className="border border-gray-300 rounded-tl-[0.5rem] rounded-bl-[0.5rem] focus:outline-none focus:border-accent_secondary px-4 py-2 bg-white text-gray-700 w-[30%] text-sm"
                >
                  <option value="+880">+880 (Bangladesh)</option>
                  <option value="+1">+1 (US)</option>
                  <option value="+44">+44 (UK)</option>
                  <option value="+91">+91 (India)</option>
                </select>

                <input
                  type="number"
                  id="phone"
                  name="phone"
                  value={profileData.phone}
                  onChange={handleProfileChange}
                  className="w-full border border-gray-300 rounded-tr-[0.5rem] rounded-br-[0.5rem] focus:outline-none focus:border-accent_secondary px-4 py-2"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div className="input-container mb-6">
              <label className="block text-sm font-semibold mb-2">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={profileData.address}
                onChange={handleProfileChange}
                className="w-full p-3 border border-gray-300 rounded-[0.5rem]"
              />
            </div>

            <div className="input-container mb-6">
              <label className="block text-sm font-semibold mb-2">City</label>
              <input
                type="text"
                name="city"
                value={profileData.city}
                onChange={handleProfileChange}
                className="w-full p-3 border border-gray-300 rounded-[0.5rem]"
              />
            </div>

            <div className="input-container mb-6">
              <label className="block text-sm font-semibold mb-2">
                Country
              </label>
              <input
                type="text"
                name="country"
                value={profileData.country}
                onChange={handleProfileChange}
                className="w-full p-3 border border-gray-300 rounded-[0.5rem]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 bg-accent_secondary text-white px-6 py-2 rounded-[0.5rem] hover:bg-green-700"
          >
            Save Changes
          </button>
        </form>
      </div>
      <div className="mx-auto bg-white p-8 rounded-[1rem] mt-6">
        {/* Password Change Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Change Password</h2>

          <form onSubmit={handlePasswordSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="input-container mb-6">
                <label className="block text-sm font-semibold mb-2">
                  Current Password
                </label>
                <input
                  type="password"
                  name="currentPassword"
                  value={passwordData.currentPassword}
                  onChange={handlePasswordChange}
                  className="w-full p-3 border border-gray-300 rounded-[0.5rem]"
                  required
                />
              </div>

              <div className="input-container mb-6">
                <label className="block text-sm font-semibold mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  name="newPassword"
                  value={passwordData.newPassword}
                  onChange={handlePasswordChange}
                  className="w-full p-3 border border-gray-300 rounded-[0.5rem]"
                  required
                />
              </div>

              <div className="input-container mb-6">
                <label className="block text-sm font-semibold mb-2">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={passwordData.confirmPassword}
                  onChange={handlePasswordChange}
                  className="w-full p-3 border border-gray-300 rounded-[0.5rem]"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 bg-accent_secondary text-white px-6 py-2 rounded-[0.5rem] hover:bg-green-700"
            >
              Change Password
            </button>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProfileEditPage;
