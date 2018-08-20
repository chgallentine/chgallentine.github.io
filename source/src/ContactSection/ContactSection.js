/*
* @Author: Charlie Gallentine
* @Date:   2018-07-24 21:46:34
* @Last Modified by:   Charlie Gallentine
* @Last Modified time: 2018-08-20 16:20:35
*/
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './ContactSection.css';

export default class ContactSection extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
			<div id="media_links">
	              <a href="https://github.com/chgallentine" 
	              	class="link_to_media"
	                target="_blank"
	                rel="noopener noreferrer"
	                style={{color: this.props.colors.backgroundColor}}>
	                <FontAwesome name="fa-github" className="fa fa-github" aria-hidden="true" />
	              </a>
	              <a href="https://www.linkedin.com/in/charlie-gallentine-0a0424a2/" 
	              	class="link_to_media"	
	                target="_blank"
	                rel="noopener noreferrer"
	                style={{color: this.props.colors.backgroundColor}}>
	                <FontAwesome name="fa-linkedin" className="fa fa-linkedin" size="6em" aria-hidden="true"/>
	              </a>
	              <a href="https://www.instagram.com/chgallentine/" 
	              	class="link_to_media"
	                target="_blank"
	                rel="noopener noreferrer"
	                style={{color: this.props.colors.backgroundColor}}>
	                <FontAwesome name="fa-instagram" className="fa fa-instagram" aria-hidden="true"/>
	              </a>
	        </div>
	            <h3 style={{textAlign:'center', color:'white',}}>Feel free to reach out!</h3>
            </div>
		);
	}
};