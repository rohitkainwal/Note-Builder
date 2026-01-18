import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaBook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { api } from "../axios/axiosInstance";

const Signup_page = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation: Check if ANY field is empty
    if (!formData.username.trim() || !formData.email.trim() || !formData.password.trim()) {
      toast.error("All fields are required");
      return;
    }

    try {

      const res = await api.post("/user/register", formData )
      toast.success(`✅ ${res.data.message}`);

      setFormData({
        username: "",
        email: "",
        password: ""
       
      });
      
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed")
    }

    console.log("User Registered:", formData);
    toast.success(`Welcome, ${formData.username}!`);
    navigate("/")
  };

  return (
    <div>
        <Navbar/>
   
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-stone-100 flex items-center justify-center p-4 mt-8">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden flex">
        {/* Left Panel - Form */}
        <div className="w-full lg:w-1/2 p-8 lg:p-10">
          {/* Logo */}
          <div className="mb-8">
            <div className="inline-block px-5 py-1.5 border-2 border-gray-300 rounded-full">
             <Link to="/">   <h1 className="text-lg font-bold flex items-center gap-1 cursor-pointer">
              <FaBook className="text-[rgb(var(--color-primary))] text-sm" />
                <span className="text-zinc-900">Notes</span>
                <span className="text-[rgb(var(--color-primary))]">era</span>
                
              </h1>
              </Link>
            </div>
          </div>

          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-1">Create an account</h1>
            <p className="text-gray-500 text-sm">Sign up and get 30 day free trial</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username Field */}
            <div>
              <label className="block text-xs text-gray-500 mb-1.5">
                Full name
              </label>
              <input
                className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border-0 focus:ring-2 focus:ring-yellow-400 outline-none transition-all text-gray-900 text-sm"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Amélie Laurent"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-xs text-gray-500 mb-1.5">
                Email
              </label>
              <input
                className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border-0 focus:ring-2 focus:ring-yellow-400 outline-none transition-all text-gray-900 text-sm"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="amelielaurent7622@gmail.com"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-xs text-gray-500 mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border-0 focus:ring-2 focus:ring-yellow-400 outline-none transition-all text-gray-900 text-sm"
                  type="password"
                  placeholder="••••••••••••••••••••"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button 
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[rgb(var(--color-primary))]  text-gray-900 font-semibold py-3 rounded-full transition duration-300 transform active:scale-[0.98] shadow-md hover:shadow-lg mt-6"
            >
              Submit
            </button>
          </form>

          {/* Footer Text */}
          <p className="mt-6 text-xs text-gray-500 text-center">
            Have any account? <Link to="/login" className="text-gray-900 font-medium underline">Sign in</Link>
          </p>
          
          <p className="mt-4 text-xs text-gray-400 text-center">
            <Link to="/terms" className="underline">Terms & Conditions</Link>
          </p>
        </div>

        {/* Right Panel - Image */}
        <div className="hidden lg:block lg:w-1/2 bg-cover bg-center relative" style={{backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80')"}}>
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40"></div>
        </div>
      </div>
    </div>
     </div>
  );
};

export default Signup_page;