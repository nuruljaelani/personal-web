import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'

const Contact = ({contact}) => {
    return (
        <>
            <div className="container mx-auto px-8 md:px-20 lg:px-28 my-6" ref={contact}>
                <div className="flex flex-col md:flex-row bg-gray-200 rounded">
                    <div className="w-full md:w-1/2 flex flex-col border-r-0 md:border-r-2 border-gray-400">
                        <div className="p-4 md:p-8 lg:p-12">
                            <p className="text-lg md:text-xl lg:text-3xl font-semibold tracking-widest">Contact</p>
                            <p className="text-gray-500 text-sm md:text-base">Beberapa cara menghubungi saya</p>
                            <div className="flex flex-col space-y-4 md:space-y-6 lg:space-y-8 mt-2 md:mt-6 lg:mt-10">
                                <div className="flex space-x-4 items-start">
                                    <StaticImage src="../images/google-gmail.svg" className="w-1/12" alt="Email" />
                                    <div className="w-11/12">
                                        <p className="font-semibold text-gray-600 text-sm md:text-base">Email</p>
                                        <p className="font-semibold text-sm md:text-base">nuruljaelani96@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex space-x-4 items-start">
                                    <StaticImage src="../images/github-icon.svg" className="w-1/12" alt="Github" />
                                    <div className="w-11/12">
                                        <p className="font-semibold text-gray-600 text-sm md:text-base">Github</p>
                                        <a href='https://github.com/nuruljaelani' target="_blank" rel="noreferrer" className="text-blue-400 font-semibold text-sm md:text-base">https://github.com/nuruljaelani</a>
                                    </div>
                                </div>
                                <div className="flex space-x-4 items-start">
                                    <StaticImage src="../images/linkedin-icon.svg" className="w-1/12" alt="Linkedin" />
                                    <div className="w-11/12">
                                        <p className="font-semibold text-gray-600 text-sm md:text-base">Linkedin</p>
                                        <a href='https://linkedin.com/in/nurul-jaelani' target='_blank' rel="noreferrer" className="text-blue-400 font-semibold text-sm md:text-base">https://linkedin.com/in/nurul-jaelani</a>
                                    </div>
                                </div>
                                <div className="flex space-x-4 items-start">
                                    <StaticImage src="../images/Dribbble_logo_black-1.png" className="w-1/12" alt="Dribble" />
                                    <div className="w-11/12">
                                        <p className="font-semibold text-gray-600 text-sm md:text-base">Dribble</p>
                                        <a href='https://dribbble.com/nuruljaelani' target='_blank' rel="noreferrer" className="text-blue-400 font-semibold text-sm md:text-base">https://dribbble.com/nuruljaelani</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col">
                        <div className="p-4 md:p-8 lg:p-12">
                            <form className="space-y-6">
                                <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-8 space-y-8 lg:space-y-0">
                                    <div className="w-full lg:w-1/2 flex flex-col">
                                        <label htmlFor="name" className="font-semibold">Name</label>
                                        <input type="text" name="name" className="bg-transparent border border-purple-400 focus:outline-none p-2" />
                                    </div>
                                    <div className="w-full lg:w-1/2 flex flex-col">
                                        <label htmlFor="email" className="font-semibold">Email</label>
                                        <input type="text" className="bg-transparent border border-purple-400 focus:outline-none p-2" />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="subject" className="font-semibold">Subject</label>
                                    <input type="text" className="bg-transparent border border-purple-400 focus:outline-none p-2" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="message" className="font-semibold">Message</label>
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
