import React from "react";
import { Link } from "react-router-dom";

const Hero_content = () => {
  return (
    <section className="relative z-10 min-h-[90vh] flex items-center justify-center">
      <div className="max-w-5xl px-6 text-center flex flex-col items-center gap-6 animate-fadeIn">
        
        <span className="text-sm font-semibold px-4 py-2 rounded-full
          bg-violet-100 text-[rgb(var(--color-primary))] dark:bg-violet-900">
          For minds that wander — and act.
        </span>

        <h1 className="text-7xl  md:text-7xl font-medium leading-tight text-gray-900 dark:text-white">
          Thoughts come and go.
          <br />
          <span >
            Ideas deserve action.
          </span>
        </h1>

        <p className="max-w-md text-black-600 dark:text-gray-300 text-lg">
          Capture notes, organize thoughts, and build clarity with a calm,
          modern experience.
        </p>

        <button className="mt-4 px-8 py-3 rounded-xl font-medium
          bg-[rgb(var(--color-primary))] text-white hover:bg-[rgb(var(--color-primary))] transition">
         <Link to="/login"> Get Started </Link> 
        </button>

      </div>
    </section>
  );
};

export default Hero_content;
