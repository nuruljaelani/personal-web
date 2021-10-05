import * as React from "react"

const Header = ({profile, skills, projects, contact, options}) => {
  return (
    <header>
      <div className="bg-hero h-[800px] md:h-[950px] lg:h-[1068px] transform -translate-y-96">
        <div className="container mx-auto px-4 md:px-10 lg:px-6 transform translate-y-96">
          <div className="flex items-center py-8">
            <div className="w-full md:w-3/12 uppercase text-sm md:text-base lg:text-lg text-white font-semibold">Nurul Jaelani</div>
            <div className="hidden sm:flex w-6/12 justify-center">
              <ul className="flex justify-center items-center my-auto space-x-4 md:space-x-6 lg:space-x-10">
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
          <div className="flex flex-col justify-center items-center mt-10 md:mt-24 lg:mt-32">
            <div className="text-center font-mono text-white mb-6">
              <p className="text-lg md:text-xl lg:text-2xl font-semibold my-6">Web Developer from West Java, Indonesia.</p>
            </div>
            <div className="mt-4 md:mt-8 lg:mt-12">
              <button className="rounded-3xl bg-blue-500 text-white font-semibold py-2 md:py-3 px-4 text-sm md:text-base lg:px-8 shadow" onClick={() => contact.current.scrollIntoView(options)}>Get In Touch</button>
            </div>
          </div>
        </div>
      </div>
    </header>
)
} 

export default Header
