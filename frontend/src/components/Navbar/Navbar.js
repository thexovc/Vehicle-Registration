import React, { useState } from "react"
import "./Navbar.scss"
import { AiOutlineMenu } from "react-icons/ai"
import { GiCancel } from 'react-icons/gi'

import logo from "../../assets/logo.jpg"

const Navbar = () => {
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div >
            <div className="Navbar">
                <div className="left__nav">

                    <img className="h-full w-3/12 rounded-2xl p-4" src={logo} />
                    <p className="navbar__name w-9/12">Vehicle Registration Portal</p>
                </div>
                <div className="right__nav">
                    <AiOutlineMenu onClick={() => setIsOpen(!isOpen)} className="text-white navbar__menubar md:hidden" />

                    <a className="navbar__links nav-h" >
                        More
                    </a>

                    <a className="navbar__links nav-h" >
                        Contact Us
                    </a>

                </div>
            </div>

            {isOpen && (

                <div className="sidebar-con md:hidden" >

                    <nav class="sidebar" >
                        <div className="flex justify-end">
                            <GiCancel onClick={() => setIsOpen(false)} className="text-black text-3xl pt-2 mx-2" />
                        </div>

                        <div className="w-full flex justify-center">
                            <img className="w-6/12" src={logo} />
                        </div>

                        <ul className="flex flex-col gap-5 mt-10">
                            <a className="flex px-4 text-xl justify-between text-white font-semibold" onClick={handleClick} to="/">
                                More

                            </a>
                            <a className="flex px-4 text-xl justify-between text-white font-semibold" onClick={handleClick} to="/login">
                                Contact

                            </a>


                        </ul>
                    </nav>
                    <div className="side-overlay" onClick={() => setIsOpen(false)}></div>
                </div>
            )}

        </div>
    )
}

export default Navbar
