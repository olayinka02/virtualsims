import React from 'react';
import StickyNavbar from '../component/StickyNavbar';
import Buildpage from '../component/Buildpage';


function AboutPage() {
const pages = "About page";

     
    return (
        <div style={{overflowY:'visible',height:101+'vh'}}>
        <StickyNavbar  />
        <Buildpage pages={pages} />

          
        </div>
    );
}

export default AboutPage;
