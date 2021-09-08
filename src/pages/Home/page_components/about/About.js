import React from 'react';
import './About.scss';

export default function About() {
    // console.log(brands);
    return (
        <section className="section_block" id="about">
            <div className="section-container">
                <div className="info-container">
                    <h2>
                        who we are?
                        <div className="line"></div>
                    </h2>
                    <p>
                        Guitar paradise is a guitar <a className="link2" href="">store</a> and <a className="link2" href="">workshop</a> at the same time. We are the official dealers of the most world leading brands
                    </p>
                </div>
                <div className="brands-container">
                    <h2>
                        <div className="line"></div>
                        featured brands
                    </h2>
                    <div className="brands-block">
                        <div className="brand" id="taylor"></div>
                        <div className="brand" id="martin"></div>
                        <div className="brand" id="baton_rouge"></div>
                        <div className="brand" id="fender"></div>
                        <div className="brand" id="yamaha"></div>
                        <div className="brand" id="furch"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}