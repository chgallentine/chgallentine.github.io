/*
* @Author: Charlie Gallentine
* @Date:   2018-07-24 21:30:01
* @Last Modified by:   Charlie Gallentine
* @Last Modified time: 2018-08-21 18:23:01
*/
import React from 'react';
import './NavBar.css';

export default class NavBar extends React.Component {
	/*
	constructor(props) {
		super(props);
	}
	*/

	render() {
		return (
			<nav style={{backgroundColor: this.props.colors.backgroundColor}}>
	            <a 
	                 href="#home-page" 
	                 className="scrollLink"
	                 style = {{color: this.props.colors.color_2}}>
	              <h5 className="color-1 scrollLink-content">Top</h5>
	            </a>
	            <a 
	                 href="#projects" 
	                 className="scrollLink"
	                 style = {{color: this.props.colors.color_2}}>
	              <h5 className="color-1 scrollLink-content">Projects</h5>
	            </a>
	            <a 
	                 href="#media" 
	                 className="scrollLink"
	                 style = {{color: this.props.colors.color_2}}>
	              <h5 className="color-1 scrollLink-content">Media</h5>
	            </a>
	          </nav> 
		);
	}
};
