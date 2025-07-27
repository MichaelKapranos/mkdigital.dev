
import React from 'react';
import './AboutMe.css';

const AboutMe: React.FC = () => {
  return (
    <div className="aboutMe-container">
      <h1 className="aboutMe-title">About Me</h1>
      <div className="aboutMe-content">
        <p>
          Hi, I'm Michael Kapranos — a software developer and cloud engineer with a passion for building scalable systems and exploring the ever-evolving world of cloud technologies.
        </p>
        <p>
          My core expertise lies in <strong>C# and .NET</strong>, complemented by extensive experience in <strong>PL/SQL</strong> and <strong>SQL Server</strong>. Over the past few years, I’ve expanded into <strong>AWS</strong> and <strong>GCP</strong>, working with services like EC2, Lambda, CloudFormation, CloudWatch, X-Ray, Aurora, Redshift, Amplify, Route 53, and more.
        </p>
        
        <h2>Current Role</h2>
        <p>
          I currently work at Callisto as a Software Developer and Cloud Engineer, where I transitioned from MDS to take on more cloud-focused responsibilities. This move allowed me to work directly with AWS technologies on high-impact projects, particularly within the energy sector. One of my key contributions has been helping lead the transition to a new half-hourly metering system, where I developed scalable, high-performance APIs using .NET Core to facilitate seamless data exchange between on-premise systems and external platforms.
        </p>
        <p>
          I’ve also built internal tools to support the testing team, using Cucumber and .NET Core to streamline validation processes. My work often involves processing large volumes of data through Oracle and AWS, and I’ve developed data transformation tools to ensure consistency and reliability across processing flows. In addition to development, I frequently diagnose and resolve issues using observability tools like CloudWatch, X-Ray, and CloudTrail, and have worked with services such as Lambda, EC2, Aurora, Redshift (including Redshift Serverless), and Grafana.
        </p>
        <p>
          Recognizing the importance of cost efficiency, I independently developed a proof of concept using AWS Cost and Usage Reporting (CUR), Aurora, and QuickSight to visualize and analyze system usage. This initiative led to a broader cost optimization project, which I now lead. I also collaborate directly with AWS tutors to refine technical solutions and am currently building a volume-persistent testing framework that replicates live data flows using CI/CD pipelines, AWS X-Ray, and Cucumber.
        </p>

        <h2>Personal Projects</h2>
        <ul>
          <li><strong>Magic Mirror</strong>: Built from scratch and powered by a Raspberry Pi.</li>
          <li><strong>Game Server Box</strong>: Converted a mini Windows PC into a Linux-based, headless game server using Docker.</li>
          <li><strong>Walking Table (In Progress)</strong>: A robotics project inspired by the Strandbeest, using C# to control motorized legs with plans to integrate AI and computer vision.</li>
          <li><strong>Pi-hole Setup</strong>: Configured a Raspberry Pi to manage network traffic and block unwanted content.</li>
        </ul>
        <h2>Certifications</h2>
        <ul>
          <li>AWS Cloud Practitioner – 04/2022</li>
          <li>AWS Solutions Architect Associate – 07/2024</li>
          <li>GCP Associate Cloud Engineer – 11/2024</li>
          <li>AWS Solutions Architect Professional – In Progress</li>
        </ul>
        <h2>Philosophy</h2>
        <p>
          I thrive on solving complex problems and learning new technologies. Whether it's diving into a new cloud service or building something from scratch, I’m always looking for the next challenge that pushes me to grow. My self-motivation and adaptability have helped me succeed in both professional and personal development projects.
        </p>
      </div>


      <footer className="aboutMe-footer">
        <p>Connect with me:</p>
        
        <a href="https://www.linkedin.com/in/michael-kapranos-275a79214" target="_blank">LinkedIn</a>

      </footer>
    </div>
  );
};

export default AboutMe;
