import React, { Component } from 'react';
import PostHeader from '../components/PostHeader';

class Imposter extends Component {
    render() {
        return (
            <div className='post post-color'>
                <PostHeader title="Stop! Imposter!"
                            link={this.props.link}
                            created="3 November 2017"
                />
                <div className="div-nest">
                    <div>
                    	<div className="quote">
	                        A professional is just an amature who gets paid. <br/>
							- Matthew Miller
						</div>
                    </div>

                    <div>
                        <p>
                            I remember cowering in a cubicle at my first job. 
                            I was nervous to start coding, not because I wasn’t excited for a challenge, but because I wasn’t sure if I would be able to meet expectations. 
                            I was part of a two person team with a senior developer. 
                            While discussing how to approach the project, the senior developer regularly asked for my opinion. 
                            I would give my opinion punctuated with some variation of, “But I’m not sure” or “Do you think that’s right?”. 
                            At some point I asked my coworker if he could review some javascript I had written. 
                            Not surprisingly, I followed up my request by adding, “I’m still a javascript amature.” 
                            My coworker then reminded me, that I had been hired in part to write javascript. By definition, I was not an amature. 
                            I was a professional software developer. 
                            While I had very little experience compared to my peers, I was trusted by my employer to make software. 
                            I was not there to be perfect; I was there to do my job.
                        </p>
                    </div>

                    <div>
                        <p>
                            This feeling of not being qualified or competent is commonly called Imposter Syndrome. 
                            While not unique to software engineering, 
                            I think programmers are especially susceptible for a few reasons. 
                            First, software is one of the few technical fields that does not require a related degree. 
                            According to the 2017 StackOverflow survey almost half of professional programmers do not have an undergraduate degree in computer science or software engineering. 
                            Second, due to the sheer volume of information encompassed by software engineering, even a competent programmer is likely to be ignorant of many basic principles in their field. 
                            Third, developers spend most of their time looking at polished, production ready code. 
                            It is easy to subconsciously think that that is what our own code should look like on the first try. 
                            In reality, good code is almost never written in a first pass. 
                            It takes multiple revisions and peer reviews even for excellent programmers. 
                            Finally, software culture is full of tech jargon, acronyms, and  buzzwords. 
                            While the concepts these words describe are often not conceptually complicated, unfamiliar words can make developers feel inept.
                        </p>
                    </div>

                    <div>
                        <p>
	                        Having been a programmer for several years now, I can see that I knew much more than I realized when I was first employed as a developer. 
	                        Furthermore, many of the important things I didn’t know had very little to do with the technical aspects of coding. 
	                        What made me feel like an imposter was my lack of exposure to best practices, tech jargon, and dev culture. 
	                        My goal is to demystify the what it really takes to be a developer. 
	                        To this end, I will share some of the software development lessons I have learned outside computer science courses. 
	                    </p>
                    </div>

					<div>
                		<div className="quote">
							People think that computer science is the art of geniuses but the actual reality is the opposite, just many people doing things that build on each other, like a wall of mini stones.  <br/>
							- Donald Knuth
						</div>
					</div>

					<div>
                        <p>
							Before I try to explain what makes a good engineer, I think it is helpful to examine the “genius programmer” archetype. 
							A popular trope in TV and movies, the genius programmer is a moody lone wolf, up all night in front a computer screen. 
							He has a perfect mental framework of even the most obscure technologies and creates complex programs few others can decipher. 
							While this behavior might be mysterious and captivating, it is not what makes a good programmer. Not only are these traits impractical, many of them are detrimental. 
						</p>
					</div>

					<div>
                		<div className="quote">
							Science is a way of thinking much more than it is a body of knowledge.  <br/>
							- Carl Sagan
						</div>

                    	<div className="quote">
							Never memorize something that you can look up.  <br/>
							- Albert Einstein
						</div>
					</div>

					<div>
                        <p>
							Writing software is not a test of what you know. 
							There are no bonus points for keeping everything in your head at once. 
							Best of all, when you forget something, you are already at your computer to Google the answer. 
							In technical interviews, it is fairly common for employers to allow developers to use Google for the code challenges. 
							This is because Google and StackOverflow are a critical part of how professional programmers solve problems in the real world. 
							Of course at some point, looking up everything online will become both frustrating and time consuming. 
							Thankfully, our brains are pretty good at passively absorbing information they frequently use. 
							Occasionally, there are some syntax rules or terminal commands that I use infrequently enough to forget but frequently enough to get annoyed looking them up. 
							For these facts, I keep a small notebook on my desk. 
						</p>
					</div>

					<div>
                		<div className="quote">
							Programs must be written for people to read, and only incidentally for machines to execute.  <br/>
							- Harold Abelson
						</div>

                    	<div className="quote">
							Controlling complexity is the essence of computer programming.  <br/>
							- Brian Kernighan
						</div>
					</div>

					<div>
                        <p>
							In practice, code is read not only by the original writer, but whole teams of developers. 
							Additionally, code is must be maintained and modified over time. This means that there is an overhead associated with understanding how programs work. 
							A program that is written in a clever, complex way, might save the computer a few seconds of execution time. 
							However, when another developer has to modify that code, the additional time to understand the logic might be days.
						</p>
					</div>

					<div>
                		<div className="quote">
							We should forget about small efficiencies, say about 97% of the time: premature optimization is the root of all evil.  <br/>
							- C.A.R. Hoare, quoted by Donald Knuth
						</div>

                    	<div className="quote">
							Everyone knows that debugging is twice as hard as writing a program in the first place. 
							So if you are as clever as you can be when you write it, how will you ever debug it?  <br/>
							- Brian Kernighan
						</div>
					</div>

					<div>
                        <p>
							Many programmers like to compete in “golf code”. 
							The goal of golf code is to write a program that performs a specific function in as few characters as possible. 
							This is done for fun and not for production code. However, some programmers seem to let this perspective bleed over into their regular work. 
							On the other end of the spectrum, there is what I refer to as “monkey code”. 
							The term refers to the Infinite Monkey Theorem, that given infinite monkeys and infinite time, the monkeys would inevitably write the entire works of Shakespeare. 
							That said, monkey code is when a programmer writes code seemly at random and stops when the program works. 
							Avoiding unnecessary complexity is not a “get out of thinking free” card. 
							Writing simple elegant code is challenging and takes time. The key is to recognize when you get into the realm of diminishing returns. 
							If the time you spend optimizing your code is not going to save developer time maintaining the code in the future, then it is time to move on.
						</p>

						<p>
							Hopefully now, it should be clear that being a stereotypical hacker is not synonymous with being a good developer. 
							However, that still leaves the question, “What does a good programmer look like?” 
							Fortunately there are a slew of books, blogs, and videos that cover every aspect of development from code structure to team workflow. 
							(My personal favorite is The Effective Engineer by Edmond Lau.) 
							Since this topic has already been thoroughly covered elsewhere, I will not attempt to describe a cohesive ideology for what makes a good engineer. 
							Instead, I will simply make a few points I wish I had taken to heart when I first started writing code.
						</p>
					</div>

					<div>
                		<div className="quote">
							A person who never made a mistake never tried anything new.  <br/>
							- Albert Einstein
						</div>

                		<div className="quote">
							Move fast and break things. Unless you are breaking stuff, you are not moving fast enough.  <br/>
							- Mark Zuckerberg
						</div>
                		<div className="quote">
							There's a silly notion that failure's not an option at NASA. 
							Failure is an option here. If things are not failing, you are not innovating enough.  <br/>
							- Elon Musk
						</div>
					</div>

					<div>
                        <p>
							First of all, don’t be afraid to make mistakes. 
							Learning to program is just as much about learning how to fix bugs as it is about learning how programs are supposed to work. 
							From this perspective, breaking your code is not an interruption from progress, but an essential part of learning.
						</p>
					</div>

					<div>
                		<div className="quote">
							It's not that I'm so smart, it's just that I stay with problems longer.  <br/>
							- Albert Einstein
						</div>
					</div>

					<div>
                        <p>
							Don’t let yourself become overwhelmed with all of the things you don’t know. 
							It is easy to feel paralyzed by this information overload. 
							Especially in the beginning it can seem like for every new thing you learn you are still just as confused. 
							fortunately, there is no magic shortcut. The only thing you can do is learn a bit at a time. 
							Like being lost in the woods, if you keep walking in one direction, eventually you will find your way out. 
						</p>
					</div>

					<div>
                    	<div className="quote">
							Practice isn't the thing you do once you're good. 
							It's the thing you do that makes you good.   <br/>
							- Malcolm Gladwell
						</div>

                		<div className="quote">
							Intellectual growth should commence at birth and cease only at death. <br/> 
							- Albert Einstein
						</div>
					</div>

					<div>
						<p>
							Finally, the most effective technique I know to become a better programmer, is to keep programming. 
							Consider how doctors describe their work. After medical school, doctors do not perform medicine, they practice medicine. 
							This is because, even after years of training, they are still learning and improving their skills. Programming is much the same way. 
							You will never know all of the details, and as you program you will make mistakes and encounter uncertainty. 
							While it is not always pleasant, this is the key to improving. 
							While you might already be writing code for classes or work, I strongly recommend starting a side project. 
							ind something you are interested in and explore it.
						</p>
                    </div>
                </div>
            </div>
        )
    }
};

export default Imposter;

