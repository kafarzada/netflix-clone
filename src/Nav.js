import React, { useEffect, useState } from 'react'
import "./Nav.css"

function Nav() {

    const [show, handleShow] = useState(false)

    const transitionNavbar = () => {
        if(window.scrollY > 100) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return() => window.removeEventListener("scroll", transitionNavbar)
    }, [])

    return (
        <div className={`nav ${show && ` nav__black`} `}> 
        <div className="nav__contents"> 
            <img
                className="nav__logo"
                src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" />
            
            <img
                className="nav__avatar"
                src="https://www.seekpng.com/png/detail/202-2024994_profile-icon-profile-logo-no-background.png"/>
        </div>
        </div>
    )
}

export default Nav