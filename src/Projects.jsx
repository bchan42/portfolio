import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

export default function Projects() {
  const projects = [
    {
      title: "policy extractor - wildfire ai web app",
      description: "web app using gemini pro and rag to extract and analyze wildfire-related city policies",
      path: "/projects/policy-extractor",
      thumbnail: "https://images.unsplash.com/photo-1534269100079-6fd84ccad357?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    },
    {
      title: "fire policy ml pipeline",
      description: "machine learning pipeline for categorizing and mapping fire-related municipal policies for resilience assessment",
      path: "/projects/ml-pipeline",
      thumbnail: "https://images.unsplash.com/photo-1651212426136-5e9f71a88968?q=80&w=1627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    },
    {
      title: "liquor sales dataset",
      description: "explored liquor sales trends and created data analysis reports for different stakeholders",
      path: "/projects/liquor",
      thumbnail: "https://images.unsplash.com/photo-1544782321-8fab42cfd62e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      // (analyzed retail liquor sales data and created stakeholder-focused insights for a business client and public health advocacy group through data visualization and statistical analysis)
    },
    {
      title: "home credit loan prediction",
      description: "machine learning models for predicting loan default risk using financial data",
      path: "/projects/liquor",
      thumbnail: "https://images.unsplash.com/photo-1746597312953-9b58a1ebc991?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      // (built ml models to predict loan default risk using financial data, including feature engineering, model evaluation, and classification analysis)
    },
    {
      title: "food distribution analysis",
      description: "analyzed food distribution patterns across college towns with data visualization and reports",
      path: "/projects/food-distribution",
      thumbnail: "https://images.unsplash.com/photo-1657799559418-a7125bc12e06?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      // (analyzed food accessibility and distribution trends across college towns through exploratory data analysis and a report
    },
    {
      title: "oSTEM Hackathon social app",
      description: "award-winning location-based web app for LGBTQ+ community connection",
      path: "/projects/ostem",
      thumbnail: "https://images.unsplash.com/vector-1739803878611-6bedff080f5b?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    }
    // {
    //   title: "cardiac agent-based model (abm)",
    //   description: "simulated cardiac action potentials with an agent-based model, analyzed for robustness and accuracy",
    //   path: "/projects/abm",
    //   thumbnail: "https://images.unsplash.com/photo-1460672985063-6764ac8b9c74?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    // },
    // {
    //   title: "reading habits dashboard",
    //   description: "interactive dashboard exploring personal reading habits and trends",
    //   path: "/projects/reading-dashboard",
    //   thumbnail: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //   // (personal analytics dashboard to visualize reading patterns, trends, and long-term habits through interactive data visualization
    // },
    // {
    //   title: "payment request automation",
    //   description: "automated payment request workflows for WISH treasurer role",
    //   path: "/projects/payment-automation",
    //   thumbnail: "https://images.unsplash.com/photo-1763872867598-b1b5f769d7e3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    //   // (script that automates parts of the payment request workflow for my treasurer role to streamline reimbursement and reduce manual administrative work)
    // },
    // {
    //   title: "r/anarchychess community analysis",
    //   description: "analyzed subreddit activity and community trends using Reddit data",
    //   path: "/projects/anarchychess",
    //   thumbnail: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //   // (report of subreddit activity and community behavior patterns using data collection, exploratory analysis, visualization, and statistical insights
    // },
    // {
    //   title: "r/place pixel analysis",
    //   description: "analyzed collaborative pixel placement patterns from r/place data",
    //   path: "/projects/rplace",
    //   thumbnail: "https://images.unsplash.com/photo-1636215096587-21982fbf5843?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //   // (report of large-scale collaborative artwork data to identify pixel trends, community contributions, and visualization patterns)
    // }
  ];

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1>projects</h1>
        <p className="projects-subtitle">a collection of my work and research</p>
      </div>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Link to={project.path} key={index} className="project-card">
            <img src={project.thumbnail} alt={project.title} className="project-thumbnail" />
            <div className="project-divider"></div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
} 
