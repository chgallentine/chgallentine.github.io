/*
* @Author: Charlie Gallentine
* @Date:   2018-07-24 21:41:27
* @Last Modified by:   Charlie Gallentine
* @Last Modified time: 2018-08-21 18:23:27
*/
import React from 'react';
import './NameSection.css';

export default class NameSection extends React.Component {
	/*
	constructor(props) {
		super(props);
	}
	*/

	render() {
		return (
			<div id="name_section">
				<div className="name-container">
        	<div className="name-full">
            <div 
            	className="name-proper" 
            	style={{color: this.props.colors.color_1}}>
              	<h1 className="name-james">James C.</h1>
              	<h1 className="name-gallentine">Gallentine</h1>
            </div>
            <div 
            className="name-middle"
            style={{color: this.props.colors.color_2}}>
              	<h2 className="name-charlie">charlie</h2>
              	<h2 className="name-carrot">^</h2>
          	</div>
          <div className="name-shadow"></div>
        	</div>
      	</div>
	      <div className="links">
	        <a 
	          href="#media" 
	          className="link"
	      		style={{
	      			color: this.props.colors.color_2, 
	      			borderBottom: `2px solid ${this.props.colors.color_2}`,
	      		}}>
	          <h1 className="name_link">
	            Contact
	          </h1>
	        </a>
	        <a 
	          href={this.props.resume_href} 
	          id="download"
	          className="link"
	          style={{
	      			color: this.props.colors.color_2, 
	      			borderBottom: `2px solid ${this.props.colors.color_2}`,
	      		}}>
	          <h1 
	          	href="../../Resume.pdf" 
	          	id="resume-download" 
	          	className="name_link">
	            Resume
	          </h1>
	        </a>
	      </div>
	    </div>
		);
	}
};