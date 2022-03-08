import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const Profile = ({profile}) => {
    return (
        <div className="container mx-auto max-w-3xl px-4 mb-10 lg:mb-24 py-4 md:py-20 lg:py-32" ref={profile}>
            <div className="flex flex-col mb-8 md:mb-12 lg:mb-20">
                <p className=" text-xl md:text-2xl lg:text-3xl font-semibold text-center tracking-widest">Profile</p>
                <p className="text-sm md:text-base text-gray-400 text-center">Mengenal saya secara singkat</p>
            </div>
            <div className="flex flex-col items-center sm:items-start w-full sm:flex-row space-y-4 sm:space-y-0 space-x-0 md:space-x-8">
                <div className="w-full sm:w-1/2 md:w-2/4">
                    <StaticImage src="../images/20220304_090903.jpg" alt="Foto Profile" />
                </div>
                <div className="w-full sm:w-1/2 md:w-2/4">
                    <p className="text-sm md:text-base lg:text-lg font-medium lead text-justify">
                    Seorang fullstack web developer dengan pengalaman 1+ tahun. Terbiasa bekerja dengan tim maupun individu serta dalam pemecahan masalah. Saya sangat senang dan antusias ketika mendapatkan pengetahuan dan wawasan baru, dan selalu belajar terus untuk menjadi lebih baik lagi. Teknologi yang saya gunakan
                    yaitu HTML, CSS, Javascript, PHP, Laravel, Node Js, React Js, dan Vue Js.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Profile
