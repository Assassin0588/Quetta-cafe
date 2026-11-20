import Home from "./Frontend/Home/Home";
import About from "./Frontend/About/About";
import Contact from "./Frontend/Contact/Contact";
import {Routes , Route} from "react-router-dom";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Forget from "./Auth/Forget";
const Frontend = () => {
    return (
        <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} /> 
            <Route path="/register" element={<Register />}  />
            <Route path="/forget" element={<Forget />}  />
        </Routes>
        </>
    )
}

export default Frontend