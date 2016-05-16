import React, {Component} from 'react';

export default class AppAbout extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className='aboutContainer'>
        <div className='container'>
          <h4>Mission</h4>
          <p>
            Gitalytics is designed to help you quickly find the projects you care about.
            Using the GitHub Search API, Gitalytics optimizes the search for interesting repos,
            users, and organizations. The top new and overall trending repos and organizations
            can also be found on the trends page.
          </p>
          <h4>Tech Stack</h4>
          <p>
            Tools used to build this app
          </p>
          <h4>Dev Team</h4>
          <p>
            Our team is group of 3 passionate software engineers.
          </p>
          <div className='row'>
            <div className='col s12 m12 l12'>
              <div className='teamMember col s4 m4 l4'>
                <div className='name'>Jenna Gain</div>
                <img className='responsive-img circle imgDev' src='./images/jenna.jpeg' />
                <div className='info'>
                  { ' ' }
                  <br />
                  Software Engineer
                  <br />
                  <a href='https://github.com/gainjenna' target='_blank'>
                    <img className='iconGit' src='./images/icon_github.jpg' />
                    { ' ' } <div>GitHub</div>
                  </a>
                </div>
              </div>
              <div className='teamMember col s4 m4 l4'>
                <div className='name'>Alex Paczynski</div>
                <img className='responsive-img circle imgDev' src='./images/alex.jpg' />
                <div className='info'>
                  Product Owner
                  <br />
                  Software Engineer
                  <br />
                  <a href='https://github.com/re1nv3nt' target='_blank'>
                    <img className='iconGit' src='./images/icon_github.jpg' />
                    { ' ' } <div>GitHub</div>
                  </a>
                </div>
              </div>
              <div className='teamMember col s4 m4 l4'>
                <div className='name'>Caleb Rogers</div>
                <img className='responsive-img circle imgDev' src='./images/caleb.jpeg' />
                <div className='info'>
                  Scrum Master
                  <br />
                  Software Engineer
                  <br />
                  <a href='https://github.com/komali2' target='_blank'>
                    <img className='iconGit' src='./images/icon_github.jpg' />
                    { ' ' } <div>GitHub</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

};