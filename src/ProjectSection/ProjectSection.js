/*
* @Author: Charlie Gallentine
* @Date:   2018-07-25 21:30:18
* @Last Modified by:   Charlie Gallentine
* @Last Modified time: 2018-08-21 15:03:16
*/
import React, { Component } from 'react';
import './ProjectSection.css';

export default class ProjectSection extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const project_list = document.getElementsByClassName("project_thumbnail");

		for (let i = 0; i < project_list.length; i+=1) {
		  console.log(project_list[i]);
		  project_list[i].addEventListener("click", function() {
		    for (let j = 0; j < project_list.length; j+=1) {
		      if (j != i) {
		        project_list[j].style.display = "none";
		        document.getElementsByClassName("project")[0].style.justifyContent = "center";
		      } else {
		        this.nextElementSibling.style.display = "inline-block";
		      }
		    }
		  }); 
		}

		document.addEventListener('click', function (event) {
		    console.log(event.target.parentElement.parentElement.parentElement.nodeName);
		    if (event.target.parentElement.parentElement.parentElement.nodeName == "BODY") {
		        // Clicked outside the element...
		      document.getElementsByClassName("project")[0].style.justifyContent = "space-around";
		      for (let i = 0; i < project_list.length; i+=1) {
		        project_list[i].style.display = "inline-block";
		        project_list[i].nextElementSibling.style.display = "none";
		      }
		    }
		}, false);


		return (
			<div className="project_list">
				{ 
					this.props.projects.map(function(current, index) {
					  return <div className="project" key="index">
					    <div className="project_thumbnail">
					      <img src={current.image} alt={current.alt} target="_blank"/>
					      <h1 style={{color: this.props.colors.color_1}}>{current.name}</h1>  
					    </div>
					    <div className="project_description">
					      <p>{current.description}</p>
					      <a 
					      	className="project_links"
					      	href={current.link}
					      	style={{color: this.props.colors.color_1}}>
					      	{current.name}
					      </a>
					    </div>
					  </div> 
				
					  index++;
				}, this)
			}
      </div>
		);
	}
};