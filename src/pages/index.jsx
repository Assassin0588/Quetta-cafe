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
            <Route path="*" element={<main className="flex justify-center items-center h-screen"><h1 className="text-4xl font-bold text-orange-400">404 Page Not Found</h1></main>}  />
        </Routes>
        </>
    )
}

export default Frontend