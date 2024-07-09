import React from 'react';
import growth_img from '../images/ecommerce-growth.jpeg';
import use_case from '../images/use_case.jpg';
import highlevel from '../images/highlevel.webp';
const MarketAnalysis = () => (
  <section id="MarketAnalysis" data-aos="fade-up-right">
    <h2>Market Analysis</h2>
    {/* <p>The e-commerce industry in India has grown significantly. New companies have joined, and the B2C market is expanding rapidly. Transitioning from in-store to online shopping has been slow. E-commerce includes not only buying and selling but also various internal business processes. E-business covers different activities using electronic methods.[2]</p>
    <br></br> */}
    <p>The e-commerce industry is growing fast, with global sales projected to reach ₹400 trillion by 2025. Key trends include mobile commerce, social commerce, and AI. Leading platforms like Amazon and Alibaba innovate continuously. However, profitability challenges remain due to high customer acquisition costs and significant investments in logistics and technology upgrades.[3]</p>
    <br></br>
    <p>To overcome challenges, e-commerce companies optimize supply chains and use data analytics for better decisions. Amazon's logistics investments enhance customer satisfaction. Financial performance shows a focus on diversification and cost management. Future innovations in sustainability and omnichannel retailing are promising, but companies must address data privacy, cybersecurity, and regulatory issues.[4]</p>
    <br></br>
    <p>India's e-commerce market is booming, expected to reach ₹15 trillion by 2025. Key drivers include a large young population, increased internet and smartphone use, and supportive government policies. Major players like Flipkart and Amazon India invest in technology and logistics. Digital payments and regional language support expand rural and semi-urban reach.[2]</p>
    <br></br>
    <p>Here is the gragh showing E-commerce growth rate in the US.[5] </p>
    <img src={growth_img} alt="E-commerce growth rate in the US" width="100%" height="auto"></img>
    <p>Source : &nbsp;  <a href='https://www.marketplacepulse.com/stats/us-e-commerce-growth-rate'>https://www.marketplacepulse.com/stats/us-e-commerce-growth-rate</a></p>
    {/* <a href="#top">Back to Top</a> */} 
      <br></br>
    <h2>Use Case Diagram of E-commerce app</h2>
    <div className='center'>
    <img src={use_case} alt='use case diagram of e-commerce app' width="50%" height="auto"></img>
    </div>
      <br></br>
    <h2>High level architecture of E-commerce app</h2>
    <div className='center'>
    <img src={highlevel} alt='high level architecture of e-commerce app' width="80%" height="auto"></img>
    
    </div>
    <p>Source : &nbsp; <a href='https://mlsdev.medium.com/how-to-build-an-ecommerce-website-from-scratch-start-selling-products-worldwide-a55256673878'>https://mlsdev.medium.com/how-to-build-an-ecommerce-website-from-scratch-start-selling-products-worldwide-a55256673878</a></p>
    

  </section>
  
  
);

export default MarketAnalysis;