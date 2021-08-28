import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <div className="bg-hero h-[700px]">
      <div className="container mx-auto">
        <div className="flex items-center">
          <div className="w-3/12 uppercase text-xl text-white font-semibold">Personal Web</div>
          <div className="w-6/12">
            <ul className="flex justify-center items-center my-auto space-x-10">
              <li className="text-white font-semibold text-lg opacity-70"><a>Profile</a></li>
              <li className="text-white font-semibold text-lg opacity-70"><a>Skills</a></li>
              <li className="text-white font-semibold text-lg opacity-70"><a>Projects</a></li>
              <li className="text-white font-semibold text-lg opacity-70"><a>Contact</a></li>
            </ul>
          </div>
          <div className="w-3/12 flex justify-end">
            <button className="text-white border border-white rounded-3xl py-3 px-4">Contact</button>
          </div>
        </div>
        <div className="text-center font-mono">
          <p className="text-3xl font-semibold my-6">Saya seorang front-end web developer, back-end web developer</p>
          <p className="text-lg">Memulai programing sejak tahun 2019</p>
        </div>
        <button className="rounded-3xl border border-white py-3 px-4">Pelajari</button>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Home`,
}

export default Header
