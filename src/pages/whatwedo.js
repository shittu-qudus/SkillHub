import React from 'react';
import { useState, useEffect } from 'react';

const WhatweDo = () => {
  const features = [
    {
      id: 1,
      image: "./userProfile/helpimages/handshake.png",
      title: "BUILDING TRUST",
      description: "Empowering users to share their experiences and recommendations, fostering a trusted network of skilled professionals."
    },
    {
      id: 2,
      image: "./userProfile/helpimages/girl.png",
      title: "COMPREHENSIVE PROFILES",
      description: "Giving skilled workers the spotlight they deserve with detailed profiles that highlight their expertise."
    },
    {
      id: 3,
      image: "./userProfile/helpimages/boyG.png",
      title: "HIRING MADE EASY",
      description: "Hire professionals directly through the platform using our integrated scheduling and payment system —no external calls or transactions needed."
    },
    {
      id: 4,
      image: "./userProfile/helpimages/laptop.png",
      title: "SKILL VALIDATION & IMPROVEMENT",
      description: "We're bridging Nigeria's skills gap by partnering with institutions to offer certification programs. Skilled workers can validate their expertise, boost credibility, and unlock better opportunities on the platform."
    }
  ];


  const orderedFeatures = [
    features[0], // 1st card
    features[1], // 2nd card
    features[2], // 3rd card
  
  ];

  return (
    <div className="features-page">
      <div className="features-grid">
        {orderedFeatures.map((feature, index) => (
          <div 
            key={feature.id}
            className="help-container"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="help-img-wrapper">
              <img 
                src={feature.image} 
                alt={feature.title} 
                className="help-img"
              />
            </div>
            <h2>{feature.title}</h2>
            <span className="help-text">{feature.description}</span>
          </div>
        ))}
        
        {/* Fourth card positioned separately */}
        <div 
          key={features[3].id}
          className="help-container fourth-card"
          style={{ animationDelay: '0.6s' }}
        >
          <div className="help-img-wrapper">
            <img 
              src={features[3].image} 
              alt={features[3].title} 
              className="help-img"
            />
          </div>
          <h2>{features[3].title}</h2>
          <span className="help-text">{features[3].description}</span>
        </div>
      </div>
      
      <style jsx>{`
        .features-page {
          background-color: #f5f7fa;
          padding: 2rem;
          width: 100%;
          max-width: 100%;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-areas: 
            "card1 card2 card3"
            ". card4 .";
          gap: 2rem;
          margin: 0 auto;
          width: 100%;
        }
        
        .help-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          background-color: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          animation: fadeIn 0.8s ease forwards;
          opacity: 0;
        }
        
        .help-container:nth-child(1) {
          grid-area: card1;
        }
        
        .help-container:nth-child(2) {
          grid-area: card2;
        }
        
        .help-container:nth-child(3) {
          grid-area: card3;
        }
        
        .fourth-card {
          grid-area: card4;
        }
        
        .help-container:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }
        
        .help-img-wrapper {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          overflow: hidden;
          margin-bottom: 1.5rem;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          animation: pulse 2s infinite ease-in-out;
        }
        
        .help-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .help-container:hover .help-img {
          transform: scale(1.1);
        }
        
        h2 {
          margin-bottom: 1rem;
          color: #2c3e50;
          font-size: 1.5rem;
        }
        
        .help-text {
          color: #7f8c8d;
          line-height: 1.6;
          font-size: 1rem;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(52, 152, 219, 0.4);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(52, 152, 219, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(52, 152, 219, 0);
          }
        }
        
        @media (max-width: 1200px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-areas: 
              "card1 card2"
              "card3 card4";
          }
        }
        
        @media (max-width: 768px) {
          .features-grid {
            grid-template-columns: 1fr;
            grid-template-areas: 
              "card1"
              "card2"
              "card4"
              "card3";
          }
          
          .help-container {
            padding: 1.5rem;
          }
          
          .help-img-wrapper {
            width: 120px;
            height: 120px;
          }
        }
      `}</style>
    </div>
  );
};

export default WhatweDo;