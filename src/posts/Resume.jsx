import React, { Component } from 'react';

class Resume extends Component {
    render() {
        return (
            <div className={this.props.theme +' post'}>
                <div className="post-body">
                    <table className="resume">
                        <tr className="section">
                            <td className="section-title">
                                EXPERIENCE
                            </td>
                            <td className="item-title" colSpan="2">
                                <b>Graphiq Inc.</b>, a Semantic Technology company
                            </td>
                            <td className="item-date">
                                01/16 - 08/16
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="item-text" colSpan="2">
                                Software Engineer, Visualization Team
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="item-text"  colSpan="2">
                                Created platform tools that are utilized by a team of 60 product managers and writers
                                to create data visualizations
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="item-text"  colSpan="2">
                                Designed and built two types of interactive visualizations, which receive a combined
                                total of 15 million impressions per month across top publisher sites like AOL, Fox News,
                                USA Today, and more
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="item-text"  colSpan="2">
                                Responsible for Graphiq's customer feedback interface, including integration and
                                management of Intercom
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="item-text"  colSpan="2">
                                Designed and built an internal RESTful API that allowed Graphiq employees to rapidly
                                make updates to thousands of visualizations.
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="item-text"  colSpan="2">
                                Used Swagger to document the API and Tyk as an API Gateway.
                            </td>
                            <td></td>
                        </tr>

                        <tr className="subsection">
                            <td></td>
                            <td className="item-title" colSpan="2">
                                <b>ECS Federal Inc.</b>
                            </td>
                            <td className="item-date">
                                11/14 - 12/15
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="item-text"  colSpan="2">
                                Computer Programmer
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="item-text"  colSpan="2">
                                Full stack developer on web application for interacting with National Address Database

                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="item-text"  colSpan="2">
                                Lead designer of UI for application using Javascript, HTML, and CSS
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="item-text"  colSpan="2">
                                Developed back end model of application using Java
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="item-text"  colSpan="2">
                                Expanded functionality and improved performance of existing applications
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="item-text"  colSpan="2">
                                Used Oracle SQL to interact with databases from web application
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="item-text"  colSpan="2">
                                Connected Java code to C library through Java Native Access (JNA)
                            </td>
                            <td></td>
                        </tr>

                        <tr className="section">
                            <td className="section-title">
                                EDUCATION
                            </td>
                            <td colSpan="2" className="item-title">
                                <b>Rhodes College</b>
                            </td>
                            <td className="item-date">
                                08/09 - 05/13
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="item-text item-column">
                                Bachelor of Science: Physics <br/>
                                Mathematics minor
                            </td>
                            <td className="item-text">
                                Major GPA: 3.7/4.0 <br/>
                                Overall GPA: 3.68/4.0
                            </td>
                            <td></td>
                        </tr>

                        <tr className="section">
                            <td className="section-title">
                                CERTIFICATIONS
                            </td>
                            <td className="item-title" colSpan="2">
                                <b>Stanford Machine Learning Certificate</b>
                            </td>
                            <td className="item-date">
                                11/16
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="item-text" colSpan="2">
                                Coursera Course Certificates, License Z6S3XZ7UZ6XN
                            </td>
                            <td></td>
                        </tr>

                        <tr className="subsection">
                            <td></td>
                            <td className="item-title" colSpan="2">
                                <b>AWS Certified Developer - Associate</b>
                            </td>
                            <td className="item-date">
                                08/16
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="item-text" colSpan="2">
                                Amazon Web Services, License AWS-ADEV-5458
                            </td>
                            <td></td>
                        </tr>

                        <tr className="section">
                            <td className="section-title">
                                BACKGROUND
                            </td>
                            <td className="item-title" colSpan="2">
                                <b>North Carolina State University</b>
                            </td>
                            <td className="item-date">
                                01/14 - 12/14
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="item-text item-column">
                                Computer Programming Certificate
                            </td>
                            <td className="item-text">
                                Overall GPA: 4.0/4.0
                            </td>
                            <td></td>
                        </tr>
                        <tr className="subsection">
                            <td></td>
                            <td className="item-title" colSpan="2">
                                <b>NCSU Robotics Club</b>
                            </td>
                            <td className="item-date">
                                05/14 - 11/14
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="item-text" colSpan="2">
                                Updated mobile Android application to control robot
                            </td>
                            <td></td>
                        </tr>

                        <tr className="subsection">
                            <td></td>
                            <td className="item-title" colSpan="2">
                                <b>Physics Instructor</b>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="item-text" colSpan="2">
                                Lab Instructor, Physics for Engineers and Scientists Laboratory, NCSU
                            </td>
                            <td className="item-date">
                                08/13 - 12/13
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="item-text" colSpan="2">
                                Teaching Assistant, Fundamentals of Physics II Laboratory, Rhodes College
                            </td>
                            <td className="item-date">
                                01/11 - 05/11
                            </td>
                        </tr>

                        <tr className="section">
                            <td className="section-title">
                                RESEARCH
                            </td>
                            <td className="item-title" colSpan="2">
                                <b>North Carolina State Researcher </b>
                            </td>
                            <td className="item-date">
                                05/13 - 12/13
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="item-text" colSpan="2">
                                Developed theoretical model for experimental diffusion data using Mathematica
                            </td>
                            <td></td>
                        </tr>

                        <tr className="subsection">
                            <td></td>
                            <td className="item-title" colSpan="2">
                                <b>Rhodes College Research Assistant</b>
                            </td>
                            <td className="item-date">
                                01/12 - 12/12
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="item-text" colSpan="2">
                                Studied galactic outflow through Voronoi tessellation using IDL
                            </td>
                            <td></td>
                        </tr>

                        <tr className="section">
                            <td className="section-title">
                                HONORS
                            </td>
                            <td className="item-title" colSpan="2">
                                Taylor Physics Fellow, Rhodes College Fellow, Sigma Pi Sigma
                            </td>
                            <td className="item-date">
                            </td>
                        </tr>

                    </table>
                </div>
            </div>
        )
    }
};

export default Resume;
