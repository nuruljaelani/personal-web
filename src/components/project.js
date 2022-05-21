import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const Project = ({projects}) => {
    return (
        <>
            <div className="container mx-auto max-w-6xl py-6 md:py-12 lg:py-20" ref={projects}>
                <p className=" text-xl md:text-2xl lg:text-3xl font-semibold text-center tracking-widest">Projects</p>
                <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:space-x-10 lg:space-x-16 mt-10 md:mt-12 lg:mt-20 px-4">
                    <div className="w-full md:w-1/2 space-y-8 md:space-y-12">
                        <div className="felx flex-col">
                            <StaticImage src="../images/tokopaedi.png" alt="Project Image" className="w-full rounded" />
                            <div className="text-center mt-4">
                                <a href='https://tokopaedi.vercel.app' target="_blank" rel="noreferrer" className="text-lg md:text-xl font-medium">Tokopaedi</a>
                                <p className="text-sm md:text-base text-gray-400">Cloning Tokopedia using Nextjs</p>
                            </div>
                        </div>
                        <div className="felx flex-col">
                            <StaticImage src="../images/blog.png" alt="Project Image" className="w-full rounded" />
                            <div className="text-center mt-4">
                                <a href="https://miblog.vercel.app" target="_blank" rel="noreferrer" className="text-lg md:text-xl font-medium">My Blog</a>
                                <p className="text-sm md:text-base text-gray-400">Blog and Tutorial about Programming</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 space-y-8 md:space-y-12">
                        <div className="felx flex-col">
                            <StaticImage src="../images/info-covid.png" alt="Project Image" className="w-full rounded" />
                            <div className="text-center mt-4">
                                <a href='https://pukulcovid.vercel.app' target="_blank" rel="noreferrer" className="text-lg md:text-xl font-medium">Info Covid</a>
                                <p className="text-sm md:text-base text-gray-400">Covid 19 Portal</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project
