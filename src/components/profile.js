import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const Profile = ({profile}) => {
    return (
        <div className="container mx-auto px-8 md:px-20 lg:px-28 mb-16 lg:mb-24 py-16 md:py-20 lg:py-32" ref={profile}>
            <div className="flex flex-col mb-8 md:mb-12 lg:mb-20">
                <p className=" text-xl md:text-2xl lg:text-3xl font-semibold text-center tracking-widest">Profile</p>
                <p className="text-sm md:text-base text-gray-400 text-center">Mengenal saya secara singkat</p>
            </div>
            <div className="flex flex-col items-center sm:items-start w-full sm:flex-row space-y-4 sm:space-y-0 space-x-4 md:space-x-8 lg:space-x-16">
                <div className="w-full sm:w-1/2 md:w-1/4">
                    <StaticImage src="../images/pc.jpg" alt="Foto Profile" />
                </div>
                <div className="w-full sm:w-1/2 md:w-3/4">
                    <p className="text-sm md:text-base font-medium lead text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et atque aliquam omnis voluptatem quae? Eos, facere. Exercitationem, facilis? Voluptatibus sapiente doloribus tempore ex labore eaque eveniet, saepe nobis perferendis maiores, molestias vero blanditiis. Velit, minus nihil quibusdam laboriosam facere cumque, nesciunt vel distinctio necessitatibus, iure itaque! Modi cum rerum fuga dolor expedita hic, cupiditate ratione deleniti consequatur incidunt praesentium minus, odio porro magnam dolore, veritatis nisi? Nihil mollitia nisi magni error temporibus, obcaecati vero maxime, quis velit totam similique, sequi quisquam enim deleniti doloribus sint minima voluptates laboriosam libero explicabo recusandae asperiores id quibusdam. Consequuntur inventore aliquam magnam dolorum adipisci?
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Profile
