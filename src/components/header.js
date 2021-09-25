import * as React from "react"

const Header = () => (
  <header>
    <div className="bg-hero h-[800px] md:h-[950px] lg:h-[1068px] transform -translate-y-96">
      <div className="container mx-auto px-4 md:px-10 lg:px-6 transform translate-y-96">
        <div className="flex items-center py-8">
          <div className="w-full md:w-3/12 uppercase text-sm md:text-base lg:text-lg text-white font-semibold">Parker Cannon</div>
          <div className="hidden md:flex w-6/12 justify-center">
            <ul className="flex justify-center items-center my-auto space-x-4 md:space-x-6 lg:space-x-10">
              <li className="text-white font-semibold text-xs md:text-base lg:text-lg opacity-70">Profile</li>
              <li className="text-white font-semibold text-xs md:text-base lg:text-lg opacity-70">Skills</li>
              <li className="text-white font-semibold text-xs md:text-base lg:text-lg opacity-70">Projects</li>
              <li className="text-white font-semibold text-xs md:text-base lg:text-lg opacity-70">Contact</li>
            </ul>
          </div>
          <div className="w-3/12 hidden md:flex justify-end">
            <button className="text-white border-2 border-blue-500 text-sm md:text-base font-semibold rounded-3xl py-3 px-6">Contact</button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-10 md:mt-24 lg:mt-32">
          <div className="text-center font-mono text-white mb-6">
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold my-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quae.</p>
            <p className="text-sm md:text-base lg:text-lg opacity-80">Memulai programing sejak tahun 2019</p>
          </div>
          <div className="mt-4 md:mt-8 lg:mt-12">
            <button className="rounded-3xl bg-blue-500 text-white font-semibold py-2 md:py-3 px-4 text-sm md:text-base lg:px-8">Pelajari</button>
          </div>
        </div>
      </div>
    </div>
  </header>
)

export default Header
