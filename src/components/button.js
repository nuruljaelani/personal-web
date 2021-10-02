import React, { useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const Button = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop
        if (scrolled > 300) {
            setVisible(true)
        }
        else if(scrolled <= 300) {
            setVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    window.addEventListener('scroll', toggleVisible)
    return (
        <div className={visible ? 'inline fixed bottom-0 my-2 md:my-4 lg:my-6 right-0 mx-2 md:mx-4 lg:mx-6':'hidden'}>
            <button className="bg-yellow-600 w-8 h-8 md:w-10 md:h-10 flex items-center p-2 rounded-full justify-center" onClick={scrollToTop}>
                <FaArrowUp className="text-white" />
            </button>
        </div>
    )
}

export default Button
