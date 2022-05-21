import * as React from "react"

const Header = ({profile, skills, projects, contact, options}) => {
  return (
    <header className="relative">
      <div className="absolute inset-0 bg-hero h-[300px] md:h-[710px] lg:h-[712px] transform -translate-y-10 md:-translate-y-80 lg:-translate-y-64"></div>
        <div className="container max-w-8xl mx-auto transform px-4">
          <div className="flex items-center py-8">
            <div className="w-full uppercase text-sm md:text-base lg:text-lg text-white font-semibold">Nurul Jaelani</div>
            <div className="hidden sm:flex items-end justify-end">
              <ul className="flex justify-end items-center my-auto space-x-4 md:space-x-6 lg:space-x-10">
                <li className="text-white font-semibold text-xs md:text-base lg:text-lg opacity-90">
                  <button type="button" onClick={() => profile.current.scrollIntoView(options)}>Profile</button>
                </li>
                <li className="text-white font-semibold text-xs md:text-base lg:text-lg opacity-90">
                  <button type="button" onClick={() => skills.current.scrollIntoView(options)}>Skills</button>
                </li>
                <li className="text-white font-semibold text-xs md:text-base lg:text-lg opacity-90">
                  <button type="button" onClick={() => projects.current.scrollIntoView(options)}>Projects</button>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-0 md:mt-24 lg:mt-32">
            <div className="text-center font-mono text-white mb-0">
              <p className="text-lg md:text-xl lg:text-2xl font-semibold my-6">Web Developer from West Java, Indonesia.</p>
            </div>
            {/* <div className="mt-4 md:mt-8 lg:mt-12">
              <button className="rounded-3xl bg-blue-500 text-white font-semibold py-2 md:py-3 px-4 text-sm md:text-base lg:px-8 shadow" onClick={() => contact.current.scrollIntoView(options)}>Get In Touch</button>
            </div> */}
          </div>
        </div>
    </header>
)
} 

export default Header
