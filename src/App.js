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

                        <div className='experience-container'>
                            <h4>Experience</h4>
                        </div>
                        
                    </div>
                    <div className='right-col'>
                        <div className='about-container'>
                            <h4>About</h4>
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
