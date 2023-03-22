import React from 'react';

const About = () => {
  return (
    <div className="flex flex-wrap w-full h-screen px-40">
      <div className="w-full md:w-1/2 p-6">
        <h1 className="text-5xl font-bold mb-4 text-red-100 pt-3">About Me</h1>
        <p className="text-red-100 text-2xl mb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae optio, ullam recusandae maxime repudiandae adipisci dolorum distinctio eum laborum sed dolor rem soluta voluptates fugit, ratione velit ab inventore aliquid!
        </p>
        <p className="text-red-100 text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, magni magnam. Consectetur optio excepturi, enim debitis nobis placeat modi esse pariatur obcaecati, eum provident eius aut. Cum dolore mollitia magnam!
        </p>
        <div className="mt-6 pt-6">
          <a href='SavinaDimitrovResume.pdf' download className="bg-[#864879] text-red-100 text-lg hover:bg-[#3F3351]  font-bold py-2 px-4  rounded-full ">
            Download CV
          </a>
          <a href="https://www.linkedin.com/in/savinadimitrov/" target="_blank" rel="noopener noreferrer" className="ml-4 bg-[#864879] hover:bg-[#3F3351]  text-red-100 text-lg font-bold py-2 px-4 rounded-full">
            Connect on LinkedIn
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 ">
        <img src='heroImage.png' alt='Portrait of Savina' className="pl-20 "></img>
      </div>
    </div>
      
  );
};

export default About;
