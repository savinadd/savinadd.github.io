import React from 'react';

const About = () => {
  return (
      <section id="about">
        <div className="flex flex-wrap w-full h-auto md:h-700 font-sora">
          <div className="w-full md:w-1/2 p-6 md:px-20 sm:px-10">
            <h1 className="text-3xl font-bold mb-4 text-[#F5FBEF] pt-3">About Me</h1>
            <p className="text-[#F0E9E5] text-lg mb-4">
              Hello, my name is Savina! I am a second year student double
              majoring in Computer Science and Mathematics. My interest in
              programming started back in the early years of high school, 
              when I joined a club for women in STEM careers. Since then, 
              my curiosity has guided me toward the software development field, 
              specifically focusing on Back-End development. However, my recent
              projects have pushed me into the land of Front-End development, 
              with most of my experience as of now being in React. 
            </p>
            <p className="text-[#F0E9E5] text-lg">
              As a student in college, I have gotten quite the lesson in time 
              management. After being on the tail end of my second year of college, 
              I can say that I finally managed to figure out how to be able to manage 
              my time between the Computer Science and Math classes, 3 clubs, and 
              working on side projects like this one.  
            </p>
            <p className="text-[#F0E9E5] text-lg">
              I am currently on the hunt for a part-time junior developer position or 
              an internship, with no preference on back or front end development.
            </p>
            <div className="inline-flex pt-5 w-full justify-center md:justify-start">
              <a href='SavinaDimitrovResume.pdf' download className="bg-[#864879] text-red-100 text-center scale-95 hover:scale-105 text-lg hover:bg-[#645280] py-2 px-4  rounded-full ">
                Download CV
              </a>
              <a href="https://www.linkedin.com/in/savinadimitrov/" target="_blank" rel="noopener noreferrer" className="bg-[#864879] text-red-100 text-center scale-95 hover:scale-105 text-lg hover:bg-[#645280] py-2 px-4  rounded-full ">
                Connect on LinkedIn
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex align-middle justify-center">
            <img src='heroImage.png' alt='Portrait of Savina' className="max-w-full max-h-500 h-auto"/>
          </div>
        </div>
      </section>
   
  );
};

export default About;






