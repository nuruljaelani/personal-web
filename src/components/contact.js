import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'

const Contact = () => {
    return (
        <>
            <div className="container mx-auto px-8 md:px-20 lg:px-28 my-6">
                <div className="flex bg-gray-200 rounded">
                    <div className="w-1/2 flex flex-col border-r-2 border-gray-400">
                        <div className="p-4 md:p-8 lg:p-12">
                            <p className="text-lg md:text-xl lg:text-3xl font-semibold tracking-widest">Contact</p>
                            <p className="text-gray-500 text-sm md:text-base">Beberapa cara menghubungi saya</p>
                            <div className="flex flex-col space-y-8 md:space-y-10 lg:space-y-12 mt-6 md:mt-10 lg:mt-16">
                                <div className="flex space-x-4 items-start">
                                    <StaticImage src="../../public/logo/google-gmail.svg" className="w-1/12" />
                                    <div className="w-11/12">
                                        <p className="font-semibold text-gray-600 text-sm md:text-base">Email</p>
                                        <p className="font-semibold text-base md:text-lg">parker@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex space-x-4 items-start">
                                    <StaticImage src="../../public/logo/github-icon.svg" className="w-1/12" />
                                    <div className="w-11/12">
                                        <p className="font-semibold text-gray-600 text-sm md:text-base">Github</p>
                                        <p className="font-semibold text-base md:text-lg">https://github.com/parkercannon</p>
                                    </div>
                                </div>
                                <div className="flex space-x-4 items-start">
                                    <StaticImage src="../../public/logo/linkedin-icon.svg" className="w-1/12" />
                                    <div className="w-11/12">
                                        <p className="font-semibold text-gray-600 text-sm md:text-base">Linkedin</p>
                                        <p className="font-semibold text-base md:text-lg">https://linkedin.com/in/parker-cannon</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 flex flex-col">
                        <div className="p-4 md:p-8 lg:p-12">
                            <form className="space-y-6">
                                <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-8 space-y-8 lg:space-y-0">
                                    <div className="w-full lg:w-1/2 flex flex-col">
                                        <label className="font-semibold">Name</label>
                                        <input type="text" className="bg-transparent border border-purple-400 focus:outline-none p-2" />
                                    </div>
                                    <div className="w-full lg:w-1/2 flex flex-col">
                                        <label className="font-semibold">Email</label>
                                        <input type="text" className="bg-transparent border border-purple-400 focus:outline-none p-2" />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <label className="font-semibold">Subject</label>
                                    <input type="text" className="bg-transparent border border-purple-400 focus:outline-none p-2" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="font-semibold">Message</label>
                                    <textarea className="bg-transparent border border-purple-400 focus:outline-none p-2" rows="6"></textarea>
                                </div>
                                <div className="flex justify-end">
                                    <button type="button" className="bg-gray-900 text-white py-2 px-8">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
