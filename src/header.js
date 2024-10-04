import { useState } from "react";
import "./home.css"
import { useNavigate } from "react-router-dom"



export function Header() {
    const navigate = useNavigate();
   
    return (
        

        <div>
            <div class="mainfirst">
                <div>
                    <h1>Travello</h1>
                </div>
                <div class="mainhome">
                    <button className="home" onClick={() => navigate("/")}>Home</button>
                    <button className="home" onClick={() => navigate("/about")}>About Us</button>
                    <button className="home" onClick={() => navigate("/services")}>Services</button>
                    <button className="home" onClick={() => navigate("/news")}>News</button>
                    <button className="home" onClick={() => navigate("/contact")}>Contact</button>
                </div>
                <div>
                    <h3>Call us: 00-56 445 678 33</h3>
                </div>
            </div>
            <nav id="navmain" class="navbar navbar-expand-md bg-dark navbar-dark">
                <a class="navbar-brand" href="/">Travello</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/about">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/services">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/news">News</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
              </div>
    )
}