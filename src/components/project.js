import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const Project = () => {
    return (
        <>
            <div className="container mx-auto px-8 md:px-20 lg:px-28 py-16 md:py-20 lg:py-32">
                <p className=" text-xl md:text-2xl lg:text-3xl font-semibold text-center tracking-widest">Projects</p>
                <div className="flex flex-col md:flex-row md:space-x-10 lg:space-x-16 mt-10 md:mt-12 lg:mt-20">
                    <div className="w-full md:w-1/2 space-y-8 md:space-y-12">
                        <div className="felx flex-col">
                            <StaticImage src="../images/image5.png" alt="Project Image" className="w-full rounded" />
                            <div className="text-center mt-4">
                                <p className="text-lg md:text-xl font-semibold">Hasten</p>
                                <p className="text-sm md:text-base text-gray-400">Exploring Landing Page</p>
                            </div>
                        </div>
                        <div className="felx flex-col">
                            <StaticImage src="../images/image6.png" alt="Project Image" className="w-full rounded" />
                            <div className="text-center mt-4">
                                <p className="text-lg md:text-xl font-semibold">Resources</p>
                                <p className="text-sm md:text-base text-gray-400">Exploring Resources Page</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 space-y-8 md:space-y-12">
                        <div className="felx flex-col">
                            <StaticImage src="../images/image7.png" alt="Project Image" className="w-full rounded" />
                            <div className="text-center mt-4">
                                <p className="text-lg md:text-xl font-semibold">Resources</p>
                                <p className="text-sm md:text-base text-gray-400">Exploring Resources Page</p>
                            </div>
                        </div>
                        <div className="felx flex-col">
                            <StaticImage src="../images/image8.png" alt="Project Image" className="w-full rounded" />
                            <div className="text-center mt-4">
                                <p className="text-lg md:text-xl font-semibold">Hasten</p>
                                <p className="text-sm md:text-base text-gray-400">Exploring Landing Page</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project
