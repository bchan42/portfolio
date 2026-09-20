import React, { useEffect } from "react";
import "./Home.css";

export default function Home() {
  // Add a class to the body when this component mounts
  // and remove it when it unmounts
  useEffect(() => {
    document.body.classList.add('home-page');
    
    // Cleanup function to remove the class when component unmounts
    return () => {
      document.body.classList.remove('home-page');
    };
  }, []);

  return (
    <main className="home-container">
      <div className="home-content">
        <div className="home-text">
          <p className="home-greeting">
            hi, i'm bernette!!
          </p>
          <p>
            i'm an analyst @ sto and a recent graduate in data science and applied mathematics from cal poly, san luis obispo.
          </p>
          <p>
            i enjoy <a href="/projects" rel="noopener noreferrer" style={{ color: "#A20000", textDecoration: "none" }}> building data-related projects</a>, creating visualizations, and using machine learning to solve real-world problems!
            {/* exploring <a href="/about" rel="noopener noreferrer" style={{ color: "#A20000", textDecoration: "none" }}>research & resources</a>, and sharing insights online. */}
          </p>
          <p>
            take a look around and feel free to <a href="https://www.linkedin.com/in/bernette/" target="_blank" rel="noopener noreferrer" style={{ color: "#A20000", textDecoration: "none" }}>reach out</a>!
            {/* instead, maybe make a contact page? (safer?) */}
          </p>
        </div>
        <img 
          src="/Users/bernettechan/Desktop/headshots/IMG_2553.JPG"
          alt="Bernette Chan" 
          className="home-image"
        />
      </div>
    </main>
  );
} 
