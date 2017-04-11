import React, { Component } from 'react';

class Resume extends Component {
    render() {
        return (
            <div className={this.props.theme +' post'}>
                <div className="post-body resume">
                    <div className="section">
                        <div className="title">
                            EXPERIENCE
                        </div>
                        <div className="content">
                            <div className="subsection">
                                <div className="header">
                                    <div className="item">
                                        OrderMyGear
                                    </div>
                                    <div className="date">
                                        01/17 - Present
                                    </div>
                                </div>
                                <div className="info">
                                    Software Developer
                                </div>
                            </div>
                            <div className="subsection">
                                <div className="header">
                                    <div className="item">
                                        Graphiq
                                    </div>
                                    <div className="date">
                                        01/16 - 08/16
                                    </div>
                                </div>
                                <ul className="info">
                                    <li>Software Engineer, Visualization Team</li>
                                    <li>Created platform tools that are utilized by a team of 60 product managers and writers to create data visualizations</li>
                                    <li>Designed and built two types of interactive visualizations, which receive a combined total of 15 million impressions per month across top publisher sites like AOL, Fox News, USA Today, and more</li>
                                    <li>Responsible for Graphiq's customer feedback interface, including integration and management of Intercom</li>
                                    <li>Designed and built an internal RESTful API that allowed Graphiq employees to rapidly make updates to thousands of visualizations</li>
                                    <li>Used Swagger to document the API and Tyk as an API Gateway</li>
                                </ul>
                            </div>
                            <div className="subsection">
                                <div className="header">
                                    <div className="item">
                                        ECS Federal
                                    </div>
                                    <div className="date">
                                        11/14 - 12/15
                                    </div>
                                </div>
                                <ul className="info">
                                    <li>Computer Programmer</li>
                                    <li>Full stack developer on web application for interacting with National Address Database</li>
                                    <li>Lead designer of UI for application using Javascript, HTML, and CSS</li>
                                    <li>Developed back end model of application using Java</li>
                                    <li>Expanded functionality and improved performance of existing applications</li>
                                    <li>Used Oracle SQL to interact with databases from web application</li>
                                    <li>Connected Java code to C library through Java Native Access (JNA)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <div className="title">
                            EDUCATION
                        </div>
                        <div className="content">
                            <div className="subsection">
                                <div className="header">
                                    <div className="item">
                                        Rhodes College
                                    </div>
                                    <div className="date">
                                        08/09 - 05/13
                                    </div>
                                </div>
                                <div className="info">
                                    <div className="column">
                                        Bachelor of Science: Physics <br/>
                                        Mathematics minor
                                    </div>
                                    <div className="column">
                                        Major GPA: 3.7/4.0 <br/>
                                        Overall GPA: 3.68/4.0
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <div className="title">
                            CERTIFICATIONS
                        </div>
                        <div className="content">
                            <div className="subsection">
                                <div className="header">
                                    <div className="item">
                                        Stanford Machine Learning Certificate
                                    </div>
                                    <div className="date">
                                        11/16
                                    </div>
                                </div>
                                <div className="info">
                                    Coursera Course Certificates, License Z6S3XZ7UZ6XN
                                </div>
                            </div>
                            <div className="subsection">
                                <div className="header">
                                    <div className="item">
                                        AWS Certified Developer - Associate
                                    </div>
                                    <div className="date">
                                        08/16
                                    </div>
                                </div>
                                <div className="info">
                                    Amazon Web Services, License AWS-ADEV-5458
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <div className="title">
                            BACKGROUND
                        </div>
                        <div className="content">
                            <div className="subsection">
                                <div className="header">
                                    <div className="item">
                                        North Carolina State University
                                    </div>
                                    <div className="date">
                                        01/14 - 12/14
                                    </div>
                                </div>
                                <div className="info">
                                    <div className="column">
                                        Computer Programming Certificate
                                    </div>
                                    <div className="column">
                                        Overall GPA: 4.0/4.0
                                    </div>
                                </div>
                            </div>
                            <div className="subsection">
                                <div className="header">
                                    <div className="item">
                                        NCSU Robotics Club
                                    </div>
                                    <div className="date">
                                        05/14 - 11/14
                                    </div>
                                </div>
                                <div className="info">
                                    Updated mobile Android application to control robot
                                </div>
                            </div>
                            <div className="subsection">
                                <div className="header">
                                    <div className="item">
                                        Physics Instructor
                                    </div>
                                </div>
                                <div className="info-date">
                                    <div className="info-date-item">
                                        Lab Instructor, Physics for Engineers and Scientists Laboratory, NCSU
                                    </div>
                                    <div className="date">
                                        08/13 - 12/13
                                    </div>
                                </div>
                                <div className="info-date">
                                    <div className="info-date-item">
                                        Teaching Assistant, Fundamentals of Physics II Laboratory, Rhodes College
                                    </div>
                                    <div className="date">
                                        01/11 - 05/11
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <div className="title">
                            RESEARCH
                        </div>
                        <div className="content">
                            <div className="subsection">
                                <div className="header">
                                    <div className="item">
                                        North Carolina State Researcher
                                    </div>
                                    <div className="date">
                                        05/13 - 12/13
                                    </div>
                                </div>
                                <div className="info">
                                    Developed theoretical model for experimental diffusion data using Mathematica
                                </div>
                            </div>
                            <div className="subsection">
                                <div className="header">
                                    <div className="item">
                                        Rhodes College Research Assistant
                                    </div>
                                    <div className="date">
                                        01/12 - 12/12
                                    </div>
                                </div>
                                <div className="info">
                                    Studied galactic outflow through Voronoi tessellation using IDL
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <div className="title">
                            HONORS
                        </div>
                        <div className="content">
                            <div className="subsection">
                                <div className="info orphan">
                                    Taylor Physics Fellow, Rhodes College Fellow, Sigma Pi Sigma
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Resume;
