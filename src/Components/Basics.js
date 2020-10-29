import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Basics extends Component{
render(){
    return(
        <div>
            <div className="wrapper">
	<div className="header">
		<h1>Climbing the Triangle</h1>
	</div>
	<div className="mystyle" >
    	<ul className="fly">
		    <li><Link className="sidebar" to ="/">The Basics</Link></li>
			<li><Link className="sidebar" to="/Types">Types of Climbing</Link></li>
			<li><Link className="sidebar" to="/Safety">Safety</Link></li>
			<li><Link className="sidebar" to="/Equipment">Equipment</Link></li>
			<li><Link className="sidebar" to="/Where">Where to Climb</Link></li>
		</ul>
	</div>
	<div className="main">
		<h2>The Basics</h2>
		<img className="alignleft" src="assets/img/climbing-woman.jpg" alt="A woman climbing a boulder"/>
		<p>Are you thinking about trying <a href="https://en.wikipedia.org/wiki/Rock_climbing" target="_blank" rel="noopener noreferrer" >rock climbing?</a> Climbing is a fun and challenging sport that has a surge of popularity in recent years. Almost anyone can climb: you don't need a high level of strength or fitness to get started. Gear is available for men, women, and children of all shapes and sizes, and most gyms will allow children as young as three to climb. Climbing is not about brute force. Climbing more difficult routes does take some strength, mostly in your legs and hands, but it also takes skill and problem-solving ability.</p>		
		<p>Oh, and it is okay if you are afraid of heights. Really. Just keep your eyes on the wall.</p>
	</div>

	<div className="footer">
		<p>A sample site by Sylvia Richardson</p>
	</div>
</div>
        </div>

)
    }
}
export default Basics;