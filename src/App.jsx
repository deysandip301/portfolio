import Home from "./pages/Home.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Projects from "./componenets/home/Projects.jsx";
const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                {/*<Route path="/skills" element={<Skills />} />*/}
                {/*<Route path="/about" element={<About />} />*/}
                {/*<Route path="/contact" element={<Contact />} />*/}

            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App;