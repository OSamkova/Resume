import React, { Component } from 'react';
import { TEAL } from './lib/colors';

import BarChart from './components/BarChart';
import { exportPDF } from './lib/export';

const barInputData = [
            { label: "JavaScript (ES6/ES7)", points: 50 },
            { label: "HTML5 / CSS3 / Sass / Bootstrap", points: 50 },
            { label: "React / Redux", points: 45 },
            { label: "Jest / Enzyme", points: 45 },
            { label: "Photoshop / Illustrator", points: 45 },
            { label: "D3", points: 40 },
            { label: "SQL", points: 40 },
            { label: "Node.js / Express", points: 30 },
            { label: "MongoDB / Mongoose", points: 25 },
        ];

class App extends Component {
    render() {
        return (
            <div className='resume-container'>
                <div className='resume-header-wrap'>
                    <div className='left-col'>
                        <h1 className='resume-header'>
                            Oksana Samkova-Plattner
                        </h1>
                        <div className='contacts-container'>
                            <div className='contacts-row'>
                                <div className='icon-wrap'>
                                    <span className='icon icon-home-solid'/>
                                </div>
                                <span className='contacts-cell-item'>Queens, NY</span>
                            </div>
                            <div className='contacts-row'>
                                <div className='icon-wrap'>
                                    <span className='icon icon-phone-solid'/>
                                </div>
                                <span className='contacts-cell-item'>(347) 517-5844</span>
                            </div>
                            <div className='contacts-row'>
                                <div className='icon-wrap'>
                                    <span className='icon icon-envelope-solid'/>
                                </div>
                                <span className='contacts-cell-item'>oksasamkova@gmail.com</span>
                            </div>
                            <div className='contacts-row'>
                                <div className='icon-wrap'>
                                    <span className='icon icon-github-brands'/>
                                </div>
                                <span className='contacts-cell-item'>https://github.com/osamkova</span>
                            </div>
                        </div>
                    </div>
                    <div className='right-col flex'>
                        <div className='photo-wrap'>
                            <img src='https://s3.us-east-2.amazonaws.com/oksanas-misc-photos/IMG_4183.jpg' alt='headshot' height="100" width="100"/>
                        </div>
                        <div
                            className='icon-wrap'
                            onClick={() => exportPDF()}
                        >
                            <span className='icon icon-arrow-circle-down-solid'/>
                        </div>
                    </div>
                </div>
                <div className='resume'>
                    <div className='left-col'>                        
                        <div className='about-container'>
                            <h4>About</h4>
                            <p>
                                Front-end engineer with a passion for problem solving. 
                                Inventive, curious and self-taught, 
                                I find the javascript ecosystem to be the perfect playground. 
                                Looking for a team that will push my skills to the next level.
                            </p>
                        </div>

                        <div className='experience-container'>
                            <h4>Experience</h4>
                            <div className='experience-item'>
                                <div className='experience-title'>
                                    <span className='company-name'>Greystone & Co</span>
                                    <span className='date-place'>Jul 2017 - Present</span>
                                </div>
                                <div className='experience-title'>
                                    <span className='position'>Software Engineer</span>
                                    <span className='date-place'>New York, NY</span>
                                </div>
                                <div className='description'>
                                    Collaborated on the front-end of our underwriting AI technology that has processed over 2 billion in loans. 
                                    Developed custom features/components to optimize user experience. 
                                    Handled state management and the implementation of unit tests.

                                    {/*Collaborated on the front-end of our underwriting AI technology that helped to process over 2 billion in loans. 
                                    My focus was on optimizing the user experience, developing custom features/components, state management and 
                                    implementing unit tests using Jest and Enzyme.*/}
                                    <p className='cursive'>Technologies used: React/Redux, Jest/Enzyme</p>
                                </div>
                            </div>
                            <div className='experience-item'>
                                <div className='experience-title'>
                                    <span className='company-name'>Greystone & Co</span>
                                    <span className='date-place'>Jan 2016 - Jul 2017</span>
                                </div>
                                <div className='experience-title'>
                                    <span className='position'>Jr. Software Engineer</span>
                                    <span className='date-place'>New York, NY</span>
                                </div>
                                <div className='description'>
                                    Maintained in-house software written in ReactJS. 
                                    Developed an automated loan approval application that resulted in corporate cost savings and cutting the loan approval process from one year to several weeks. 
                                    Wrote custom plugins for Salesforce to enhance user interaction. 
                                    Collaborated with end users to make the product more responsive to their needs.
                                    <p className='cursive'>Technologies used: JavaScript, React/Redux, Apex, SOQL</p>
                                </div>
                            </div>
                            <div className='experience-item'>
                                <div className='experience-title'>
                                    <span className='company-name'>Greystone & Co</span>
                                    <span className='date-place'>Aug 2013 - Jan 2016</span>
                                </div>
                                <div className='experience-title'>
                                    <span className='position'>Lead QA</span>
                                    <span className='date-place'>New York, NY</span>
                                </div>
                                <div className='description'>
                                    Served as the lead quality assurance engineer for an in-house team developing a due diligence app for a large commercial mortgage lender. 
                                    Defined and implemented an automated test suite from scratch, 
                                    which greatly improved the robustness and reliability of the app. 
                                    Supervised and mentored junior team members.
                                    <p className='cursive'>Technologies used: GhostInspector, Selenium, NightwatchJS/Browserstack</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className='right-col'>
                        <div className='skills-container'>
                            <h4>Skills</h4>
                            <BarChart 
                                inputData={barInputData}
                                getX={item => item.points}
                                getY={item => item.label}
                                width={300}
                                height={barInputData.length * 36}
                                radius={6}
                                color={TEAL}
                            />
                        </div>
                        <div className='experience-container'>
                            <h4>Education</h4>
                            <div className='experience-item'>
                                <div className='experience-title'>
                                    <span className='company-name'>Samara State University</span>
                                    <span className='date-place'>2008</span>
                                </div>
                                <div className='experience-title'>
                                    <span className='description'>MS in Mechanical Engineering</span>
                                    <span className='date-place bottom-aligned'>Samara, Russia</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
