import React from "react";
import "./FoodDistrib.css";

function FoodDistrib() {
  return (
    <div className="food-distrib-page">

      <h1>Food Distribution Analysis</h1>

      <h2>Overview</h2>
      <p>
        I started this project since as a student of Cal Poly SLO, I had noticed that the food scene in SLO 
        is pretty limited compared to other college towns I have visited.
      </p>
      <p>
        This project investigates how food accessibility and restaurant distribution 
        differ across college towns, using San Luis Obispo as a case study. 
        Using OpenStreetMap data, I analyzed the density, clustering patterns, 
        and geographic distribution of food-related businesses across different regions.
      </p>
      <p>
        The goal was to understand how factors such as city size, land use, 
        and geography influence food availability and accessibility for students and residents.
      </p>

      <h2>Dataset & Methodology</h2>
      <p>
        I used OpenStreetMap data to analyze food-related businesses and geographic features across multiple college towns.
      </p>
      <p>This detailed geospatial dataset includes:</p>
      <ul>
        <li>food-business locations</li>
        <li>addresses</li>
        <li>coordinates</li>
        <li>amenities</li>
        <li>land-use type</li>
      </ul>
      <p>
        I focused specifically on food-related businesses classified as amenities. The OSM dataset is in PBF (Protocol Buffers) format, so I planned to extract the relevant data with command-line tools such as Osmium, convert it to Parquet, and explore it with Polars and Folium for map visualizations.
      </p>

      <h2>Report</h2>
      <div className="food-distrib-content">
        <iframe
          src="/food-distribution.pdf"
          title="Food Distribution Analysis Report"
        />
      </div>

      <a 
        href="/food-distribution.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Full Report
      </a>

    </div>
  );
}

export default FoodDistrib;
