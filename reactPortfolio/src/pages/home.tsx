import React from "react";
import "../index.css";

const Home = () => {
  return (
    <div className="h-[calc(100vh-4rem)] flex justify-center items-center">
      {/* welcome message */}
      <div className="bg-gray-800/30 w-11/12 md:w-3/4 lg:w-2/3 rounded-md p-10 flex justify-center items-center border-sky-500 border-2 shadow-[0_0_20px_2px_rgba(56,189,248,0.7)] animate-glow">
        <p>
          {"Welcome to my portfolio!".split("").map((letter, i) => (
            <span
              key={i}
              className="inline-block animate-wave hover:text-sky-500  transition-colors duration-200 cursor-default text-center font-extrabold text-white text-6xl"
              style={{animationDelay: `${i * 0.1}s`}} 
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </p>
      </div>


    </div>
  );
};

export default Home;
