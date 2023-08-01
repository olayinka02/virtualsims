import React from 'react';
import StickyNavbar from '../component/StickyNavbar';
import HeroSection from '../component/HeroSection';
import FeatureSection from '../component/FeatureSection';
import FooterSection from '../component/FooterSection';

function HomePage() {
    return (
        <>
            <StickyNavbar />
            <HeroSection />
            <FeatureSection />
            <FooterSection />
        </>
    );
}

export default HomePage;
