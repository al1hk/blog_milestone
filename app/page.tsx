import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Blog from "./components/blog/Blog";


const page = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <Blog/>
            <About/>
            <Contact/>
            <Footer/>
            
        </div>
    );
}
export default page;