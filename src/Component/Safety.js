import React, {} from 'react';
import {Link} from 'react-router-dom';

class Safety extends React.Component{
	render(){
		return(
			<div>
				<div className="wrapper">
		<div className="header">
			<h1>Climbing the Triangle</h1>
		</div>
		<div className="mystyle">
		<ul Style={{listStyleType: none, margin: '0', padding:'0'}}>
		<li><Link className="sidebar" to ="/Basics">The Basics</Link></li>
			<li><Link className="sidebar" to="/Types">Types of Climbing</Link></li>
			<li><Link className="sidebar" to="/">Safety</Link></li>
			<li><Link className="sidebar" to="/Equipment">Equipment</Link></li>
			<li><Link className="sidebar" to="/Where">Where to Climb</Link></li>
		</ul>
	</div>
	<div className="main">
		<h2 Style={{paddingTop:'1em' }}>Safety</h2>
		<p>Is climbing safe? Well, any sport that involves leaving the ground is going to involve a certain amount of risk. Climbing is certainly more dangerous than, say, using an elliptical trainer or walking in the park. Most climbers do end up with some scrapes and bruises from harder routes.</p>
		
		<p>That said, climbing is nowhere near as risky as extreme sports like snowboarding. Climbers use a lot of safety equipment, and that equipment is designed and tested to survive intense forces. In fact, I feel far more comfortable 50 feet above the ground on a climbing rope than 5 feet up on a ladder. Serious climbing accidents are rare, especially in indoor climbing.</p>
		
		<p>Most accidents can be attributed to one of the following:</p>
		<ul>
			<li><strong>Taking stupid risks.</strong> This one is self-explanatory. Indoor rock climbing gyms are usually very safe environments, with staff that watch for dangerous practices. However, they cannot stop you from being stupid. Follow the rules--they are there for a reason. Outdoors climbing takes place in an uncontrolled environment. There are all the usual dangers of being outside, like inclement weather, combined with some other possible dangers, like poorly anchored bolts. If you are climbing outside, go with an experienced climber and use your common sense.</li>
			<li><strong>Inattention.</strong> Safety gear only works if you use it properly. Inattention means not checking your gear, leaving your knots untied, or forgetting to double back your harness buckles. A belayer who is not paying attention to their climber can also fail to stop a fall or lower a climber too quickly. <strong>Always</strong> do your double-checks and <strong>never</strong> climb with a belayer you do not trust.</li>
			<li><strong>Inadequate or poorly maintained gear.</strong> Climbing gear is expensive, and it can be tempting to cut corners. Don't do it. A broken ankle is far more expensive than spending $20 extra dollars for a new harness. In the <a href="equipment.html">equipment</a> section I talk more about what gear you can buy used, and what you should get new. Also check your gear regularly for signs of wear, and replace it if it looks like it is starting to wear out. The same goes for rented or borrowed equipment. Inspect it, and don't be afraid to ask for other gear if what you got looks sketchy.</li>
		</ul>
		
		<p>Pay attention and trust your instincts, and you should be just fine.</p>
	</div>
	
	<div className="footer">
		<p>A sample site by Sylvia Richardson</p>
	</div>
</div>
</div>
	)
	}
}
export default Safety;