import React from "react";
import Highlights from "../Component/Highlights";
import Bestseller from "../Component/Bestseller";
import Lab from "../Component/Lab";
import Healthcategory from "../Component/Healthcategory";
import Hero from "../Component/Hero";
import Labtestpackage from "../Component/Labtestpackage";
import Genericfinder from "../Component/Genericfinder";
const Homepage = () => {
    return (
        <div className="overflow-x-hidden w-full max-w-full mx-auto ">
            <Hero />
            <Labtestpackage />
            <Genericfinder />
            <Healthcategory />
            <Lab />
            <Bestseller />
            <Highlights />
        </div>
    );
};

export default Homepage;