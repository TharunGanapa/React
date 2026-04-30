import { Link, Route, Routes } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";
import Skills from "./Skills";

export default function Navbar () {
    return (
        <>

            <nav>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/project">Project</Link>
                <Link to="/skills">Skills</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/home" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="/project" element={<Project />}/>
                <Route path="/skills" element={<Skills />}/>

            </Routes>
        </>
    )
}