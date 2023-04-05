import React from 'react'
import { useState } from 'react';

function ContactMe(){

    const [result, setResult] = useState(null);

    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const object = {};
      formData.forEach((value, key) => {
        object[key] = value;
      });
      const json = JSON.stringify(object);
      setResult('Working...');
  
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: json,
        });
        const data = await response.json();
        if (response.status === 200) {
          setResult(data.message);
        } else {
          console.log(response);
          setResult(data.message);
        }
      } catch (error) {
        console.log(error);
        setResult('Error! Something went wrong!');
      }
  
      e.target.reset();
      setTimeout(() => {
        setResult(null);
      }, 5000);
    };

return (
  <section id='contact'>
     <div className="flex min-h-screen dark:bg-gray-900 font-sora">
        <div className="container flex flex-col w-fit mx-auto px-4 sm:px-0 ">
          <div className="max-w-md mx-auto my-10 p-5 rounded-md bg-white hover:shadow-white shadow-lg">
            <div className="text-center">
            <h1 className="my-3 text-3xl font-semibold text-[#864879] dark:text-gray-200">Contact Me</h1>
            <p className="text-[#864879] dark:text-gray-400">If you would like to get in contact with me, fill out the form below!</p>
          </div>
          <div className="m-7">
            <form action="https://api.web3forms.com/submit" method="POST" id="form">
              <input type="hidden" name="apikey" defaultValue="63b8227b-9907-45ff-8b1d-5c96feba65f6" />
              <input type="hidden" name="subject" defaultValue="Email!" />
              <input type="checkbox" name="botcheck" id style={{display: 'none'}} />
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm text-[#864879] dark:text-gray-400">Full Name</label>
                <input type="text" name="name" id="name" placeholder="John Doe" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm text-[#864879] dark:text-gray-400">Email Address</label>
                <input type="email" name="email" id="email" placeholder="thisisyouremail@gmail.com" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
              </div>
              <div className="mb-6">
                <label htmlFor="phone" className="text-sm text-[#864879] dark:text-gray-400">Phone Number</label>
                <input type="text" name="phone" id="phone" placeholder="+1-123-456-7890" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm text-[#864879] dark:text-gray-400">Message</label>
                <textarea rows={4} name="message" id="message" placeholder="Hi Savina!" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required defaultValue={""} />
              </div>
              <div className="mb-6">
                <button type="submit" className="w-full px-3 py-4 hover:scale-105 text-white bg-[#864879] rounded-md focus:bg-[#864879] focus:outline-none">Send Message</button>
              </div>
              <p className="text-base text-center text-gray-400" id="result">
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default ContactMe;
