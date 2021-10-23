import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const Skill = ({skills}) => {
    return (
        <div>
            <section className="bg-gray-100" ref={skills}>
                <div className="container max-w-6xl mx-auto">
                    <div className="flex flex-col py-6 md:py-20 lg:py-32">
                        <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-center tracking-widest">Skills</p>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 md:mt-12 lg:mt-20 px-4">
                            <div className="bg-white shadow-lg flex items-center p-2 md:p-4 lg:p-6">
                                <StaticImage src="../images/javascript.svg" width={60} height={60} className="rounded-full" alt="" />
                                <div className="flex flex-col ml-4 lg:ml-6">
                                    <p className="text-base md:text-lg lg:text-xl font-semibold">Javascript</p>
                                    <p className="text-gray-400 text-sm">Menengah</p>
                                </div>
                            </div>
                            <div className="bg-white shadow-lg flex items-center p-4 lg:p-6">
                                <StaticImage src="../images/nodejs-icon.svg" width={60} height={60} className="rounded-full" alt="" />
                                <div className="flex flex-col ml-4 lg:ml-6">
                                    <p className="text-base md:text-lg lg:text-xl font-semibold">Node Js</p>
                                    <p className="text-gray-400 text-sm">Basic</p>
                                </div>
                            </div>
                            <div className="bg-white shadow-lg flex items-center p-2 md:p-4 lg:p-6">
                                <StaticImage src="../images/react.svg" width={60} height={60} className="rounded-full" alt="" />
                                <div className="flex flex-col ml-4 lg:ml-6">
                                    <p className="text-base md:text-lg lg:text-xl font-semibold">React Js</p>
                                    <p className="text-gray-400 text-sm">Menengah</p>
                                </div>
                            </div>
                            <div className="bg-white shadow-lg flex items-center p-2 md:p-4 lg:p-6">
                                <StaticImage src="../images/php.svg" width={60} height={60} className="rounded-full" alt="" />
                                <div className="flex flex-col ml-4 lg:ml-6">
                                    <p className="text-base md:text-lg lg:text-xl font-semibold">Php</p>
                                    <p className="text-gray-400 text-sm">Menengah</p>
                                </div>
                            </div>
                            <div className="bg-white shadow-lg flex items-center p-2 md:p-4 lg:p-6">
                                <StaticImage src="../images/laravel.svg" width={60} height={60} className="rounded-full" alt="" />
                                <div className="flex flex-col ml-4 lg:ml-6">
                                    <p className="text-base md:text-lg lg:text-xl font-semibold">Laravel</p>
                                    <p className="text-gray-400 text-sm">Menengah</p>
                                </div>
                            </div>
                            <div className="bg-white shadow-lg flex items-center p-2 md:p-4 lg:p-6">
                                <StaticImage src="../images/figma.svg" width={60} height={60} className="rounded-full" alt="" />
                                <div className="flex flex-col ml-4 lg:ml-6">
                                    <p className="text-base md:text-lg lg:text-xl font-semibold">Figma</p>
                                    <p className="text-gray-400 text-sm">Basic</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skill
