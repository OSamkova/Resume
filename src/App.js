import React, { Component } from 'react';

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
                    <div className='right-col'>
                        <div className='photo-wrap'>
                            <img src='https://s3.us-east-2.amazonaws.com/oksanas-misc-photos/IMG_4183.jpg' alt='headshot' height="100" width="100"/>
                        </div>
                    </div>
                </div>
                <div className='resume'>
                    <div className='left-col'>                        
                        <div className='about-container'>
                            <h4>About</h4>
                            <p>
                                Front-end engineer with a passion for problem solving. 
                                Inventive, curious and self-taught I find the javascript ecosystem to be the perfect playground. 
                                Looking for a team to push my skills into the next level.
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
                                    Collaborated on the front-end of our underwriting AI technology that helped to process over 2 billion in loans. 
                                    My focus was on optimizing the user experience, developing custom features/components, state management and 
                                    implementing unit tests using Jest and Enzyme.
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
                                    Wrote custom plugins for Salesforce to enhance user interaction.
                                    Collaborated with end users to make the product more responsive to their needs.
                                    Developed automated loan approval application, creating cost savings and
                                    cutting loan approval process from one year to several weeks.
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
                                    Served as a lead quality assurance engineer for an in-house team developing due diligence app for a major commercial mortgage lender. 
                                    Defined and implemented an automated test suite from the scratch which greatly improved robustness and reliability of the app. 
                                    Supervised and mentored junior team members.

                                    <p className='cursive'>Technologies used: GhostInspector, Selenium, NightwatchJS/Browserstack</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className='right-col'>
                        <div className='skills-container'>
                            <h4>Skills</h4>
                        </div>
                        <div className='education-container'>
                            <h4>Education</h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
