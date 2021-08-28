import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const Skill = () => {
    return (
        <div>
            <section className="bg-gray-100">
                <div className="container mx-auto px-8 md:px-20 lg:px-28">
                    <div className="flex flex-col py-16 md:py-20 lg:py-32">
                    <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-center tracking-widest">Skills</p>
                    <div className="grid md:grid-cols-3 gap-8 mt-10 md:mt-12 lg:mt-20">
                        <div className="bg-white shadow-lg flex items-center p-2 md:p-4 lg:p-6">
                        <StaticImage src="../../public/logo/javascript.svg" width={60} height={60} className="rounded-full" />
                        <div className="flex flex-col ml-4 lg:ml-6">
                            <p className="text-base md:text-lg lg:text-xl font-semibold">Javascript</p>
                            <p className="text-gray-400 text-sm">Menengah</p>
                        </div>
                        </div>
                        <div className="bg-white shadow-lg flex items-center p-4 lg:p-6">
                        <StaticImage src="../../public/logo/nodejs-icon.svg" width={60} height={60} className="rounded-full" />
                        <div className="flex flex-col ml-4 lg:ml-6">
                            <p className="text-base md:text-lg lg:text-xl font-semibold">Node Js</p>
                            <p className="text-gray-400 text-sm">Menengah</p>
                        </div>
                        </div>
                        <div className="bg-white shadow-lg flex items-center p-2 md:p-4 lg:p-6">
                        <StaticImage src="../../public/logo/react.svg" width={60} height={60} className="rounded-full" />
                        <div className="flex flex-col ml-4 lg:ml-6">
                            <p className="text-base md:text-lg lg:text-xl font-semibold">React Js</p>
                            <p className="text-gray-400 text-sm">Menengah</p>
                        </div>
                        </div>
                        <div className="bg-white shadow-lg flex items-center p-2 md:p-4 lg:p-6">
                        <StaticImage src="../../public/logo/php.svg" width={60} height={60} className="rounded-full" />
                        <div className="flex flex-col ml-4 lg:ml-6">
                            <p className="text-base md:text-lg lg:text-xl font-semibold">Php</p>
                            <p className="text-gray-400 text-sm">Menengah</p>
                        </div>
                        </div>
                        <div className="bg-white shadow-lg flex items-center p-2 md:p-4 lg:p-6">
                        <StaticImage src="../../public/logo/laravel.svg" width={60} height={60} className="rounded-full" />
                        <div className="flex flex-col ml-4 lg:ml-6">
                            <p className="text-base md:text-lg lg:text-xl font-semibold">Laravel</p>
                            <p className="text-gray-400 text-sm">Menengah</p>
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
