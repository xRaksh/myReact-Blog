import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <NavLink to="/"> <img src="./images/logo.png" alt="Logo" className='Logo' /> </NavLink>
                </div>
                <div className="pages">
                    <NavLink to="/"> Home </NavLink>
                    <NavLink to="/about"> About Us </NavLink>
                    <NavLink to="/contact"> Contact Us </NavLink>
                </div>
                <div className="social">
                    <a href="https://www.instagram.com/"> <i class="bi bi-instagram"></i> </a>
                    <a href="https://www.facebook.com/"> <i class="bi bi-facebook"></i> </a>
                    <a href="https://www.twitter.com/"> <i class="bi bi-twitter"></i> </a>
                </div>
            </div>
        </>
    )
}

export default Nav;