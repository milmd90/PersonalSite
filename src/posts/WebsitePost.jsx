import React, { Component } from 'react';
import PostHeader from '../components/PostHeader';
import CommentSection from '../components/CommentSection';

class WebsitePost extends Component {
    render() {
        var commentSection = this.props.link ? '' : <CommentSection post="GCPSlackPost"/>;

        return (
            <div className={this.props.theme +' post'}>
                <PostHeader title="Creating a Website"
                            link={this.props.link}
                            created="10 April 2017"
                />
                <div className="post-body">
                    <div>
                        <h3 className="section">
                            Overview
                        </h3>
                        <p>
                            This post is intended to describe how I made this website. The main purpose is to serve as a holistic overview
                            for beginners interested in building their own website from the ground up. I discuss each step only in minimal detail.
                            There are considerably more detailed references for each step, but hopefully, this gives a high level picture of the
                            necessary steps to build a functioning site.
                        </p>
                        <p>
                            This site is a Node.js application, using React, and hosted in Google Cloud Platform. I use Git for my version control
                            and the code is open to view on
                            <a className='hover-bold' href='https://github.com/milmd90/PersonalSite'> my GitHub page</a>.
                        </p>
                    </div>
                    <div>
                        <h3 className="section">
                            Steps:
                        </h3>
                        <ul>
                            <li><a href='#node'>Create a Node project</a></li>
                            <li><a href='#tools'>React, Babel, Webpack, Express</a></li>
                            <li><a href='#gcp'>Deploy to Google Cloud Platform</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="section" id='node'>
                            Create a Node project
                        </h3>
                        <p>
                            Node.js (or simply Node) is a backend Javascript runtime environment. In other words, it is used for creating
                            Javascript apps that run on servers, not just in a browser. To get started, first install node. After that creating
                            a project is as easy as calling `npm init` in the terminal. The terminal will then ask you several questions to generated
                            a file called `package.json`. This file defines your Node application.
                        </p>
                    </div>
                    <div>
                        <h3 className="section" id='tools'>
                            <a href='#react'>React</a>,
                            <a href='#babel'> Babel</a>,
                            <a href='#webpack'> Webpack</a>,
                            <a href='#express'> Express</a>
                        </h3>
                        <p>
                            While writing your Node application, there are several packages you should consider using.
                            Below are several packages used in this website that I strongly recommend.
                            To install packages in Node, use `npm install --save express`. The `--save` adds them to the list of
                            dependencies in `package.json`. This allows all of the files in the `node_modules` folder to be generated
                            simply using `npm install`.
                        </p>
                        <h4 className="subsection" id="react">
                            React
                        </h4>
                        <p>
                            React is a library developed by Facebook to design user interfaces. React is built around components with
                            well defined lifecycles to promote modular, reusable, predictable code. Because of how the React DOM renders
                            components, React is also very quick.
                        </p>

                        <h4 className="subsection" id="babel">
                            Babel
                        </h4>
                        <p>
                            If you are using React, I recommend using Babel so that you can use the jsx syntax.
                            While not strictly necessary, React is much more intuitive to write using jsx, which is an HTML like syntax
                            for writing React components. However, jsx cannot be directly interpretted by browsers and must first be converted
                            to ordinary javascript files. Babel is a transpiler which can convert jsx code into javascript.
                        </p>
                        <p>
                            Babel also allows you to use ES6 (also called ES6 or Harmony) which likewise needs to be transpiled.
                            ES6 is the latest version of the language specification that Javascript implements.
                            ES6 provides several helpful syntax improvements to traditional Javascript.
                        </p>
                        <h4 className="subsection" id="webpack">
                            Webpack
                        </h4>
                        <p>
                            Webpack is a module bundler. I use webpack to combine all of my separate js and jsx file into one javascript file
                            to be loaded into the broswer. Webpack can also be used run tasks such as Babel while bundling.
                        </p>
                        <h4 className="subsection" id="express">
                            Express
                        </h4>
                        <p>
                            Node is a server-side environment that must be able to respond to client side web requests.
                            I use Express to handle these requests.
                        </p>
                    </div>
                    <div>
                        <h3 className="section" id='gcp'>
                            Deploy to Google Cloud Platform
                        </h3>
                        <ul>
                            <li>Create a new GCP project</li>
                            <li><a href="https://cloud.google.com/sdk/docs/">Download SDK</a></li>
                            <li>Deploy your app to GCP with `gcloud app deploy`</li>
                            <li>Laung your app in the browser with `gcloud app browse`</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
};

export default WebsitePost;
