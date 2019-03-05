import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div className='resume-container'>
                <h1 className='resume-header'>
                    Oksana Samkova-Plattner
                </h1>
                <div className='resume'>
                    <div className='left-col'>
                        <div className='about-container'>
                            <h4>About</h4>
                            <p>
                                I’m a front-end web engineer who loves to solve challenging problems in original, inventive ways. 
                                I’m self-taught and highly driven, with a flair for aesthetics. 
                                My skills have continuously grown over the last six years, and now I’m looking for a team that will help me reach the next level.
                            </p>
                        </div>

                        <div className='experience-container'>
                            <h4>Experience</h4>
                            <div className='experience-item'>
                                <div className='experience-title'>
                                    <span className='company-name '>Greystone & Co</span>
                                    <span className='date-place'>Jul 2017 - Present</span>
                                </div>
                                <div className='experience-title'>
                                    <span  className='position'>Software Engineer</span>
                                    <span className='date-place'>New York, NY</span>
                                </div>
                                <div className='description'>
                                    Developed and built an underwriting application from the ground up, which processed on average 2 billion in loans per year.
                                    Implemented unit tests using Jest and Enzyme and greatly improved robustness and reliability.
                                    <p className='cursive'>Technologies used: React/Flux, Jest/Enzyme</p>
                                </div>
                            </div>
                            <div className='experience-item'>
                                <div className='experience-title'>
                                    <span className='company-name '>Greystone & Co</span>
                                    <span className='date-place'>Jan 2016 - Jul 2017</span>
                                </div>
                                <div className='experience-title'>
                                    <span className='position'>Jr. Software Engineer</span>
                                    <span className='date-place'>New York, NY</span>
                                </div>
                                <div className='description'>
                                    Maintaned in-house software written in ReactJS. 
                                    Architected single page applications within Salesforce ecosystem.

                                    <p className='cursive'>Technologies used: JavaScript, React/Redux, Apex, SOQL</p>
                                </div>
                            </div>
                            <div className='experience-item'>
                                <div className='experience-title'>
                                    <span className='company-name '>Greystone & Co</span>
                                    <span className='date-place'>Aug 2013 - Jan 2016</span>
                                </div>
                                <div className='experience-title'>
                                    <span className='position'>Lead QA</span>
                                    <span className='date-place'>New York, NY</span>
                                </div>
                                <div className='description'>
                                    Served as a lead quality assurance engineer for an in-house team developing due diligence app for a major commercial mortgage lender. 
                                    Defined and implemented an automated test suite from the scratch. 
                                    Supervised and mentored junior team members.

                                    <p className='cursive'>Technologies used: GhostInspector, Selenium, NightwatchJS/Browserstack</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className='right-col'>
                        <div className='contacts-container'>
                            <h4>Contact</h4>
                            <div className='contacts-table'>
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
