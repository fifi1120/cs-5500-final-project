import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';

function Home() {
    return (
        <>
            <HeroSection />
            <Cards />
            <Footer />
            <df-messenger
                intent="WELCOME"
                chat-title="Coffee GPT"
                agent-id="6f1553de-722e-4b90-98de-381e29e564eb" // Dialogflow agent ID
                language-code="en"
            ></df-messenger>
        </>
    );
}


export default Home;
