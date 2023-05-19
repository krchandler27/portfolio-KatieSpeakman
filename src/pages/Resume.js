import React from 'react';
import './styles/Resume.css';

export default function Resume() {
  return (
    <div className="m-5 totalFont bottom text-center ">
      <h1 id="experience" className="display-4 ">Experience</h1>
      <div className="row">

        <div className="col-sm-12 col-md-6 mt-3">
          <h1 className="display-4 color">Front-End</h1>
          <ul className="mt-4">
            <li>Proficient in JavaScript programming language</li>
            <li>Strong understanding of HTML markup and structure</li>
            <li>Skilled in creating responsive and visually appealing CSS styles</li>
            <li>Experience with React framework for building interactive user interfaces</li>
            <li>Familiarity with GraphQL for efficient data fetching and manipulation</li>
            <li>Knowledge of Web APIs and integrating third-party services</li>
            <li>Proficient in using Handlebars.js for templating and dynamic content rendering</li>
            <li>Ability to design and develop responsive web interfaces</li>
          </ul>
        </div>

        <div className="col-sm-12 col-md-6 mt-3">
          <h1 className="display-4 color">Back-End</h1>
          <ul className="mt-4">
            <li>Experienced in developing full-stack applications using MERN stack (MongoDB, Express.js, React, Node.js)</li>
            <li>Proficient in MongoDB for database management</li>
            <li>Knowledge of Mongoose ODM for MongoDB object modeling</li>
            <li>Skilled in working with MySQL databases</li>
            <li>Strong expertise in Node.js for server-side JavaScript development</li>
            <li>Proficient in building RESTful APIs using Express.js framework</li>
            <li>Familiarity with Sequelize ORM for managing SQL databases</li>
            <li>Solid understanding of object-oriented programming principles</li>
            <li>Proficient in using npm for package management</li>
            <li>Comfortable with command-line tools and scripting</li>
            <li>Experience in version management using Git and GitHub</li>
            <li>Knowledge of back-end development practices and methodologies</li>
            <li>Ability to develop and deploy full-stack applications.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
