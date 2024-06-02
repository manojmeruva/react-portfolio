import './Navbar.scss';
import { motion } from 'framer-motion';
import logo from '../../assets/light-logo.png';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {
    return (
        <div className="navbar">
            <Sidebar />
            <div className="wrapper">
                <motion.img src={logo} alt="logo" width={70} height={70} initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}} />
                <div className="social">
                    <a href="#"><img src={facebook} alt="" /></a>
                    <a href="#"><img src={instagram} alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar