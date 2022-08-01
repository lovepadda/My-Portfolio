import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I am a frontend developer from Newcastle, Australia.
        I enjoy taking complex problems and tuning them into simple and beautful interface designs: I also love the logic and structure of coding and allways strive to write elegant and eficient code.
        I have added my projects on hithub please have a look.
        </p>

        <br />

        <p className="text-xl">
        Building stable and maintainable codebases using React. 
        Implementing a mobile-first approach to existing websites.
        Collaborating with designers to ensure designs were efficient and technically sound.
        Creating modular,responsive templates using modern CSS techniques and JavaScrip libraries.
        Leveraging responsive web frameworks to complete deliverables ahead of schedule.
          
        </p>
      </div>
    </div>
  );
};

export default About;