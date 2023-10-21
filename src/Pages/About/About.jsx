import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {

    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/rxGmr7x/pexels-tara-winstead-6479582.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-white text-3xl lg:text-5xl font-bold">Beautify Your Life</h1>
                        <p className="mb-5 text-white">At Beautify, we&apos;re passionate about helping you unleash your inner beauty. We understand that cosmetics are more than just products; they&apos;re a form of self-expression, a source of confidence, and a way to enhance your unique features.</p>
                        <Link to={'/'}> <button className="btn btn-secondary">Get Started</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;