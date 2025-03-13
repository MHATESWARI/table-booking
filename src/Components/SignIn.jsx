import React, { useState } from "react";
import ErrorsValue from "./ErrorsValue.jsx"; 

function SignIn() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phonenumber: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Signed-In successfully:", formData);
    } else {
      alert("Please fill the requirments correctly!!!");
    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.username.trim()) {
      errors.username = "Username is required";
    } else if (data.username.length < 4) {
      errors.username = "Username must be at least 4 characters long";
    }

    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = "*Email is invalid";
    }

    if (!data.password) {
      errors.password = "Password is required";
    } else if (data.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    } else if (!/[A-Z]/.test(data.password)) {
      errors.password = "Password must contain at least one uppercase letter";
    } else if (!/[a-z]/.test(data.password)) {
      errors.password = "Password must contain at least one lowercase letter";
    } else if (!/[0-9]/.test(data.password)) {
      errors.password = "Password must contain at least one number";
    } else if (!/[!@#$%^&*]/.test(data.password)) {
      errors.password =
        "Password must contain at least one special character (!@#$%^&*)";
    }

    if (!data.confirmPassword) {
      errors.confirmPassword = "Confirm password is required";
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (!data.phonenumber) {
      errors.phonenumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(data.phonenumber)) {
      errors.phonenumber = "Invalid phone number. Must be exactly 10 digits.";
    }

    return errors;
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-green-50 p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-black-700 mb-6">Sign-In</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-black-600 font-medium">Username</label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            <ErrorsValue error={errors.username} />
          </div>

          <div>
            <label className="block text-black-600 font-medium">Email</label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <ErrorsValue error={errors.email} />
          </div>
          <div>
            <label className="block text-black-600 font-medium">Phone Number</label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200"
              type="text"
              name="phonenumber"
              id="phonenumber"
              value={formData.phonenumber}
              onChange={handleChange}
              maxLength="10"
            />
            <ErrorsValue error={errors.phonenumber} />
          </div>

          <div>
            <label className="block text-black-600 font-medium">Password</label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <ErrorsValue error={errors.password} />
          </div>

          <div>
            <label className="block text-black-600 font-medium">Confirm Password</label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <ErrorsValue error={errors.confirmPassword} />
          </div>

          
          <button
            className="w-full bg-green-400 text-white font-medium py-2 rounded-lg hover:bg-green-500 transition duration-300"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;







  

