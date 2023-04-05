import React from 'react';
import { DiPython, DiDjango, DiDocker, DiPostgresql, DiReact, DiCss3, DiScrum, DiResponsive, DiJava } from "react-icons/di";
import { SiCplusplus, SiJsonwebtokens } from "react-icons/si";

const Portfolio = () => {
  return (
    <section id="portfolio">
    <div className="px-5 sm:px-10 md:px-20 font-sora">
        <div className="max-w-7xl mx-auto pt-20 pb-10">
          <div className="text-center">
          <h2 className="text-3xl font-extrabold text-red-100 sm:text-4text-mdxl">Portfolio</h2>
          <p className="mt-4 max-w-2xl text-xl text-red-100 mx-auto">
            Here are some of the projects I've worked on recently
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 h-300 flex-wrap: wrap;">
            <div className="bg-white overflow-hidden shadow rounded-lg flex flex-col h-full">
            <div className="p-5 flex-grow">
                <h3 className="text-base font-medium text-gray-900 pb-2">Carwashing Application</h3>
                <div className="flex display-inline">
                    <DiPython size={70} />
                    <DiDjango size={70} />
                    <DiDocker size={70} />
                    <DiPostgresql size={70} /> 
                    <SiJsonwebtokens size = {60} />
                    <DiScrum size={70} />

                </div>
                    <p className="mt-2 text-gray-500 text-sm">
                        A carwashing application created with my fellow team of interns at Softserve. Allows the user to book various car washing services after creating a profile.
                    </p>
                    <p className="mt-2 text-gray-500 text-Kanit text-xs ">
                        Link leads to the forked repository of the original repository created by the mentors at Softserve.
                    </p>
                </div>
                <div className="bg-gray-50 px-5 py-3 flex-shrink-0 flex justify-end">
                    <a href="https://github.com/savinadd/CarWashing-System" className="bg-[#864879] text-red-100 text-center scale-95 hover:scale-105 text-lg hover:bg-[#645280] py-2 px-4  rounded-full ">View project</a>
                </div>
            </div>
            <div className="bg-white shadow rounded-lg flex flex-col h-full overflow-hidden">
            <div className="p-5 flex-grow">
                 <h3 className="text-base font-medium text-gray-900 pb-2">Database Connection Pool </h3>
                    <div className="flex display-inline">
                        <DiPython size={70} />
                        <DiDocker size={70} />
                        <DiPostgresql size={70} />
                    </div>
                    <p className="mt-2 text-gray-500 text-sm ">
                        Separate database connection pool written for reuse for future requests in Carwashing application for Softserve.
                     </p>
                </div>
                <div className="bg-gray-50 px-5 py-3 flex-shrink-0 flex justify-end">
                <a href="https://github.com/savinadd/DBConnectionPool" className=" bg-[#864879] text-center text-red-100 scale-95 hover:scale-105 text-lg hover:bg-[#645280] py-2 px-4  rounded-full  ">View project</a>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg flex flex-col h-full">
            <div className="p-5 flex-grow">
                    <h3 className="text-base font-medium text-gray-900 pb-2">Portfolio Website</h3>
                    <div className="flex display-inline">
                        <DiReact size={70} />
                        <DiCss3 size={70} />
                        <DiResponsive size={70} />
                     </div>
                    <p className="mt-2 text-gray-500 text-sm">
                        The website you're looking at is one of my most recent projects as I venture into front-end development! Enjoy!
                    </p>
              </div>
              <div className="bg-gray-50 px-5 py-3 flex-shrink-0 flex justify-end">
                <a href="https://github.com/savinadd/Portfolio-Website" className="bg-[#864879] text-red-100 text-center scale-95 hover:scale-105 text-lg hover:bg-[#645280] py-2 px-4  rounded-full ">View project</a>
              </div>
            </div>
            
        </div>
        <div className="text-center">
          <p className="mt-4 max-w-2xl text-xl pt-10 text-red-100 mx-auto">
            Below are some projects I am currently working on and developing or currently fixing up!
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 h-300">
          <div className="bg-white overflow-hidden shadow rounded-lg flex flex-col h-full">
          <div className="p-5 flex-grow">
                <h3 className="text-base font-medium text-gray-900 pb-2">Employee Management System</h3>
                <div className="flex display-inline">
                    <SiCplusplus size={70} />
                </div>
                    <p className="mt-2 text-gray-500 text-sm">
                        An application for organizing, managing, and viewing employee details that can be used by administration and employees alike.
                    </p>
                </div>
                <div className="bg-gray-50 px-5 py-3 flex-shrink-0 flex justify-end">
                    <a href="https://github.com/savinadd/FDS-Course-Project" className="bg-[#864879] text-red-100 text-center scale-95 hover:scale-105 text-lg hover:bg-[#645280] py-2 px-4  rounded-full  ">View project</a>
                </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg flex flex-col h-full">
            <div className="p-5 flex-grow">
                <h3 className="  text-base font-medium text-gray-900 pb-2">Ticket Booking System</h3>
                <div className="flex display-inline">
                    <DiJava size={70} />
                </div>
                    <p className="mt-2 text-gray-500 text-sm">
                        Various transportation forms all combined into one single booking application. Users may book, check details, and cancel trips with example routes throughout Europe.
                    </p>
                    <p className="mt-2 text-gray-500   text-xs">
                        An updated and changed version of the group project made by Kledis Zaimi, Emil Hayrumyan, Bjorni Kotarja and I.
                    </p>
                </div>
                <div className="bg-gray-50 px-5 py-3 flex-shrink-0 flex justify-end">
                    <a href="https://github.com/savinadd/BookingSystem" className="bg-[#864879] text-red-100 text-center scale-95 hover:scale-105 text-lg hover:bg-[#645280] py-2 px-4  rounded-full ">View project</a>
                </div>
            </div>
            
            </div>
            </div>
     </div>
    </div>
    
     </div>
     </section>
  

    




        
  );
}

export default Portfolio