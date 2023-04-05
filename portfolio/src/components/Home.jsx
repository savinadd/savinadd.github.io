import React from 'react'

const Home = () => {
    return(
      <section id="home">
        <header className="flex justify-center font-sora">
        <div className="max-w-7xl w-full sm:px-6 flex flex-col justify-center h-screen ">
          <div className=" pr-25 ">
            <h1 className="text-5xl font-bold pb-5 font-sora animate-text bg-gradient-to-r from-[#E9A6A6] via-purple-400 to-[#0E8388] bg-clip-text text-transparent">Hello and welcome!</h1>
            <header className="mb-16 group">
              <h1 className="mb-1 font-sora text-4xl font-mono text-gray-100 md:text-6xl">
                <span className="inline-flex h-20 pt-3 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform">
                  i'm savina 👋
                </span>
                <span className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-white md:-mb-4 md:h-16 animate-cursor will-change-transform"></span>
              </h1>
            </header>
            <p className="mt-4 text-3xl text-red-100 -pt-2">I am a college student and an aspiring Back-End Software Engineer.</p>
           
          </div>
        </div>
        </header>
      </section>
    );
}
export default Home