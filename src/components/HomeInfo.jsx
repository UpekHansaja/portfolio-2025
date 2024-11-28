import React from 'react'
import { Link } from 'react-router-dom';


const InfoBox = ({ text, link, btnText }) => (
    <div className='accent-info-box font-mono'>
        <p className='sm:text-sm sm:leading-snug md:text-lg md:leading-tight text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white accent-neo-btn hover:gap-5 duration-200'>
            {btnText}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
            </svg>
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-sm sm:leading-snug md:text-lg md:leading-tight text-center font-mono neo-brutalism-accent py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-medium'>Upek</span>👋
            <br />
            A Software Engineer from Sri Lanka🇱🇰
        </h1>
    ),
    2: (
        <InfoBox
            text='Everyone has their own story. Here is mine.📈'
            link='/About'
            btnText='View My Journey'
        />
    ),
    3: (
        <InfoBox
            text='Find out how I transformed ideas into reality..💡'
            link='/Projects'
            btnText='View My Projects'
        />
    ),
    4: (
        <InfoBox
            text='Looking for transform your business?'
            link='/Contact'
            btnText="Let's Talk"
        />
    ),
};

const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo