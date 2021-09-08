import React from 'react';
import './Intro.scss';

export default function Intro(){
    return(
        <section className="section_block" id="intro">
           <div className="intro-container">
                <div className="image-block" id="img_intro"></div>
                <div className="text-block">
                    <h1 className="section-title">
                        <span className="show_title">Find</span>
                        <span className="show_title">your</span>
                        <span className="show_title">guitar.</span> 
                    </h1>
                </div>


                {/* <a href="" className="shop_link">
                    shop now
                </a> */}
           </div>
        </section>
    )
}