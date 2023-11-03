import React from 'react';
import '../styles/Offers.scss';

const Offers = () => {
  return (
    <section className="services" id="srv">
        <h1 className="text-center"><span>Our </span>Services</h1>
          <div className="box">
            <div className="card">
                <img src="" alt="incon" className='i'/>
                <h5>front-end Dev</h5>
                <div class="par">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quos vitae hic, aperiam beatae adipisci nulla doloribus, in, 
                        recusandae quibusdam odit reprehenderit eveniet explicabo itaque ad ex delectus modi iste.</p>
                </div>
            </div>
            <div className="card">
                <img src="" alt="incon" className='i'/>
                <h5>back-end Dev</h5>
                <div className="par">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quos vitae hic, aperiam beatae adipisci nulla doloribus, in, 
                        recusandae quibusdam odit reprehenderit eveniet explicabo itaque ad ex delectus modi iste.</p>
                </div>
            </div>
            <div className="card">
                <img src="" alt="incon" className='i'/>
                <h5>PWA Dev</h5>
                <div className="par">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quos vitae hic, aperiam beatae adipisci nulla doloribus, in, 
                        recusandae quibusdam odit reprehenderit eveniet explicabo itaque ad ex delectus modi iste.</p>
                </div>
            </div>
            <div className="card">
                <img src="" alt="incon" className='i'/>
                <h5>Architect</h5>
                <div className="par">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quos vitae hic, aperiam beatae adipisci nulla doloribus, in, 
                        recusandae quibusdam odit reprehenderit eveniet explicabo itaque ad ex delectus modi iste.</p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Offers;