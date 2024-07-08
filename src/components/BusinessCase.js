import React from 'react';

const BusinessCase = ({ 
  title, 
  useCase, 
  challenges, 
  marketBenefits, 
  algorithm, 
  description, 
  designTechniques, 
  performanceAnalysis, 
  codeLink 
}) => (
  <div className="business-case" data-aos="fade-up">
    <h3>{title}</h3>
    <p><strong>Use Case:</strong> {useCase}</p>
    <p><strong>Challenges:</strong> {challenges}</p>
    <p><strong>Market Benefits:</strong> {marketBenefits}</p>
    <p><strong>Algorithm:</strong> {algorithm}</p>
    <p><strong>Description:</strong> {description}</p>
    <p><strong>Design Techniques:</strong> {designTechniques}</p>
    <p><strong>Performance Analysis:</strong></p>
    <ul>
      <li><strong>Time Complexity:</strong> {performanceAnalysis.timeComplexity}</li>
      <li><strong>Space Complexity:</strong> {performanceAnalysis.spaceComplexity}</li>
    </ul>
    <p><a href={codeLink} target="_blank" rel="noopener noreferrer">Find the sample code here</a></p>
  </div>
);


export default BusinessCase;
