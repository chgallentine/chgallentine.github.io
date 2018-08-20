/*jshint esversion:6*/

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import projects from "./projects.js";

import NavBar from './NavBar/NavBar.js';
import NameSection from './NameSection/NameSection.js';
import ContactSection from './ContactSection/ContactSection.js';
import ProjectSection from './ProjectSection/ProjectSection.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: {
        backgroundColor: "#39D7B6",
        gradient: "black",
        color_1: "#EC2140",
        color_2: "#0E1F13",
      },
      resume_href: "#",
      projects: projects,
    };

    this.handleSetColor = this.handleSetColor.bind(this);
    this.handleSetColor;
  }

  componentWillMount() {
    document.addEventListener('load', this.handleSetColor);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleSetColor);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleSetColor);
  }

  handleSetColor(event) {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    this.setState({
      colors: {
        backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        gradient: `rgb(${Math.abs(red-200)}, ${Math.abs(green-200)}, ${Math.abs(blue-200)})`,
        color_1: `rgb(${(255 - red)},${(255 - green)},${(255 - blue)})`,
        color_2: `rgb(${(294 - red)%255},${(255 - green)%255},${(161 - blue)%255})`,
      }
    });
  }

  render() {
    document.body.style.backgroundColor = this.state.colors.backgroundColor;
    document.body.style.background = `linear-gradient(
      ${this.state.colors.backgroundColor}, 
      ${this.state.colors.gradient}
    )`;

    return (
      <div id="fullPageContent">
        <NavBar colors={this.state.colors}/>

        <section id="home-page">
          <NameSection colors={this.state.colors}/>
        </section>

        <section id="projects">
            <ProjectSection 
              colors={this.state.colors} 
              projects={this.state.projects.websites}
            />
        </section>

        <section id="media">
          <ContactSection colors={this.state.colors}/>
        </section>

        <footer>
          <h4 style={{color:'white'}}>(c) Charlie Gallentine 2018</h4>
        </footer>
      </div>
    );
  }
}

export default App;
