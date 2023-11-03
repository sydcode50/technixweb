import React from 'react';
import '../styles/MainSection.scss';
import Section from './Section.js'
import TestimoniesSection from './TestimoniesSection';
import Partners from './Partners';
import image1 from '../assets/images/image1.jpg';
import Amazon1 from '../assets/images/Amazon1.png';
import Googlelogo1 from '../assets/images/Googlelogo1.svg';
import Samsung_logo_blue1 from '../assets/images/Samsung_logo_blue1.svg';
import Tesla1 from '../assets/images/Tesla1.svg';
import youtube1 from '../assets/images/youtube1.svg';
import FAQ from './Faq.js';
import LightBall from './LightBall';

 const partnerLogos = [
    Amazon1,
    Googlelogo1,
    Samsung_logo_blue1,
   Tesla1,
    youtube1
  ];

const MainSection = () => {
  const faqData = [
      {
        question: "Is OUTSOURCING necessary for growing our business?",
        answer: "Outsourcing can aid in business growth by providing flexibility, maintaining company focus, reducing labor costs, and improving team efficiency. However, it also has challenges like communication issues and quality control. The decision should be based on your business's specific needs.",
      },
      {
        question: "Do we need any OUTSOURCING software for optimizing search engine?",
        answer: "Yes, outsourcing software can be beneficial for search engine optimization (SEO). These tools can help with various aspects of SEO such as on-page optimization (metadata, image optimization, keyword density, blogs) and off-page optimization (social media, guest posts, link-building, link outreach)². They can also assist with competitive analysis, keyword research, content strategy, backlink building, PPC advertising, and more². However, it's important to remember that while these tools can provide valuable assistance, a successful SEO strategy also requires expertise and ongoing effort. So, whether you need outsourcing software for SEO depends on your specific needs, resources, and capabilities.",
      },
      {
        question: "What does OUTSOURCING stand for?",
        answer: "Outsourcing is the business practice of hiring a party outside a company to perform services or create goods that were traditionally performed in-house by the company's own employees and staff¹. It is a strategy usually undertaken by companies as a cost-cutting measure¹. It can affect a wide range of jobs, ranging from customer support to manufacturing to the back office¹. Companies use outsourcing to cut labor costs, including salaries for their personnel, overhead, equipment, and technology¹. Outsourcing is also used by companies to dial down and focus on the core aspects of the business, spinning off the less critical operations to outside organizations.",
      },
      {
        question: "How long does it take to see results from OUTSOURCING?",
        answer: "The time it takes to see results from outsourcing can vary greatly depending on the nature of the services being outsourced, the quality of the outsourcing provider, and how well the process is managed⁴. It's important to have realistic expectations and understand that benefits may not be immediate¹. Regular review of the progress of work is necessary¹. If after a few months you still aren’t seeing the results you want, it might be time to reassess the situation³. Remember, successful outsourcing is a strategic process that requires time, careful planning, and effective management.",
      },
      {
        question: "Why do I need TECHNIX services?",
        answer: "Réponse à la question",
      },
      {
        question: "Who will be working on my site?",
        answer: "Réponse à la question",
      }]
  return (
    <section className="main-section">
      <LightBall position="left" intensity={0.7} />
      <TestimoniesSection />
      <Section className="section"
        imagePosition="right"
        title="YOUR BEST OUTSOURCING AGENCY"
        description="At TECHNIX, we carve the future of printing with a fervor for innovation and a commitment to excellence. Just like a skilled artisan, we sculpt each aspect of print outsourcing to create masterpieces. Inspired by the impact of online visibility, we optimize your print processes for results that inspire."
        primaryButtonText="START WITH US"
        imageSrc={image1} // Utilisez l'image Sque vous souhaitez ici
      />
      <div className='rightLightBall'>
        <LightBall position="right" intensity={0.5} />
      </div>
      <Section className="section"
        imagePosition="left"
        title="The Key to A Success PRINTING SYSTEM"
        description="At TECHNIX, we carve the future of printing with a fervor for innovation and a commitment to excellence. Just like a skilled artisan, we sculpt each aspect of print outsourcing to create masterpieces. Inspired by the impact of online visibility, we optimize your print processes for results that inspire."
        primaryButtonText="START WITH US"
        imageSrc={image1} // Utilisez l'image Sque vous souhaitez ici
      />
      <Partners
        title="Our Partners"
        partnerLogos={partnerLogos}
        showButton={true} // Vous pouvez définir showButton sur true ou false en fonction de votre besoin
        buttonText="CHECK OUR WORK WITH THEM"
      />

  
      <div className="app">
        <h1 className='faqtitle'>FAQ</h1>
        <FAQ questions={faqData} />
      </div>

    </section>
  );
};

export default MainSection;
