import React, {} from 'react';
import {Link} from 'react-router-dom';

class Where extends React.Component{
render(){
    return(
<div>
<div className="wrapper">
	<div className="header">
		<h1>Climbing the Triangle</h1>
	</div>
	<div className="mystyle" >
	     <ul Style={{listStyleType: none, margin: '0', padding:'0'}, {float : right}}>
		    <li><Link className="sidebar" to ="/Basics">The Basics</Link></li>
			<li><Link className="sidebar" to="/Types">Types of Climbing</Link></li>
			<li><Link className="sidebar" to="/Safety">Safety</Link></li>
			<li><Link className="sidebar" to="/Equipment">Equipment</Link></li>
			<li><Link className="sidebar" to="/">Where to Climb</Link></li>
		</ul>
	</div>
	<div className="main">
		<h3>Where to Climb in the Triangle</h3>
		<p>If you are new to climbing, the <a href="http://www.meetup.com/RaleighRockClimbing/">Raleigh Rock Climbing Meetup</a> is a great place to start. They are a friendly group of climbers who organize regular outings to the local gym. Generally, you'll get a group discount on admission. You also get patient instructors who enjoy teaching new climbers.</p>
		<p>If you prefer a more structured learning experience, many gyms offer classes for beginners.</p>
		<ul>
			<li><a href="http://www.townofchapelhill.org/index.aspx?page=813">Chapel Hill Community Center</a></li>
			<li><a href="http://www.trianglerockclub.com/">Triangle Rock Club</a></li>
			<li><a href="http://lifetimefitness.mylt.com/community/rock-climbing/">Lifetime Fitness (Cary)</a></li>
			<li><a href="http://www.nextclimb.com">NextClimb</a></li>
			<li><a href="http://recreation.duke.edu/facilities/climbing-wall/">Duke Climbing Wall</a> (Students and Faculty only)</li>
		</ul>
	</div>
	
	<div className ="footer">
		<p>A sample site by Sylvia Richardson</p>
	</div>
</div>
</div>
	)
	}
}
export default Where;